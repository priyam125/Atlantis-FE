import "./App.css";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shop/ShopPage";
import SignIn from "./pages/sign-in";
import Checkout from "./pages/Checkout";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/Firebase.util";
import Header from "./pages/Header";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_CURRENT_USER } from "./redux/user/userActions";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CollectionOverview from "./pages/CollectionOverview";

//test

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
  const dispatcher = useDispatch();

  const unsubscribeFromAuth = null;

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      // console.log(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          dispatcher({
            type: SET_CURRENT_USER,
            payload: { currentUser: { id: snapshot.id, ...snapshot.data() } },
          });

          console.log("User added");
        });
      } else
        dispatcher({
          type: SET_CURRENT_USER,
          payload: { currentUser: userAuth }, //null
        });
    });
  }, []);

  useEffect(() => {
    console.log(currentUser);
  });

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/sign-in"
          render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
        />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/shop/:collection" component={CollectionOverview} />
      </Switch>
    </div>
  );
};

export default App;

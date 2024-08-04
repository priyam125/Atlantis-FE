import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/Firebase.util";
import { ReactComponent as Logo } from "../assests/crown.svg";
import { useSelector } from "react-redux";

import CartIcon from "../components/CartIcon";
import CartDropdown from "../components/CartDropdown";

const Header = ({}) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const showCart = useSelector(state => state.cart.showCart)
  console.log(currentUser);

  return (
    <div className="flex justify-between mb-6 w-full h-16 md:px-8 px-2">
      <Link className="h-full w-16 p-6" to="/">
        <Logo className="logo" />
      </Link>
      <div className="md:w-1/2 w-4/5 h-full flex items-center justify-end text-xl mt-4">
        <Link className="px-2 py-4" to="/shop">
          SHOP
        </Link>
        <Link className="px-2 py-4" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="px-2 py-4 cursor-pointer"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="px-2 py-4" to="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon className="px-2 py-4 cursor-pointer" />
      </div>
      {showCart ? <CartDropdown /> : null}
    </div>
  );
};

export default Header;

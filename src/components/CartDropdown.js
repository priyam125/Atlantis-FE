import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { TOGGLE_CART } from "../redux/cart/cartActions";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  const dispatcher = useDispatch();


  const handleClick = () => {
    dispatcher({
      type: TOGGLE_CART,
      payload: { showCart: false },
    });

    console.log();
  };

  return (
    <div className="absolute w-60 h-80 flex flex-col p-5 border-2 border-black bg-white top-24 right-10 z-10">
      <div className="h-60 flex flex-col overflow-y-scroll">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="text-xl m-auto">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout">
        <button onClick={handleClick} className="custom-button hover:bg-white hover:text-black hover:border-2 hover:border-black">
          GO TO CHECKOUT
        </button>
      </Link>
      
    </div>
  );
};

export default CartDropdown;

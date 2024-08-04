import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { TOGGLE_CART } from "../redux/cart/cartActions";

const CartIcon = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  console.log(showCart);

  const cartItems = useSelector(state => state.cart.cartItems)
  console.log(cartItems);

  const itemCount = cartItems.reduce((accumulator, currentValue) => {
    // console.log(currentValue);
    return accumulator + currentValue.quantity
  }, 0)

  console.log(itemCount);

  const dispatcher = useDispatch();

  const handleClick = () => {
    dispatcher({
      type: TOGGLE_CART,
      payload: { showCart: !showCart },
    });

    console.log(showCart);
  };

  return (
    <div onClick={handleClick} className="flex items-center justify-center w-11 h-16 cursor-pointer">
      <BsCart
        style={{ fontWeight: "normal" }}
        className="relative w-8 h-8 font-light"
      />
      <span className="cart-icon absolute font-bold text-sm mb-0.5">{itemCount}</span>
    </div>
  );
};

export default CartIcon;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckoutItem from "../components/CheckoutItem";
import StripeCheckoutButton from "../components/StripeCheckoutButton";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  const total_price = cartItems.reduce((accumulator, { price, quantity }) => {
    return accumulator + price * quantity;
  }, 0);

  return (
    <div className="md:w-1/2 w-4/5 mt-12 mx-auto mb-20 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-between border-b-2 border-gray-600">
        <div className="capitalize checkout-item">
          <span>Product</span>
        </div>
        <div className="capitalize checkout-item">
          <span>Description</span>
        </div>
        <div className="capitalize checkout-item">
          <span>Quantity</span>
        </div>
        <div className="capitalize checkout-item">
          <span>Price</span>
        </div>
        <div className="capitalize w-1/12 mr-4 md:mr-0">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="mt-7 ml-auto text-4xl">TOTAL: Rs. {total_price}</div>
      <div className="items-center mt-10 text-2xl text-red-600">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total_price} />
    </div>
  );
};

export default Checkout;

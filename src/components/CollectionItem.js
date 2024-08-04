import React, {useState} from "react";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../redux/cart/cartActions";

const CollectionItem = ({item}) => {

    const { name, imageUrl, price } = item
    // console.log(price);
    const dispatcher = useDispatch()

    const handleClick = () => {
        dispatcher({
            type: ADD_TO_CART,
            payload: {cartItem: item}
        })
    }

  return (
    <div onFocus={() => {
    }} className="collection-item flex flex-col items-center mr-4 shadow-lg hover:shadow-2xl md:hover:opacity-90 relative mb-12">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="bg-cover bg-center w-full h-full mb-1"
      />
      <button onClick={handleClick} className="opacity-70 absolute top-2/3 add-to-cart-button hover:bg-white hover:text-black hover:border-2 hover:border-black">
        ADD TO CART
      </button>
      <div className="flex w-full h-1/12 justify-between text-lg">
        <span className="w-11/12 mb-4">{name}</span>
        <span className="w-1/12">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;

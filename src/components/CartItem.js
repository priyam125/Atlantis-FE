import React from 'react'

const CartItem = ({item: {imageUrl, price, name, quantity}} ) => {
    console.log(imageUrl);
    return (
        <div className='w-full flex h-20 mb-4'>
            <img className='w-1/3' src={imageUrl} alt='item'/>
            <div className='w-2/3 flex flex-col items-start justify-center py-2.5 px-5'>
                <span className='text-xs'>{name}</span>
                <span>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem

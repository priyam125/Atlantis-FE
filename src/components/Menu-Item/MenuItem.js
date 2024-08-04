import React from "react";
import '../../index.css'

const MenuItem = ({title, imageUrl, size}) => {
  return (
      <div  className={`${size} item flex items-center justify-center border-2 border-black mx-2 mb-4 h-60 bg-center bg-cover`}>
        <div style={{backgroundImage: `url(${imageUrl})`}} className='background-image bg-center bg-cover h-full w-full'/>
        <div className="content flex flex-col items-center justify-center border-2 border-black px-6 bg-gray-200 opacity-70 absolute">
          <h1 className="font-bold mb-1.5 text-xl text-gray-600">{title.toUpperCase()}</h1>
          <span className="font-light text-base">SHOP NOW</span>
        </div>
      </div>
  );
}

export default MenuItem;

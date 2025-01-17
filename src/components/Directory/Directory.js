import React, { useState } from "react";
import MenuItem from "../Menu-Item/MenuItem";
import '../../index.css'

const Directory = () => {
  const [sections, setSections] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
    },
  ]);

  return (
      <div className="w-full flex flex-wrap justify-between">
        {sections.map(({id, title, imageUrl, size}) => {
            return (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        )})}
      </div>
  );
};

export default Directory;

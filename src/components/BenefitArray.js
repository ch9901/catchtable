import React from "react";
import Array from "../json/benefit.json";

Array.map((item) => console.log(item));

const BenefitArray = () => {
  Array.map((item) => {
    return (
      <div className="slide-cont">
        <span className="slide-img">
          <img src={item.img} alt={item.name}></img>
          <span className="benefit-part">{item.benefit}</span>
        </span>
        <span className="slide-des">
          {item.name}
          <span className="slide-stardes">
            <b>{item.star}</b>
            {item.category} • {item.location}
          </span>
          <span className="slide-bookmark"></span>
        </span>
      </div>
    );
  });
};

export default BenefitArray;

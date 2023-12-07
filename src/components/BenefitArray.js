import React, { useEffect, useState } from "react";
import Array from "../json/benefit.json";
import { benefitImg } from "./util";
import "./Benefit.css";

const newData = Array.map((item) => item);
const BenefitArray = () => {
  const [isDataLoded, setIsDataLoded] = useState(false);

  useEffect(() => {
    setIsDataLoded(true);
  }, []);

  if (!isDataLoded) {
    return <div>데이터를 불러오는 중 입니다</div>;
  } else {
    return Array.map((item) => (
      <div key={item.name} className="slide-cont">
        <span className="slide-img">
          <span className="benefit-part">{item.benefit}</span>
          <img src={benefitImg(item.name)} />
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
    ));
  }
};

export default BenefitArray;

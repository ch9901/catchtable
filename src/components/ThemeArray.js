import React, { useEffect, useState } from "react";
import { themeImg } from "./util";
import Array from "../json/theme";

const ThemeArray = () => {
  const [isDataLoded, setIsDataLoded] = useState(false);
  useEffect(() => {
    setIsDataLoded(true);
  }, []);

  if (!isDataLoded) {
    return <div>데이터를 불러오는 중 입니다</div>;
  } else {
    return Array.map((item, index) => (
      <div key={index} className="slide-cont">
        <div className="slide-img">
          <img
            key={index + 1}
            className="theme-pic"
            src={themeImg(index + 1)}
            alt={item}
          />
        </div>
      </div>
    ));
  }
};

export default ThemeArray;

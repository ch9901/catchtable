import React from "react";
import { themeImg } from "./util";
import Array from "../json/theme";

const ThemeArray = () => {
  let ranNum = [];

  for (let i = 0; i < 15; i++) {}
  const setNum = new Set();

  return (
    <div className="slide-cont">
      {Array.map((item) => (
        <div className="slide-img">
          <img className="theme-pic" src={themeImg(ranNum)} alt={item} />
        </div>
      ))}
    </div>
  );
};

export default ThemeArray;

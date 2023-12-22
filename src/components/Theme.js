import React from "react";
import ThemeArray from "./ThemeArray";

const Theme = () => {
  return (
    <section className="pricebest section-inner">
      <span className="price-tit section-tit"> 상황별·주제별 BEST </span>
      <div className="contslide">
        <div className="slide-cont-wrap theme-wrap">
          <ThemeArray />
        </div>
      </div>
    </section>
  );
};

export default Theme;

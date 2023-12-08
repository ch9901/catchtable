import React from "react";
import "./PriceBest.css";
import { useRef } from "react";

const PriceBest = () => {
  const tabRef = useRef();
  const tabWrapper = useRef();
  const onClickTab = (e) => {
    const clickedBtn = e.target;
    clickedBtn.classList.add("on");
    console.log(clickedBtn.previousSibling);
    console.log(tabWrapper.childNodes);
  };

  return (
    <section className="pricebest section-inner">
      <span className="price-tit section-tit"> 가격대별 BEST </span>
      <div ref={tabWrapper} className="price-select-wrap">
        <button onClick={onClickTab} className="price-select on first-btn">
          3만원이하
        </button>
        <button onClick={onClickTab} className="price-select second-btn">
          3-5만원
        </button>
        <button onClick={onClickTab} className="price-select third-btn">
          5-10만원
        </button>
        <button onClick={onClickTab} className="price-select fourth-btn">
          10만원이상
        </button>
      </div>
      <div className="view-more">가격별 레스토랑 전체보기</div>
    </section>
  );
};

export default PriceBest;

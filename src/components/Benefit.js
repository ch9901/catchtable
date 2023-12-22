import React from "react";
import BenefitArray from "./BenefitArray";

const Benefit = () => {
  return (
    <section className="benefit section-inner">
      <div className="benefit-header">
        <span className="section-tit">놓치면 안되는 혜택 가득!</span>
        <p className="section-des">미식생활을 더욱 스마트하게 즐겨보세요</p>
        <p className="btn-more">전체보기</p>
      </div>
      <div className="contslide">
        <div className="slide-cont-wrap benefit-wrap">
          <BenefitArray />
        </div>
      </div>
    </section>
  );
};

export default Benefit;

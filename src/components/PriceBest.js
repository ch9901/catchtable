import "./PriceBest.css";
import { useRef, useState } from "react";

const PriceBest = ({ priceTab }) => {
  console.log(priceTab);
  const tabRef = useRef();
  const onClickTab = (e) => {
    const clickedBtn = e.target;
    clickedBtn.classList.add("on");
    console.log(clickedBtn.previousSibling);
  };

  const [tab, setTab] = useState(0);
  if (tab === 1) {
    tab.current.classList.add("on");
  }
  console.log(tab);

  return (
    <section className="pricebest section-inner">
      <span className="price-tit section-tit"> 가격대별 BEST </span>
      <div className="price-select-wrap">
        {priceTab.map((item) => (
          <button key={item} onClick={setTab} className="price-select">
            {item}
          </button>
        ))}
      </div>
      <div className="view-more">가격별 레스토랑 전체보기</div>
    </section>
  );
};

export default PriceBest;

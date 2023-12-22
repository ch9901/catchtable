import firstPrice from "../json/pricetab-first.json";
import secondPrice from "../json/pricetab-second.json";
import thirdPrice from "../json/pricetab-third.json";
import fourthPrice from "../json/pricetab-fourth.json";
import { useRef, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
const PriceBest = () => {
  return (
    <section className="pricebest section-inner">
      <span className="price-tit section-tit"> 가격대별 BEST </span>
      <div className="price-select-wrap">
        <Tabs
          defaultActiveKey="firstPrice"
          id="fill-tab-example"
          className="mb-3"
          variant="underline"
          fill
        >
          <Tab eventKey="firstPrice" title="3만원이하">
            {firstPrice.map((item, index) => (
              <div key={index} className="price-list">
                <div className="price-imgwrap">
                  <img src={item.img} alt="itemimg" />
                </div>
                <div className="price-info">
                  <h1 className="price-tit">{item.name}</h1>
                  <span className="price-des">{item.des}</span>
                  <div className="price-starwrap">
                    <img
                      src="https://app.catchtable.co.kr/public/img/icons/star-yellow.svg"
                      alt="starimg"
                    />
                    <span className="price-rate">{item.star}</span>
                    <span className="price-review">({item.review})</span>
                  </div>
                </div>
              </div>
            ))}
          </Tab>
          <Tab eventKey="secondPrice" title="3-5만원">
            {secondPrice.map((item, index) => (
              <div key={index} className="price-list">
                <div className="price-imgwrap">
                  <img src={item.img} alt="itemimg" />
                </div>
                <div className="price-info">
                  <h1 className="price-tit">{item.name}</h1>
                  <span className="price-des">{item.des}</span>
                  <div className="price-starwrap">
                    <img
                      src="https://app.catchtable.co.kr/public/img/icons/star-yellow.svg"
                      alt="starimg"
                    />
                    <span className="price-rate">{item.star}</span>
                    <span className="price-review">({item.review})</span>
                  </div>
                </div>
              </div>
            ))}
          </Tab>
          <Tab eventKey="thirdPrice" title="5-10만원">
            {thirdPrice.map((item, index) => (
              <div key={index} className="price-list">
                <div className="price-imgwrap">
                  <img src={item.img} alt="itemimg" />
                </div>
                <div className="price-info">
                  <h1 className="price-tit">{item.name}</h1>
                  <span className="price-des">{item.des}</span>
                  <div className="price-starwrap">
                    <img
                      src="https://app.catchtable.co.kr/public/img/icons/star-yellow.svg"
                      alt="starimg"
                    />
                    <span className="price-rate">{item.star}</span>
                    <span className="price-review">({item.review})</span>
                  </div>
                </div>
              </div>
            ))}
          </Tab>
          <Tab eventKey="fourthPrice" title="10만원 이상">
            {fourthPrice.map((item, index) => (
              <div key={index} className="price-list">
                <div className="price-imgwrap">
                  <img src={item.img} alt="itemimg" />
                </div>
                <div className="price-info">
                  <h1 className="price-tit">{item.name}</h1>
                  <span className="price-des">{item.des}</span>
                  <div className="price-starwrap">
                    <img
                      src="https://app.catchtable.co.kr/public/img/icons/star-yellow.svg"
                      alt="starimg"
                    />
                    <span className="price-rate">{item.star}</span>
                    <span className="price-review">({item.review})</span>
                  </div>
                </div>
              </div>
            ))}
          </Tab>
        </Tabs>
      </div>
      <div className="view-more">가격별 레스토랑 전체보기</div>
    </section>
  );
};

export default PriceBest;

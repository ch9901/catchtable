import React from "react";
import { categoryImg } from "./util";

const Category = () => {
  return (
    <div>
      <section className="category section-inner">
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("23best")} alt="category-img" />
          </span>
          <span className="category-des">23년 베스트</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("lastofyear")} alt="category-img" />
          </span>
          <span className="category-des">연말예약</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("christmas")} alt="category-img" />
          </span>
          <span className="category-des">크리스마스</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("cake")} />
          </span>
          <span className="category-des">케이크</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("group")} alt="category-img" />
          </span>
          <span className="category-des">모임예약</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("online")} alt="category-img" />
          </span>
          <span className="category-des">온라인웨이팅</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("seoulspot")} />
          </span>
          <span className="category-des">서울미식스팟</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("wine")} />
          </span>
          <span className="category-des">와인배송</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("dining")} />
          </span>
          <span className="category-des">다이닝입문</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("event")} />
          </span>
          <span className="category-des">이벤트</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("waitingtop")} />
          </span>
          <span className="category-des">웨이팅TOP</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("omacase")} />
          </span>
          <span className="category-des">오마카세</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("umacase")} />
          </span>
          <span className="category-des">우마카세</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("dining")} />
          </span>
          <span className="category-des">호텔다이닝</span>
        </div>
        <div className="category-wrap">
          <span className="category-img">
            <img src={categoryImg("savetop")} />
          </span>
          <span className="category-des">저장TOP</span>
        </div>
      </section>
    </div>
  );
};

export default Category;

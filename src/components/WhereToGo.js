import React from "react";
import { whereimg } from "./util";


const WhereToGo = () => {
  return (
    <section className="where-to-go section-inner">
      <span className="section-tit">어디로 가시나요?</span>
      <div className="where-to-do-cont-wrap">
        <div className="where-to-go-cont">
          <span className="where-to-go-img">
            <img src={whereimg("search")} alt="where-to-go-img" />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">압구정 청담</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("apgujung")}
              alt="where-to-go-img"
            />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">이태원 한남</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("itaewon")}
              alt="where-to-go-img"
            />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">부산</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("busan")}
              alt="where-to-go-img"
            />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">성수</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("sungsu")}
              alt="where-to-go-img"
            />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">광화문 종로</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("kwanghwa")}
              alt="where-to-go-img"
            />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">강남 역삼</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("gangnam")}
              alt="where-to-go-img"
            />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">합정 망원</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("hapjung")}
              alt="where-to-go-img"
            />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">홍대 신촌</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("hongdae")}
              alt="where-to-go-img"
            />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">여의도</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("yeoui")}
              alt="where-to-go-img"
            />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">북촌 삼청</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("bukchon")}
              alt="where-to-go-img"
            />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">을지로</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("euljiro")}
              alt="where-to-go-img"
            />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">제주</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("jeju")}
              alt="where-to-go-img"
            />
          </span>
          <span className="where-to-go-img">
            <p className="where-to-go-des">대구</p>
            <img
              className="where-to-go-locationimg"
              src={whereimg("daegu")}
              alt="where-to-go-img"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhereToGo;

import React from "react";
import { adslideImg } from "./util";
import "./Adslide.css";

const Adslide = () => {
  return (
    <div>
      <section className="adslide">
        <ul className="adslide-wrap">
          <li className="adslide-cont">
            <img src={adslideImg("adslide1")} alt="slide" />
          </li>
          <li className="adslide-cont">
            <img src={adslideImg("adslide2")} alt="slide" />
          </li>
          <li className="adslide-cont">
            <img src={adslideImg("adslide3")} alt="slide" />
          </li>
          <li className="adslide-cont">
            <img src={adslideImg("adslide4")} alt="slide" />
          </li>
          <li className="adslide-cont">
            <img src={adslideImg("adslide5")} alt="slide" />
          </li>
          <li className="adslide-cont">
            <img src={adslideImg("adslide6")} alt="slide" />
          </li>
          <li className="adslide-cont">
            <img src={adslideImg("adslide7")} alt="slide" />
          </li>
          <li className="adslide-cont">
            <img src={adslideImg("adslide8")} alt="slide" />
          </li>
          <li className="adslide-cont">
            <img src={adslideImg("adslide9")} alt="slide" />
          </li>
          <li className="adslide-cont">
            <img src={adslideImg("adslide10")} alt="slide" />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Adslide;

import React from "react";
import { adslideImg } from "./util";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Adslide = () => {
  return (
    <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={true}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={adslideImg("adslide1")} />
        </div>
        <div>
          <img src={adslideImg("adslide2")} />
        </div>
        <div>
          <img src={adslideImg("adslide3")} />
        </div>
        <div>
          <img src={adslideImg("adslide4")} />
        </div>
        <div>
          <img src={adslideImg("adslide5")} />
        </div>
        <div>
          <img src={adslideImg("adslide6")} />
        </div>
        <div>
          <img src={adslideImg("adslide7")} />
        </div>
        <div>
          <img src={adslideImg("adslide8")} />
        </div>
        <div>
          <img src={adslideImg("adslide9")} />
        </div>
        <div>
          <img src={adslideImg("adslide10")} />
        </div>
      </Carousel>
    </div>
  );
};

export default Adslide;

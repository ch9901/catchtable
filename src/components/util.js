//header
import magnify from "./contents/header/search-gray.svg";

//adslide
import adslide1 from "./contents/slide/2023rank.png";
import adslide2 from "./contents/slide/christmas.png";
import adslide3 from "./contents/slide/goodbye2023.png";
import adslide4 from "./contents/slide/hiddenplace.png";
import adslide5 from "./contents/slide/lastofyear.png";
import adslide6 from "./contents/slide/moet.png";
import adslide7 from "./contents/slide/newplace.png";
import adslide8 from "./contents/slide/top40.png";
import adslide9 from "./contents/slide/trend.png";
import adslide10 from "./contents/slide/wine.png";

//category
import category1 from "./contents/category/23best.png";
import category2 from "./contents/category/lastofyear.png";
import category3 from "./contents/category/christmas.png";
import category4 from "./contents/category/cake.png";
import category5 from "./contents/category/group.png";
import category6 from "./contents/category/online.png";
import category7 from "./contents/category/seoulspot.png";
import category8 from "./contents/category/wine.png";
import category9 from "./contents/category/dining.png";
import category10 from "./contents/category/event.png";
import category11 from "./contents/category/waitingtop.png";
import category12 from "./contents/category/omacase.png";
import category13 from "./contents/category/umacase.png";
import category14 from "./contents/category/savetop.png";

//where-to-go
import where1 from "./contents/whereToGo/0706apgujeong.jpg";
import where2 from "./contents/whereToGo/0706itaewon.jpg";
import where3 from "./contents/whereToGo/busan_.jpg";
import where4 from "./contents/whereToGo/0706sungsoo.jpg";
import where5 from "./contents/whereToGo/0706gwanghwamun.jpg";
import where6 from "./contents/whereToGo/0706gangnam.jpg";
import where7 from "./contents/whereToGo/0609_location_hapjeong,mangwon.png";
import where8 from "./contents/whereToGo/0706hongdae.jpg";
import where9 from "./contents/whereToGo/0706yeouido.jpg";
import where10 from "./contents/whereToGo/0706bukchon_0331.jpg";
import where11 from "./contents/whereToGo/0706euljiro_0331.jpg";
import where12 from "./contents/whereToGo/jeju_.jpg";
import where13 from "./contents/whereToGo/0307_location_daegu@2x.png";
import where14 from "./contents/whereToGo/icon-search-nearby.svg"

export const headerImg = (imgName) => {
  switch (imgName) {
    case "magnify":
      return magnify;
  }
};

export const adslideImg = (imgName) => {
  switch (imgName) {
    case "adslide1":
      return adslide1;
    case "adslide2":
      return adslide2;
    case "adslide3":
      return adslide3;
    case "adslide4":
      return adslide4;
    case "adslide5":
      return adslide5;
    case "adslide6":
      return adslide6;
    case "adslide7":
      return adslide7;
    case "adslide8":
      return adslide8;
    case "adslide9":
      return adslide9;
    case "adslide10":
      return adslide10;
  }
};

export const categoryImg = (imgName) => {
  switch (imgName) {
    case "23best":
      return category1;
    case "lastofyear":
      return category2;
    case "christmas":
      return category3;
    case "cake":
      return category4;
    case "group":
      return category5;
    case "online":
      return category6;
    case "seoulspot":
      return category7;
    case "wine":
      return category8;
    case "dining":
      return category9;
    case "event":
      return category10;
    case "waitingtop":
      return category11;
    case "omacase":
      return category12;
    case "umacase":
      return category13;
    case "savetop":
      return category14;
  }
};

export const whereimg = (imgName) => {
  switch (imgName) {
    case "apgujung":
      return where1;
    case "itaewon":
      return where2;
    case "busan":
      return where3;
    case "sungsu":
      return where4;
    case "kwanghwa":
      return where5;
    case "gangnam":
      return where6;
    case "hapjung":
      return where7;
    case "hongdae":
      return where8;
    case "yeoui":
      return where9;
    case "bukchon":
      return where10;
    case "euljiro":
      return where11;
    case "jeju":
      return where12;
    case "daegu":
      return where13;
      case "search":
      return where14;
  }
};

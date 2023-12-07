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
import where14 from "./contents/whereToGo/icon-search-nearby.svg";

//benefit
import benefit1 from "./contents/benefit/aranchini.png";
import benefit2 from "./contents/benefit/omacase.jpg";
import benefit3 from "./contents/benefit/tokkidining.jpg";
import benefit4 from "./contents/benefit/wineandsteak.jpeg";
import benefit5 from "./contents/benefit/dali.jpg";
import benefit6 from "./contents/benefit/litempo.jpg";
import benefit7 from "./contents/benefit/bluepafe.jpg";
import benefit8 from "./contents/benefit/muu.jpeg";
import benefit9 from "./contents/benefit/ardere.jpg";
import benefit10 from "./contents/benefit/woomage.jpg";

//theme

import theme1 from "./contents/theme/begun.png";
import theme2 from "./contents/theme/black.png";
import theme3 from "./contents/theme/chef.png";
import theme4 from "./contents/theme/concert.png";
import theme5 from "./contents/theme/date.png";
import theme6 from "./contents/theme/lux.png";
import theme7 from "./contents/theme/naturalwine.png";
import theme8 from "./contents/theme/pet.png";
import theme9 from "./contents/theme/private.png";
import theme10 from "./contents/theme/room.png";
import theme11 from "./contents/theme/two.png";
import theme12 from "./contents/theme/ung.png";
import theme13 from "./contents/theme/view.png";
import theme14 from "./contents/theme/withpar.png";
import theme15 from "./contents/theme/yeskids.png";

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

export const benefitImg = (imgName) => {
  switch (imgName) {
    case "부르 vurr":
      return benefit1;
    case "오마카세 오사이초밥":
      return benefit2;
    case "토끼다이닝":
      return benefit3;
    case "틈 Wine&Steak":
      return benefit4;
    case "달리181 상도점":
      return benefit5;
    case "오스테리아 일템포":
      return benefit6;
    case "블루페이지 라운지":
      return benefit7;
    case "MUU 한우다이닝":
      return benefit8;
    case "아르데레":
      return benefit9;
    case "우마주 Woomage":
      return benefit10;
  }
};

export const themeImg = (imgName) => {
  switch (imgName) {
    case "1":
      return theme1;
    case "2":
      return theme2;
    case "3":
      return theme3;
    case "4":
      return theme4;
    case "5":
      return theme5;
    case "6":
      return theme6;
    case "7":
      return theme7;
    case "8":
      return theme8;
    case "9":
      return theme9;
    case "10":
      return theme10;
    case "11":
      return theme11;
    case "12":
      return theme12;
    case "13":
      return theme13;
    case "14":
      return theme14;
    case "15":
      return theme15;
  }
};

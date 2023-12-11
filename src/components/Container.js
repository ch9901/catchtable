import React from "react";
import "./Container.css";
import Header from "./Header";
import Adslide from "./Adslide";
import Category from "./Category";
import WhereToGo from "./WhereToGo";
import Benefit from "./Benefit";
import Footer from "./Footer";
import PriceBest from "./PriceBest";
import Theme from "./Theme";

const priceTab = ["3만원이하", "3-5만원", "5-10만원", "10만원이상"];

const Container = () => {
  return (
    <div id="container">
      <Header />
      <Adslide />
      <Category />
      <WhereToGo />
      <Benefit />
      <PriceBest priceTab={priceTab} />
      <Theme />
      <Footer />
    </div>
  );
};

export default Container;

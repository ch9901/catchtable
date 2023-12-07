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
const Container = () => {
  return (
    <div id="container">
      <Header />
      <Adslide />
      <Category />
      <WhereToGo />
      <Benefit />
      <PriceBest />
      <Theme />
      <Footer />
    </div>
  );
};

export default Container;

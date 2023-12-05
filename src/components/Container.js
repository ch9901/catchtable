import React from "react";
import "./Container.css";
import Header from "./Header";
import Adslide from "./Adslide";
import Category from "./Category";
import WhereToGo from "./WhereToGo";
import Benefit from "./Benefit";
import Footer from "./Footer";

const Container = () => {
  return (
    <div id="container">
      <Header />
      <Adslide />
      <Category />
      <WhereToGo />
      <Benefit />
      <Footer />
    </div>
  );
};

export default Container;

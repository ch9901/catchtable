import React, { useRef } from "react";
import { headerImg } from "./util";

const Header = () => {
  const headerRef = useRef();
  const header = headerRef.current;
  const headerHeight = header?.offsetHeight;

  return (
    <div>
      <header id="header" ref={headerRef}>
        <div className="header-top">
          <span className="header-top-img"></span>
          <span className="input-magnify">
            <img src={headerImg("magnify")} alt="magnify" />
            <input
              className="header-top-input-mag"
              type="text"
              placeholder="지역 , 음식 매장명 검색"
            />
          </span>
          <span className="header-top-icos">
            <span className="header-top-ico picked"></span>
            <span className="header-top-ico bell"></span>
          </span>
        </div>
      </header>
    </div>
  );
};

export default Header;

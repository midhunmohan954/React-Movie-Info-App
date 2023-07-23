import React from "react";
import Wrapper from "./Wrapper";

function Header() {
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <h1>React Flix</h1>
          </div>
          <div className="searchBox">
            <input className="searchField" type="search" />
          </div>
          <p>login</p>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;

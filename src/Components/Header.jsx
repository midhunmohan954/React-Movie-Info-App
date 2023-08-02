import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
function Header() {
  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to={"/"}>
              <h1>React Flix</h1>
            </Link>
          </div>
          <Link to={"/fovorites"}>Favorites</Link>
          <SearchBox />
          <p>login</p>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;

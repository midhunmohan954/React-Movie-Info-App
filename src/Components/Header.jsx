import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
function Header() {
  const { state } = useContext(AppContext);

  return (
    <header>
      <Wrapper>
        <div className="appHeader">
          <div className="headerLeft">
            <Link to={"/"}>
              <h1>React Flix</h1>
            </Link>
          </div>
          <Link to="/fovorites">
            <div className="favCount">
              <span className="count">{state?.favorites?.length}</span>
              Favorites
            </div>
          </Link>

          <SearchBox />
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;

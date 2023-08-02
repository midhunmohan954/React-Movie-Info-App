import React from "react";
import { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import { Link } from "react-router-dom";
const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [data] = useFetch("search/movie", { query: query });
  // console.log({ data });
  return (
    <div>
      <div className="searchBox">
        <input
          className="searchField"
          value={query}
          type="search"
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="resultBox">
          <ul>
            {data?.results?.map((item) => {
              return (
                <div>
                  <li key={item.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                      alt=""
                    />
                    <Link to={`movie/${item.id}`}>
                      {" "}
                      <p> {item.title}</p>{" "}
                    </Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

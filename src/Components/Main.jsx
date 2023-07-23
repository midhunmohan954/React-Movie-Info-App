import React from "react";
import Wrapper from "./Wrapper";
import MovieCard from "./MovieCard";
import { popularMovies } from "../Utiis/data";
function Main() {
  return (
    <main>
      <div className="movieSlider">
        <p style={{ textAlign: "center" }}>Movie slider is here</p>
      </div>
      <Wrapper>
        <h2 className="setionTitle">Popular movies</h2>
        <div className="gallery">
          {popularMovies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      </Wrapper>
    </main>
  );
}
export default Main;

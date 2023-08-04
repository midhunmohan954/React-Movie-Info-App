import { useContext } from "react";
import React from "react";
import { AppContext } from "../Context/AppContext";
import Wrapper from "../Components/Wrapper";
import MovieCard from "../Components/MovieCard";

const Fovorites = () => {
  const { state } = useContext(AppContext);
  return (
    <Wrapper>
      <h2 className="sectionTitle">Favorite Movies</h2>
      <div className="gallery">
        {state?.favorites.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </Wrapper>
  );
};

export default Fovorites;

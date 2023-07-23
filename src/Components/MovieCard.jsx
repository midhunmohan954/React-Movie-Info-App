import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movieCard">
      <img className="moviePoster" src={movie.poster_path} alt="" srcset="" />
      <div className="movieCardFooter">
        <div className="movieCardDetails">
          <h2 className="movieCardTitle">{movie.title}</h2>
          <p className="movieCardRating">{movie.rating}</p>
        </div>
        <div className="favButton">#fav</div>
      </div>
    </div>
  );
}

export default MovieCard;

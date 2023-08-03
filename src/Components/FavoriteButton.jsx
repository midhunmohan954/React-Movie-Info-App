import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/appContext";
import StarFilled from "../assets/yellow-empty-heart-11115.svg";
import Starfill from "../assets/yellow-heart-11122.svg";
const FavoriteButton = ({ movie }) => {
  const { state, dispatch } = useContext(AppContext);
  let favorited = state.favorites.some((item) => item.id === movie.id);
  const handleFavorite = () => {
    favorited
      ? dispatch({
          type: "REMOV",
          payload: movie.id,
        })
      : dispatch({
          type: "ADDFAV",
          payload: movie,
        });
  };

  return (
    <div className="favButton" onClick={handleFavorite}>
      {favorited ? (
        <img src={Starfill} alt="" width={24} />
      ) : (
        <img src={StarFilled} alt="" width={24} />
      )}
    </div>
  );
};

export default FavoriteButton;

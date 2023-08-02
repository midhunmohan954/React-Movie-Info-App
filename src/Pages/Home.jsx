import React, { useState } from "react";
import Wrapper from "../Components/Wrapper";
import MovieCard from "../Components/MovieCard";

import Pagination from "../Components/Pagination";
import Loader from "../Components/Loader";
import ErrorMessage from "../Components/ErrorMessage";
import Slider from "../Components/Slider";
import { useFetch } from "../Hooks/useFetch";
const Home = () => {
  const [page, setPage] = useState(1);

  const [data, loading, error] = useFetch("movie/popular", { page: page });
  const { results, total_pages } = data;
  // console.log(data, loading, error);
  return (
    <div>
      <Slider />
      <Wrapper>
        {loading && <Loader />}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {!error && !loading && (
          <div>
            <h2 className="setionTitle">Popular movies</h2>
            <div className="gallery">
              {results?.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
            <Pagination
              page={page}
              setPage={setPage}
              total_pages={total_pages}
            />
          </div>
        )}
      </Wrapper>
    </div>
  );
};

export default Home;

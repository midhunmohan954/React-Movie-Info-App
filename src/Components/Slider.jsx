import React, { useEffect, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-cube";
import axios from "axios";
function Slider() {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        params: {
          api_key: "bb604cf2738eca4dfdca2270a31cf563",
        },
      });
      setLatestMovies(data.results);
    };
    fetchData();
  }, []);
  // console.log(latestMovies);

  return (
    <div className=".movieSlider" s>
      <Swiper
        // effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => }
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
            fontSize: 40,
            margin: 0,
            padding: 0,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
            padding: 0,
          },
        }}
      >
        {latestMovies.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img
                s
                width={1200}
                height={500}
                style={{ objectFit: "contain", margin: 0, padding: 0 }}
                src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
                alt=""
              />
              <div className="slideCaption">
                <h1 style={{ fontSize: 50 }}>{item.title}</h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
export default Slider;

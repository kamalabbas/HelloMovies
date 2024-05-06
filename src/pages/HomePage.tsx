import useHome from "../hooks/useHome";
import { Imagehandler } from "../services/imageHandler";
import { MovieCardComponent } from "../component/MovieCardComponent";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomePage = () => {
  const [
    { data: moviePopular },
    { data: movieTopRated },
    { data: tvPopular },
    { data: tvTopRated },
    { data: movieTrend },
    { data: tvTrend },
  ] = useHome();

  return (
    <>
      <Swiper>
        {moviePopular?.results.slice(0, 6).map((item) => (
          <SwiperSlide key={item.id} className="h-100 w-100">
            <img
              className="h-100 w-100 object-cover"
              src={Imagehandler(item.backdrop_path, "large")}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="container mt-12">
        <h2>Top Rated Movies</h2>

        <Swiper spaceBetween={24} slidesPerView={6} className="mt-6">
          {movieTopRated?.results.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCardComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-12">
          <h2>Trending Movies</h2>

          <Swiper spaceBetween={24} slidesPerView={6} className="mt-6">
            {movieTrend?.results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCardComponent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-12">
          <h2>Popular Series</h2>

          <Swiper spaceBetween={24} slidesPerView={6} className="mt-6">
            {tvPopular?.results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCardComponent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-12">
          <h2>Top Rated Series</h2>

          <Swiper spaceBetween={24} slidesPerView={6} className="mt-6">
            {tvTopRated?.results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCardComponent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-12">
          <h2>Trending Series</h2>

          <Swiper spaceBetween={24} slidesPerView={6} className="mt-6">
            {tvTrend?.results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCardComponent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

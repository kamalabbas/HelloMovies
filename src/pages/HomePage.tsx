import useHome from "../hooks/useHome";
import { Imagehandler } from "../services/imageHandler";
import { MovieCardComponent } from "../component/MovieCardComponent";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomePage = () => {
  const [query1, query2, query3, query4, query5, query6] = useHome();
  const { data: moviePopular } = query1;
  const { data: movieTopRated } = query2;
  const { data: tvPopular } = query3;
  const { data: tvTopRated } = query4;
  const { data: movieTrend } = query5;
  const { data: tvTrend } = query6;
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

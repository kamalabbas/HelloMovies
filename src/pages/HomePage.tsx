import useHome from "../hooks/useHome";
import { Imagehandler } from "../services/imageHandler";
import { MovieCardComponent } from "../component/MovieCardComponent";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomePage = () => {
  const { data } = useHome();

  return (
    <>
      <Swiper>
        {data?.results.slice(0, 6).map((item) => (
          <SwiperSlide key={item.id} className="h-100 w-100">
            <img className="h-100 w-100 object-cover" src={Imagehandler(item.backdrop_path, "large")} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="container mt-12">
        <h2>Popular</h2>

        <Swiper spaceBetween={24} slidesPerView={6} className="mt-6">
          {data?.results.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCardComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-12">
          <h2>Latest</h2>

          <Swiper spaceBetween={24} slidesPerView={6} className="mt-6">
            {data?.results.map((item) => (
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

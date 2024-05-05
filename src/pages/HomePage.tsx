import useHome from "../hooks/useHome";
import { Imagehandler } from "../services/imageHandler";
import { MovieCardComponent } from "../component/MovieCardComponent";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomePage = () => {
  const [data1, data2, data3]   = useHome();
  const { data: samir } = data1;
  const { data: samir2 } = data2;
  const { data: samir3 } = data3;
  

  return (
    <>
      <Swiper>
        {samir?.results.slice(0, 6).map((item) => (
          <SwiperSlide key={item.id} className="h-100 w-100">
            <img className="h-100 w-100 object-cover" src={Imagehandler(item.backdrop_path, "large")} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="container mt-12">
        <h2>Popular</h2>

        <Swiper spaceBetween={24} slidesPerView={6} className="mt-6">
          {samir2?.results.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCardComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-12">
          <h2>Latest</h2>

          <Swiper spaceBetween={24} slidesPerView={6} className="mt-6">
            {samir3?.results.map((item) => (
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

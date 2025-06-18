import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const MainBanner = () => {
  return (
    <Swiper className="bg-container" spaceBetween={50} slidesPerView={1}>
      {Array.from({ length: 3 }).map((_, i) => {
        return (
          <SwiperSlide key={i} className="bg-img">
            <img src={`./img/bg${i + 1}.png`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MainBanner;

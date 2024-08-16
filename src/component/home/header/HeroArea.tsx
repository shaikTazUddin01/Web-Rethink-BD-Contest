// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from '../../../assets/Banner-3.jpg'
import banner2 from '../../../assets/Banner-3.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";




const HeroArea = () => {
  return (
    <div>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[300px]"
      >
        <SwiperSlide className=" w-[100%] bg-no-repeat" style={{backgroundImage:`url(${banner1})`}}>Slide 1</SwiperSlide>
        <SwiperSlide className=" w-[100%] bg-no-repeat" style={{backgroundImage:`url(${banner2})`}}>Slide 2</SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default HeroArea;

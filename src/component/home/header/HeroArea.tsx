// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

import banner2 from "../../../assets/Banner-2.png";
// import overlay from "../../../assets/overlay.webp";
// import banner2 from '../../../assets/Banner-3.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination, Autoplay } from "swiper/modules";

const HeroArea = () => {
  return (
    <div>
      {/* <Swiper
        pagination={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[300px]"
      >
        <SwiperSlide
          className=" w-[100%] bg-no-repeat bg-cover "
          style={{ backgroundImage: `url(${banner2})` }}
        >
          <div className=" w-[100%] bg-[#0101018d] h-full text-white flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl font-semibold ">ICT Division Bangladesh</h1>
            <h1 className="text-3xl mt-1">Government of the People's Republic of Bangladesh
            </h1>
          </div>
        </SwiperSlide>
      </Swiper> */}
       <div
          className=" w-[100%] bg-no-repeat bg-cover h-[300px] "
          style={{ backgroundImage: `url(${banner2})` }}
        >
          <div className=" w-[100%] bg-[#0101018d] h-full text-white flex flex-col items-center justify-center text-center ">
            <h1 className="text-5xl md:text-6xl font-semibold ">ICT Division Bangladesh</h1>
            <h1 className="text-3xl mt-1">Government of the People's Republic of Bangladesh
            </h1>
          </div>
        </div>
    </div>
  );
};

export default HeroArea;

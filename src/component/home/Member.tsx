import member1 from "../../assets/Honorable Adviser (1).jpg";
import member2 from "../../assets/Honorable Secretary Sir.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
const Member = () => {
  return (
    <div className=" border-t-4 border-primaryColor  bg-white p-5 rounded-lg shadow-2xl mt-10 overflow-hidden ">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Member</h1>
        <div className="w-full h-[1px] bg-[#b0adad]"></div>
      </div>

      {/* member serction */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper mt-5"
      >
        <SwiperSlide>
          <div className="flex justify-center ">
            <div className="shadow-2xl border   p-4">
              <div className="flex justify-center ">
                <img src={member1} alt="" className="h-[220px] " />
              </div>
              <div className="text-center py-3">
                <p className="text-xl font-semibold">Md. Nahid Islam</p>
                <p>Honorable Adviser</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center ">
            <div className="shadow-2xl border   p-4">
              <div className="flex justify-center ">
                <img src={member2} alt="" className="h-[220px]" />
              </div>
              <div className="text-center py-3">
                <p className="text-xl font-semibold">Md. Nahid Islam</p>
                <p>Honorable Adviser</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Member;

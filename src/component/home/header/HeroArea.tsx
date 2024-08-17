

import banner2 from "../../../assets/Banner-2.png";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";




const HeroArea = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div>
     {/* added banner */}
       <div
          className=" w-[100%] bg-no-repeat bg-cover h-[330px] "
          style={{ backgroundImage: `url(${banner2})` }}
        >
          <div className=" w-[100%] bg-[#0101018d] h-full text-white flex flex-col items-center justify-center text-center " >
            {/* bannar content */}
            <h1 className="text-5xl md:text-6xl font-semibold " data-aos="zoom-in" data-aos-duration="1000">ICT Division Bangladesh</h1>
            <h1 className="text-3xl mt-1" data-aos="zoom-in"  data-aos-duration="1500">Government of the People's Republic of Bangladesh
            </h1>
          </div>
        </div>
    </div>
  );
};

export default HeroArea;

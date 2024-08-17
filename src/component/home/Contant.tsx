import Notice from "./leftside/Notice";
import Member from "./rightside/Member";
import "./style.css";
import ImportAnnouncement from "./rightside/ImportAnnouncement";
import EServices from "./rightside/EServices";
import ImportantLink from "./rightside/ImportantLink";
import EmergencyHotline from "./rightside/EmergencyHotline";
import AboutUs from "./leftside/AboutUs";
import Circular from "./leftside/Circular";
import Policies from "./leftside/Policies";
import CitizeneServices from "./leftside/CitizeneServices";
import CitizenCharter from "./leftside/CitizenCharter";
import AnnualPerformance from "./leftside/AnnualPerformance";
import NationalIntegrity from "./leftside/NationalIntegrity";
import GrievanceRedressSystem from "./leftside/GrievanceRedressSystem";
import RightInfo from "./leftside/RightInfo";
import Innocation from "./leftside/Innocation";
import ServiceProcess from "./leftside/ServiceProcess";
import SdgAndDevelopment from "./leftside/SdgAndDevelopment";
import BudGetProject from "./leftside/BudGetProject";
import NationalIctPolicy from "./leftside/NationalIctPolicy";
import Miscellaneous from "./leftside/Miscellaneous";
import ToPreventDengue from "./rightside/ToPreventDengue";
import VisitorCount from "./rightside/VisitorCount";
import Audio from "./rightside/Audio";
import Floods from "./leftside/Floods";
import OtherService from "./rightside/OtherService";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contant = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" flex flex-col md:flex-row gap-7 pb-20 px-5 ">
      <div className="w-full md:w-[55%] lg:w-[70%] h-full py-10">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <AboutUs></AboutUs>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000">
          <Circular></Circular>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5 sizeFixing"
          // className="flex flex-wrap justify-between mt-10 gap-5"
        >
          <div data-aos="zoom-in" data-aos-duration="1000">
            <Policies />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <CitizeneServices />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <CitizenCharter />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <AnnualPerformance />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <NationalIntegrity></NationalIntegrity>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <GrievanceRedressSystem></GrievanceRedressSystem>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <RightInfo />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <Innocation></Innocation>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <ServiceProcess></ServiceProcess>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <SdgAndDevelopment></SdgAndDevelopment>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <BudGetProject></BudGetProject>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <NationalIctPolicy></NationalIctPolicy>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <Miscellaneous></Miscellaneous>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000">
          <Floods />
        </div>
      </div>
      <div className="w-full md:w-[45%] lg:w-[30%]  h-full py-10">
        <div data-aos="zoom-in" data-aos-duration="1200">
          <Notice></Notice>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1200">
          <Member></Member>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1200">
          <ImportAnnouncement></ImportAnnouncement>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1200">
          <EServices></EServices>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1200">
          <ImportantLink></ImportantLink>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1200">
          <VisitorCount />
        </div>
        <div data-aos="zoom-in" data-aos-duration="1200">
          <EmergencyHotline></EmergencyHotline>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1200">
          <ToPreventDengue></ToPreventDengue>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1200">
          <OtherService />
        </div>
        <div data-aos="zoom-in" data-aos-duration="1200">
          <Audio />
        </div>
      </div>
    </div>
  );
};

export default Contant;

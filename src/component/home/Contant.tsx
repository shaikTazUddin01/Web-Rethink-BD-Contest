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
const Contant = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-5 pb-20 px-5 lg:px-0">
      <div className="w-full md:w-[55%] lg:w-[70%] h-full py-10">
        <AboutUs></AboutUs>
        <Circular></Circular>
        <div 
        className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5 sizeFixing"
        // className="flex flex-wrap justify-between mt-10 gap-5"
        >
          <Policies/>
          <CitizeneServices/>
          <CitizenCharter/>
          <AnnualPerformance/>
          <NationalIntegrity></NationalIntegrity>
          <GrievanceRedressSystem></GrievanceRedressSystem>
          <RightInfo/>
          <Innocation></Innocation>
          <ServiceProcess></ServiceProcess>
          <SdgAndDevelopment></SdgAndDevelopment>
          <BudGetProject></BudGetProject>
          <NationalIctPolicy></NationalIctPolicy>
          <Miscellaneous></Miscellaneous>
        </div>
      </div>
      <div className="w-full md:w-[45%] lg:w-[30%]  h-full py-10">
        <Notice></Notice>
        <Member></Member>
        <ImportAnnouncement></ImportAnnouncement>
        <EServices></EServices>
        <ImportantLink></ImportantLink>
        <VisitorCount/>
        <EmergencyHotline></EmergencyHotline>
        <ToPreventDengue></ToPreventDengue>
      </div>
    </div>
  );
};

export default Contant;

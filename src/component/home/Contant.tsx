import Notice from "./Notice";
import Member from "./Member";
import "./style.css";
import ImportAnnouncement from "./ImportAnnouncement";
import EServices from "./EServices";
import ImportantLink from "./ImportantLink";
import EmergencyHotline from "./EmergencyHotline";
import AboutUs from "./AboutUs";
import Circular from "./Circular";
import Policies from "./Policies";
const Contant = () => {
  return (
    <div className=" flex  gap-5 pb-20">
      <div className="w-[70%] h-full py-10">
        <AboutUs></AboutUs>
        <Circular></Circular>
        <div className="grid grid-cols-2 mt-10 gap-5">
          <Policies/>
        </div>
      </div>
      <div className="w-[30%]  h-full py-10">
        <Notice></Notice>
        <Member></Member>
        <ImportAnnouncement></ImportAnnouncement>
        <EServices></EServices>
        <ImportantLink></ImportantLink>
        <EmergencyHotline></EmergencyHotline>
      </div>
    </div>
  );
};

export default Contant;

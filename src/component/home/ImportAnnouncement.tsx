import { MdCalendarMonth } from "react-icons/md";
import img1 from '../../assets/ICT Division Result.png'

const ImportAnnouncement = () => {
  return (
    <div>
      <div className="border-t-4 border-primaryColor  bg-white p-5 rounded-lg shadow-2xl mt-10">
      <h1 className="text-3xl font-semibold mb-2">Announcement</h1>
      <div className="w-full h-[1px] bg-[#b0adad]"></div>
      {/* ImportAnnouncement section */}
      <a href="" className="hover:text-primaryColor">
        <p className="text-[16px] mt-2 font-medium">
          Office attachment application form.
        </p>
      </a>
      <div className="w-full h-[1px] bg-[#b0adad] mt-2"></div>
       {/* ImportAnnouncement section */}
       <a href="" className="hover:text-primaryColor">
        <p className="text-[16px] mt-2 font-medium">
        Information and Communication Technology technology ranks first in the Annual Executive (APA) Assessment 2020-2021.
        </p>
      <img src={img1} alt="" className="" />

      </a>
    </div>
    {/* <div className="mt-10 rounded-xl overflow-hidden shadow-2xl">
      <img src={img1} alt="" className="" />
    </div> */}
    </div>
  );
};

export default ImportAnnouncement;

import { MdCalendarMonth } from "react-icons/md";


const Notice = () => {
  return (
    <div className="border-t-4 border-primaryColor  bg-white p-5 rounded-lg shadow-2xl">
      <h1 className="text-3xl font-semibold mb-2">Notice</h1>
      <div className="w-full h-[1px] bg-[#b0adad]"></div>
      {/* notice section */}
      <a href="" className="hover:text-primaryColor">
        <p className="text-[15px] mt-2">
          Memorandum-68, Permanentization of Employment, Pliers and Assistant
          Plasterers, Information and Add...
        </p>
        <div className="flex items-center gap-1 mt-2">
          <span className="text-primaryColor text-xl">
            <MdCalendarMonth />
          </span>
          <p className="text-[16px]">15/08/24</p>
        </div>
      </a>
      <div className="w-full h-[1px] bg-[#b0adad] mt-2"></div>

      {/* notice section */}
      <a href="" className="hover:text-primaryColor">
        <p className="text-[15px] mt-2">
          Office Order (Distribution of Responsibilities)
        </p>
        <div className="flex items-center gap-1 mt-2">
          <span className="text-primaryColor text-xl">
            <MdCalendarMonth />
          </span>
          <p className="text-[16px]">25/07/24</p>
        </div>
      </a>
      <div className="w-full h-[1px] bg-[#b0adad] mt-2"></div>

      {/* notice section */}
      <a href="" className="hover:text-primaryColor">
        <p className="text-[15px] mt-2">Posts for FY 2024-2025</p>
        <div className="flex items-center gap-1 mt-2">
          <span className="text-primaryColor text-xl">
            <MdCalendarMonth />
          </span>
          <p className="text-[16px]">01/07/24</p>
        </div>
      </a>
      <div className="w-full h-[1px] bg-[#b0adad] mt-2"></div>

      {/* notice section */}
      <a href="" className="hover:text-primaryColor">
        <p className="text-[15px] mt-2">
          For e-Tender “Food Procurement and Refreshment for Aspire to Innovate
          (a2i) Programme…
        </p>
        <div className="flex items-center gap-1 mt-2">
          <span className="text-primaryColor text-xl">
            <MdCalendarMonth />
          </span>
          <p className="text-[16px]">10/06/24</p>
        </div>
      </a>
      {/* <div className="w-full h-[1px] bg-[#b0adad] mt-2"></div> */}
    </div>
  );
};

export default Notice;

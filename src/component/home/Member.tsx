import member1 from "../../assets/Honorable Adviser (1).jpg";
import member2 from "../../assets/Honorable Secretary Sir.jpg";

const Member = () => {
  return (
    <div className=" bg-white p-5 rounded-lg shadow-2xl mt-10">
        <div className="">

    <h1 className="text-3xl font-semibold mb-2">Notice</h1>
        </div>
    <div className="w-full h-[1px] bg-[#b0adad]"></div>
    {/* notice section */}
    <a href="" className="hover:text-primaryColor">
      <p className="text-[15px] mt-2">
        Memorandum-68, Permanentization of Employment, Pliers and Assistant
        Plasterers, Information and Add...
      </p>
      <div className="flex items-center gap-1 mt-2">
        <span className="text-primaryColor text-xl">
          
        </span>
        <p className="text-[16px]">15/08/24</p>
      </div>
    </a>
    <div className="w-full h-[1px] bg-[#b0adad] mt-2"></div>

    {/* <div className="w-full h-[1px] bg-[#b0adad] mt-2"></div> */}
  </div>
  );
};

export default Member;

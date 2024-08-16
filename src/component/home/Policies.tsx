import { FiCheckSquare } from "react-icons/fi";
import polices from "../../assets/policy2.png";

const Policies = () => {
  return (
    <div className="bg-white border-b-4 border-primaryColor w-full rounded-xl shadow-xl p-7  hover:shadow-primaryColor hover:-mt-1">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-center">
          Policies & Publications
        </h1>
      </div>
      <div className=" grid grid-cols-1 gap-5 items-center">
        {/* 1 */}

        <img src={polices} alt="" className="mx-auto " />
        <div className="">
          <a
            href=""
            className="hover:text-primaryColor flex items-center gap-1 mt-2"
          >
            <span className="text-primaryColor text-xl">
              <FiCheckSquare />
            </span>
            <p className="text-[16px] font-medium">Policy</p>
          </a>
          <a
            href=""
            className="hover:text-primaryColor flex items-center gap-1 mt-2"
          >
            <span className="text-primaryColor text-xl">
              <FiCheckSquare />
            </span>
            <p className="text-[16px] font-medium">Laws & Regulations/Guidelines & Strategies</p>
          </a>
          <a
            href=""
            className="hover:text-primaryColor flex items-center gap-1 mt-2"
          >
            <span className="text-primaryColor text-xl">
              <FiCheckSquare />
            </span>
            <p className="text-[16px] font-medium">Publications & Annual Report</p>
          </a>
          <a
            href=""
            className="hover:text-primaryColor flex items-center gap-1 mt-2"
          >
            <span className="text-primaryColor text-xl">
              <FiCheckSquare />
            </span>
            <p className="text-[16px] font-medium">Others Report</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Policies;

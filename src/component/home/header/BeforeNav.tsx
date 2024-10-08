import { Select } from "antd";
import Search from "antd/es/input/Search";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";

const BeforeNav = () => {
  return (
    <div className="w-full py-1 bg-primaryColor flex flex-col md:flex-row items-center justify-between px-2 gap-2">
      <div className="flex gap-5 items-center">
        <h1 className="text-white">Bangladesh National Portal</h1>
        <Select
          defaultValue="Type Of Office"
          style={{ width: 150,}}
          size="small"
          options={[
            // { value: "Type Of Office", label: "Type Of Office" },
            { value: "Ministry/Department", label: "Ministry/Department" },
            { value: "Depaerment Transport", label: "Depaerment Transport" },
            { value: "District Batayan", label: "District Batayan" },
            { value: "Upazila", label: "Upazila" },
          ]}
        />
      </div>
      <div>
        <div className=" text-white gap-3 flex justify-between items-center">
        <Search placeholder="search here.."   size="small" />
          <div className="flex gap-3 text-xl">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube></FaYoutube>
          <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeNav;

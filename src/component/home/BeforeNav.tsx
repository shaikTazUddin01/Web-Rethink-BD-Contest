import { Select } from "antd";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";

const BeforeNav = () => {
  return (
    <div className="w-full py-1 bg-primaryColor flex items-center justify-between px-2">
      <div className="flex gap-5 items-center">
        <h1 className="text-white">Bangladesh National Portal</h1>
        <Select
          defaultValue="lucy"
          style={{ width: 150, height: 24 }}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
          ]}
        />
      </div>
      <div>
        <div className="text-xl text-white gap-3 flex">
          <FaFacebook />
          <FaInstagram />
          <FaYoutube></FaYoutube>
          <FaSquareXTwitter />
        </div>
      </div>
    </div>
  );
};

export default BeforeNav;

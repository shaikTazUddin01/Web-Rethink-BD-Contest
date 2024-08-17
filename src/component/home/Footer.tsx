import { FaFacebook, FaInstagram,  FaTwitter, FaYoutube } from "react-icons/fa";
import footerTop from "../../assets/footer_top_bg.png";
import logo from "../../assets/logo-2.png";
// import { Divider, Input } from "antd";
import support from '../../assets/np-logo-set.png'

const Footer = () => {
  return (
    <div>
      <img src={footerTop} alt="" className="w-full" />
      <div className="">
        <footer className=" bg-base-200 text-base-content  gap-10 py-10 ">
          <div className="flex justify-between w-full items-center px-10 flex-col md:flex-row gap-5 text-center md:text-left ">
            <div className=" flex flex-col font-medium" >
              <p>Technical Support</p>
             <img src={support} alt="" />
            </div>
            <div className="hidden md:flex">
            <img src={logo} alt="" className="w-[80%]" />
            </div>
            <div className=" flex flex-col font-medium gap-2" >
              <p >Socal Media </p>
            <div className="flex gap-3 items-center text-2xl">
            <FaFacebook />
          <FaInstagram />
          <FaYoutube></FaYoutube>
          <FaTwitter />
            </div>
            </div>
          </div>
        <div className="w-full h-[1px] bg-[#01801f58] my-5"></div>
          <div className="flex justify-center md:justify-between w-full items-center px-10 flex-col md:flex-row gap-1">
            
              <div className="menu">
                <ul className="flex gap-4 ">
                  <li>Sitemap</li>
                  <li>Secrecy Policy</li>
                  <li>Contact</li>
                  <li>Faq</li>
                </ul>
              </div>
            <div>
              <p className="text-center">Copyright © 2024 All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

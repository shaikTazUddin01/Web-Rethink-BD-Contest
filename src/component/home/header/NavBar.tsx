import { MdClose } from "react-icons/md";
import logo from "../../../assets/logo-2.png";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Dropdown } from "antd";
import './nav.css'
import {
  aboutContent,
  actsContent,
  affiliatedContent,
  contactContent,
  eserviceContent,
  galleryContent,
  projectContent,
} from "./NavItems/Dropdown";

const NavBar = () => {
  const navItem = (
    <>
      {/* <li>
        <a >Home</a>
      </li> */}
      <li>
        <Dropdown overlay={aboutContent} >
          <a>About us </a>
        </Dropdown>
      </li>
      <li>
        <Dropdown overlay={affiliatedContent } >
          <a>Affiliated Offices/Institutions </a>
        </Dropdown>
      </li>
      <li>
        <Dropdown overlay={projectContent} >
          <a>Project/Program </a>
        </Dropdown>
      </li>
      <li>
        <Dropdown overlay={  galleryContent } >
          <a>Gallery </a>
        </Dropdown>
      </li>
      <li>
        <Dropdown overlay={ actsContent } >
          <a>Acts/Policy </a>
        </Dropdown>
      </li>
      <li>
        <Dropdown overlay={ eserviceContent } >
          <a>E-Service </a>
        </Dropdown>
      </li>
      <li>
        <Dropdown overlay={contactContent} >
          <a>Contact & Comment </a>
        </Dropdown>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-300 ">
        <div className="navbar-start">
          {/* drawer */}
          <div className="drawer lg:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="text-2xl">
                {/* Open drawer */}
                <AiOutlineMenuFold />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu bg-primaryColor text-white min-h-full w-[65%] p-4 relative">
                {/* Close Button */}
                <button
                  onClick={() => {
                    const drawerCheckbox = document.getElementById(
                      "my-drawer"
                    ) as HTMLInputElement;
                    if (drawerCheckbox) {
                      drawerCheckbox.checked = false;
                    }
                  }}
                  aria-label="close sidebar"
                  className="absolute top-4 right-4 text-2xl font-bold"
                >
                  <MdClose />
                </button>
                {/* Sidebar content here */}
                <div className="mt-10 mx-auto">
                  {/* <a href="/">
                    <img src={logo} alt="" className="h-full " />
                  </a> */}
                  <div className=" text-lg">{navItem}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex">
            <a href="/">
            <img src={logo} alt="" className="w-[60%]" />
            </a>
          </div>
        </div>
        {/* drawer */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-[16px] font-medium">{navItem}</ul>
        </div>
        <div className="navbar-end lg:hidden">
          <a className="flex  items-center gap-3 justify-end mr-2">
            <img src={logo} alt="" className="w-[60%]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

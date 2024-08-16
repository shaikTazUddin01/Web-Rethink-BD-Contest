import { MdClose } from "react-icons/md";
import logo from "../../../assets/logo-2.png";
import { AiOutlineMenuFold } from "react-icons/ai";

const NavBar = () => {
  const navItem = (
    <>
      <li>
        <a>About us</a>
      </li>
      <li>
        <a>Affiliated Offices/Institutions</a>
      </li>
      <li>
        <a>project/pro'me</a>
      </li>
      <li>
        <a>Gallery </a>
      </li>
      <li>
        <a>Acts/Policy </a>
      </li>
      <li>
        <a>E-Service </a>
      </li>
      {/* <li><a>যোগাযোগ ও মতামত </a></li> */}
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
                  <div className=" text-lg">
                    {navItem}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          {/* drawer */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">{navItem}</ul>
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

import { useEffect, useState } from "react";
import Footer from "./component/home/Footer";
import BeforeNav from "./component/home/header/BeforeNav";
import NavBar from "./component/home/header/NavBar";
import Home from "./pages/Home";
import logo from "./assets/logo-2.png";
import polling from "./assets/poll-icon.gif";
import comment from "./assets/comment.gif";
import { IoAccessibilitySharp } from "react-icons/io5";

function App() {
  const [welcomeLoading, setWelcomeLoading] = useState(true);
  const [hover, sethover] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setWelcomeLoading(false);
    }, 1500);
    return () => clearTimeout(time);
  }, []);
  if (welcomeLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <img src={logo} alt="" className="WelcomeLoading" />
      </div>
    );
  }

  return (
    <div className="bg-white h-full">
      <div className="max-w-7xl mx-auto ">
        <BeforeNav></BeforeNav>
        <NavBar></NavBar>
        <Home></Home>
        <Footer></Footer>
      </div>
      {/* fixed part */}
      <div className="fixed bottom-3 z-50 right-0 ">
        {/* polling */}
        <div className="">
          <img src={polling} alt="" className="h-14 mx-auto" />
          {/* <p className="font-semibold -mt-2 text-center text-[]">Polling</p> */}
        </div>
        {/* comment */}
        <div className="">
          <img src={comment} alt="" className="h-14 mx-auto" />
          {/* <p className="font-semibold -mt-2">Comment</p> */}
        </div>
        {/* accessibility */}
        <div className="relative flex flex-row-reverse items-center">
          <div
            className="text-3xl bg-primaryColor mx-auto p-3 rounded-full text-white text-center cursor-pointer"
            onMouseEnter={() => sethover(true)}
            onMouseLeave={() => sethover(false)}
          >
            <IoAccessibilitySharp />
          </div>
          {hover && (
            <div className="absolute top-2 right-full bg-primaryColor px-3 py-2 rounded-xl text-white mr-1 whitespace-nowrap">
              <p>Accessibility</p>
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
}

export default App;

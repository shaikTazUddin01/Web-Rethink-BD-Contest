import Footer from "./component/home/Footer";
import BeforeNav from "./component/home/header/BeforeNav";
import NavBar from "./component/home/header/NavBar";
import Home from "./pages/Home";

function App() {
  return (
  <div className="bg-white h-full">
      <div className="max-w-7xl mx-auto ">
        <BeforeNav></BeforeNav>
        <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>
    </div>
  </div>
  );
}

export default App;

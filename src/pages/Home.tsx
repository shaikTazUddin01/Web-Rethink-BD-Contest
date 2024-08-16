import BeforeNav from "../component/home/header/BeforeNav";
import Contant from "../component/home/Contant";
import HeroArea from "../component/home/header/HeroArea";
import NavBar from "../component/home/header/NavBar";


const Home = () => {
    return (
        <div>
         <BeforeNav></BeforeNav>
            <NavBar></NavBar>
            <HeroArea></HeroArea>
            <Contant></Contant>
        </div>
    );
};

export default Home;
import BeforeNav from "../component/home/BeforeNav";
import Contant from "../component/home/Contant";
import HeroArea from "../component/home/HeroArea";
import NavBar from "../component/home/NavBar";


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
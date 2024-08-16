import img from "../../../assets/Miscellaneous.png";
import CardDesign from "./cart/CardDesign";

const Miscellaneous = () => {
    const items=["Different Forms",
        "Best Practice",
        "ICT Related Award",
        "Different Committee"]
    return (
        <div>
            <CardDesign name="Miscellaneous" image={img} items={items}></CardDesign>
        </div>
    );
};

export default Miscellaneous;
import img from "../../../assets/FinalLogoSDG.png";
import CardDesign from "./cart/CardDesign";

const SdgAndDevelopment = () => {
    const items=["Ministry/ Divisions’ SDG",
        "SDG Focal/ Alternative Focal Point",
        "SDG National Document",
        "5th Year Plan & Report"]
    return (
        <div>
            <CardDesign name="SDG and Development Plan" image={img} items={items}></CardDesign>
        </div>
    );
};

export default SdgAndDevelopment;
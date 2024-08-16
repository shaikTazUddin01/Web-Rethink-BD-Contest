import img from "../../../assets/ictPolicy.png";
import CardDesign from "./cart/CardDesign";

const NationalIctPolicy = () => {
    const items=["National ICT Policy 2018",
        "Ministry/Division Wise Work Plan",
       "Office Order/Notification",
        "Focal Point"]
    return (
        <div>
            <CardDesign name="National ICT Policy 2018" image={img} items={items}></CardDesign>
        </div>
    );
};

export default NationalIctPolicy;
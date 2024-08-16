import img from "../../../assets/budget.jpg";
import CardDesign from "./cart/CardDesign";

const BudGetProject = () => {
    const items=['Annual Procurement Plan',"Budget & MTBF Budget",
"Budget Reports/ Office Orders",
'Important Implemented Projects']
    return (
        <div>
            <CardDesign name="Budget & Projects" image={img} items={items}></CardDesign>
        </div>
    );
};

export default BudGetProject;
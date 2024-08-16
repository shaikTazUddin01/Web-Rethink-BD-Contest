import citizen from '../../../assets/cha.jpg'
import CardDesign from "./cart/CardDesign";

const CitizenCharter = () => {
  const items=["Citizen's Charter",'Fellowship & Scholarship','Work Plan, Monitoring & Evaluation Report','Laws / Regulations / Policies / Notifi']
  return (
    <div>
      <CardDesign name="Citizen's Charter" image={citizen} items={items}></CardDesign>
    </div>
  
  );
};





export default CitizenCharter;
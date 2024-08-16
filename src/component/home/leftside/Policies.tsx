
import polices from "../../../assets/policy2.png";
import CardDesign from "./cart/CardDesign";

const Policies = () => {
  const items=['Policy','Laws & Regulations/Guidelines & Strategies','Publications & Annual Report','Others Report']
  return (
    <div>
      <CardDesign name="Policies & Publications" image={polices} items={items}></CardDesign>
    </div>
   
  );
};

export default Policies;

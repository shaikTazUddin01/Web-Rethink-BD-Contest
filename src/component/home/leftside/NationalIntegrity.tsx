
import img from '../../../assets/nationalIntegrity.jfif'
import CardDesign from "./cart/CardDesign";

const NationalIntegrity = () => {
  const items=['Best Practice Work Plan Web Link','Intregrity Strategy Committee & Focal point','Monitoring/Evaluation Report','Laws/Regulations/Policies/Notifi']
  return (
    <div>
      <CardDesign name="  National Integrity Strategy  " image={img} items={items}></CardDesign>
    </div>
   
  );
};


export default NationalIntegrity;

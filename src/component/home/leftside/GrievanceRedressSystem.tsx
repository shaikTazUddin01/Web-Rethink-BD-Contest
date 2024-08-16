
import img from '../../../assets/grievance.jpg'
import CardDesign from "./cart/CardDesign";

const GrievanceRedressSystem = () => {
  const items=['GRS and Appellate Officers','Work Plan, Monitoring & Evalution Report','Grievance Submission (Online)','Laws/Regulations/Notifications']
  return (

    <div>
      <CardDesign name="Grievance Redress System" image={img} items={items}></CardDesign>
    </div>

   
  );
};




export default GrievanceRedressSystem;
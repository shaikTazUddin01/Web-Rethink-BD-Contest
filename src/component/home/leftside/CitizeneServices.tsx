
import citizen from '../../../assets/eCitizen.jpg'
import CardDesign from "./cart/CardDesign";

const CitizeneServices = () => {
  const items=[' Donation in ICT Innovation','Hi-Teck Park One Stop Service','Other e-Service','Fellowship & Scholarship']
  return (
    <div className='grow'>
      <CardDesign name="Citizen e-Services" image={citizen} items={items}></CardDesign>
    </div>
    
  );
};



export default CitizeneServices;
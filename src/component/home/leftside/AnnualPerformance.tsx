
import img from '../../../assets/annual.png'
import CardDesign from "./cart/CardDesign";

const AnnualPerformance = () => {
  const items=['Guidelines/Circulars/APA Team/Focal Point','Annual Performance Agreement & Result','Monitoring and evaluation report','APAMS software link']
  return (
<div>
  <CardDesign name="Annual Management" image={img} items={items}></CardDesign>
</div>

  );
};


export default AnnualPerformance;
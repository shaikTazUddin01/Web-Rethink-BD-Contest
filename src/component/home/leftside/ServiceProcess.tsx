import img from "../../../assets/SPS-3.png";
import CardDesign from "./cart/CardDesign";

const ServiceProcess = () => {
  const items = [
    "Notification / Circular / Policy / publication",
    "Digital Service",
    "SPS Example",
    "List of simplified services",
  ];
  return (
    <div>
      <CardDesign
        name="Service Process Simplificaton"
        image={img}
        items={items}
      ></CardDesign>
    </div>
  );
};

export default ServiceProcess;

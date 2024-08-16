import { Collapse, CollapseProps } from "antd";
import circular from "../../assets/circular.jpg";

const Circular = () => {

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;




const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Notification/Circular',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'Office Order/GIO/Passport No Objection letter for foreign travel',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'News bulletin',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'Tender/Recruitment Notice',
    children: <p>{text}</p>,
  },
];

  return (
    <div className="bg-white border-2 w-full rounded-xl shadow-xl p-5 mt-10">
         <div className=''>
        <h1 className='text-2xl font-semibold text-center'>Notice/Order/Circular</h1>

        </div>
      <div className=" grid grid-cols-5 gap-5 items-center">
        {/* 1 */}

        <img src={circular} alt="" className="mx-auto col-span-2 w-full" />

        <div className=" col-span-3 space-y-5">
         <Collapse items={items}   />;
         
        </div>
      </div>
    </div>
  );
};

export default Circular;

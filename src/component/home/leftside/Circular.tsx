import { Collapse, CollapseProps } from "antd";
import circular from "../../../assets/circular.jpg";

const Circular = () => {

  const text1 = `
  Official announcements or updates related to ICT policies and procedures, often critical for staff awareness and compliance.
`;
  const text2 = `
 Formal documents authorizing specific actions or permissions, including travel clearance for international assignments.
`;
  const text3 = `
  Regular updates on ICT activities, achievements, and events, providing insights into ongoing projects and departmental developments.
`;
  const text4 = `
 Invitations for bids on ICT projects or announcements of job openings, essential for expanding the division's capabilities and resources.
`;




const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Notification/Circular',
    children: <p>{text1}</p>,
  },
  {
    key: '2',
    label: 'Office Order/GIO/Passport No Objection letter for foreign travel',
    children: <p>{text2}</p>,
  },
  {
    key: '3',
    label: 'News bulletin',
    children: <p>{text3}</p>,
  },
  {
    key: '4',
    label: 'Tender/Recruitment Notice',
    children: <p>{text4}</p>,
  },
];

  return (
    <div className="bg-white border-2 w-full rounded-xl shadow-xl p-5 mt-10">
         <div className=''>
        <h1 className='text-2xl font-semibold text-center'>Notice/Order/Circular</h1>

        </div>
      <div className=" grid grid-cols-1 lg:grid-cols-5 gap-5 items-center">
        {/* 1 */}

        <img src={circular} alt="" className="mx-auto md:col-span-2 w-full" />

        <div className=" lg:col-span-3 space-y-5">
         <Collapse items={items}   />
         
        </div>
      </div>
    </div>
  );
};

export default Circular;

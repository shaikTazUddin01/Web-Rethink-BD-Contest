import { FiCheckSquare } from "react-icons/fi";


const ImportantLink = () => {
    return (
        <div>
             <div>
            <div className="border-t-4 border-primaryColor  bg-white p-5 rounded-lg shadow-2xl mt-10">
      <h1 className="text-3xl font-semibold mb-2">Important Link</h1>
      <div className="w-full h-[1px] bg-[#b0adad]"></div>
      {/* ImportAnnouncement section */}
      <a href="" className="hover:text-primaryColor flex items-start gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
        President's Office
        </p>
      </a>
      {/* <div className="w-full h-[1px] bg-[#b0adad] mt-2"></div> */}
       {/* ImportAnnouncement section */}
       <a href="" className="hover:text-primaryColor flex items-start gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
        Prime Minister's Office
        </p>
      </a>
       <a href="" className="hover:text-primaryColor flex items-start gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
        Cabinet Division
        </p>
      </a>
       <a href="" className="hover:text-primaryColor flex items-start gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
        Bangladesh Karmachari Kallyan Board
        </p>
      </a>
      
       <a href="" className="hover:text-primaryColor flex items-start gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
        National Skills Development Authority
        </p>
      </a>
       <a href="" className="hover:text-primaryColor flex items-start gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
        Primary Digital Content
        </p>
      </a>
       <a href="" className="hover:text-primaryColor flex items-start gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
        National Portal
        </p>
      </a>
      
      <button className='w-full bg-primaryColor text-white rounded-lg py-2 text-lg mt-5'>All Link</button>
    </div>
        </div>
        </div>
    );
};

export default ImportantLink;
import React from 'react';
import { FiCheckSquare } from 'react-icons/fi';

const EServices = () => {
    return (
        <div>
            <div className="border-t-4 border-primaryColor  bg-white p-5 rounded-lg shadow-2xl mt-10">
      <h1 className="text-3xl font-semibold mb-2">Internal eServices</h1>
      <div className="w-full h-[1px] bg-[#b0adad]"></div>
      {/* ImportAnnouncement section */}
      <a href="" className="hover:text-primaryColor flex items-center gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
          Web Mail
        </p>
      </a>
      {/* <div className="w-full h-[1px] bg-[#b0adad] mt-2"></div> */}
       {/* ImportAnnouncement section */}
       <a href="" className="hover:text-primaryColor flex items-center gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
         Online Application
        </p>
      </a>
       <a href="" className="hover:text-primaryColor flex items-center gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
        National Enterprise Architecture
        </p>
      </a>
       <a href="" className="hover:text-primaryColor flex items-center gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
       CIRT 
        </p>
      </a>
      
       <a href="" className="hover:text-primaryColor flex items-center gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
        Online Recruitment System 
        </p>
      </a>
       <a href="" className="hover:text-primaryColor flex items-center gap-1 mt-2">
        <span className='text-primaryColor text-xl'>
            <FiCheckSquare/>
        </span>
        <p className="text-[16px] font-medium">
        One Stop Service (OSS) 
        </p>
      </a>
      
      <button className='w-full bg-primaryColor text-white rounded-lg py-2 text-lg mt-5'>Show All </button>
    </div>
        </div>
    );
};

export default EServices;
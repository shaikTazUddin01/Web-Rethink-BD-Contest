import React from 'react';

const VisitorCount = () => {
    return (
        <div>
      <div className="border-t-4 border-primaryColor  bg-white p-5 rounded-lg shadow-2xl mt-10">
        <h1 className="text-3xl font-semibold mb-2">Visitor Counter</h1>
        <div className="w-full h-[1px] bg-[#b0adad]"></div>

        <div className="mt-5 table border text-center border-collapse w-[60%] mx-auto">
          <p className='text-xl font-medium py-1'>Visitor Counter</p>
          <tr className='flex justify-between border table-sm '>
            <td >Today</td>
            <td>1345</td>
          </tr>
          <tr className='flex justify-between border table-sm'>
            <td >Yesterday</td>
            <td>3841</td>
          </tr>
          <tr className='flex justify-between border table-sm'>
            <td >All</td>
            <td>5332206</td>
          </tr>
          <tr className='flex justify-between border table-sm'>
            <td >Online</td>
            <td>19</td>
          </tr>
        </div>
      </div>
    </div>
    );
};

export default VisitorCount;
import hotLine from '../../assets/hotline_v.2_bn.png'

const EmergencyHotline = () => {
    return (
        <div>
            <div className="border-t-4 border-primaryColor  bg-white p-5 rounded-lg shadow-2xl mt-10">
      <h1 className="text-3xl font-semibold mb-2">Emergency Hotline</h1>
      <div className="w-full h-[1px] bg-[#b0adad]"></div>
     <div className='flex justify-center mt-2 '> 
     <img src={hotLine} alt="hotLine" className='' />
     </div>
    </div>
        </div>
    );
};

export default EmergencyHotline;
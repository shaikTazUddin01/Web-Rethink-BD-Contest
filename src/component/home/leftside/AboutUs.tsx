import aboutus from '../../../assets/aboutus2.png'
import vision from '../../../assets/vision&mision.png'
import officer from '../../../assets/officer.png'
import work from '../../../assets/work.png'

const AboutUs = () => {
    return (
      <div className='bg-white border-2 w-full rounded-xl shadow-xl p-5'>
        <div className='mb-5'>
        <h1 className='text-2xl font-semibold text-center'>About Us</h1>
        {/* <div className='w-[10%] h-[2px] bg-primaryColor mx-auto mb-[2px]'></div> */}
        {/* <div className='w-[12%] h-[2px] bg-primaryColor mx-auto'></div> */}
        </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1 */}
            <div className='bg-slate-200 rounded-xl text-center p-5 shadow-lg cursor-pointer hover:shadow-lg hover:shadow-primaryColor hover:-mt-1'>
                <img  src={vision} alt="" className='mx-auto h-[100px]'/>
                <h1 className='mt-1 font-medium'>Vision & Mission</h1>
            </div>
            <div className='bg-slate-200 rounded-xl text-center p-5 shadow-lg cursor-pointer hover:shadow-lg hover:shadow-primaryColor hover:-mt-1'>
                <img  src={aboutus} alt="" className='mx-auto h-[100px]'/>
                <h1 className='mt-1 font-medium'>Organogram</h1>
            </div>
            <div className='bg-slate-200 rounded-xl text-center p-5 shadow-lg cursor-pointer hover:shadow-lg hover:shadow-primaryColor hover:-mt-1'>
                <img  src={officer} alt="" className='mx-auto h-[100px]'/>
                <h1 className='mt-1 font-medium'>Officers/Staff</h1>
            </div>
            <div className='bg-slate-200 rounded-xl text-center p-5 shadow-lg cursor-pointer hover:shadow-lg hover:shadow-primaryColor hover:-mt-1'>
                <img  src={work} alt="" className='mx-auto h-[100px]'/>
                <h1 className='mt-1 font-medium'>Work Distribution</h1>
            </div>
        </div>
      </div>
    );
};

export default AboutUs;
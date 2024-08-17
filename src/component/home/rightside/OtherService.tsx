import eDir from "../../../assets/e-directory.jpg";
import internalES from "../../../assets/internal_eservice_en.jpg";
import myGovt from "../../../assets/mygov_logo_en.jpg";
import discount from '../../../assets/discount_en.jpg'

const OtherService = () => {
  return (
    <div>
      <div className="border-t-4 border-primaryColor  bg-white p-5 rounded-lg shadow-2xl mt-10">
        <h1 className="text-3xl font-semibold mb-2">Other Services</h1>
        <div className="w-full h-[1px] bg-[#b0adad]"></div>

        <div className="mt-5 space-y-3">
          <div className="rounded-md overflow-hidden">
            <a href="">
              <img src={eDir} alt="" />
            </a>
          </div>
          <div className="rounded-md overflow-hidden">
            <a href="">
              <img src={internalES} alt="" />
            </a>
          </div>
          <div className="rounded-md overflow-hidden">
            <a href="">
              <img src={myGovt} alt="" />
            </a>
          </div>
          <div className="rounded-md overflow-hidden">
            <a href="">
              <img src={discount} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherService;

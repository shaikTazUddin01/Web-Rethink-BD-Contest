import img1 from "../../../assets/dengu.jpg";

const ToPreventDengue = () => {
  return (
    <div>
      <div className="border-t-4 border-primaryColor  bg-white p-5 rounded-lg shadow-2xl mt-10">
        <h1 className="text-3xl font-semibold mb-2">To Prevent Dengue</h1>
        <div className="w-full h-[1px] bg-[#b0adad]"></div>

        <div className="mt-5 ">
          <img
            src={img1}
            alt=""
            className="mx-auto rounded-xl overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default ToPreventDengue;

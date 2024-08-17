const Floods = () => {
  return (
    <div className="border-x-4 border-primaryColor  bg-white p-5 rounded-lg shadow-2xl mt-10">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold ">What to do during floods</h1>
        <div className="w-full h-[1px] bg-[#b0adad] mt-2"></div>

        {/* <div className='w-[10%] h-[2px] bg-primaryColor mx-auto mb-[2px]'></div> */}
        {/* <div className='w-[12%] h-[2px] bg-primaryColor mx-auto'></div> */}
      </div>
      <div>
        <iframe
          className="w-full"
          height="315"
          src="https://www.youtube.com/embed/GT9ShGE_qjg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Floods;

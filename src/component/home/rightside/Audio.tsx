import nationalAnthem from '../../../assets/bd_national_anthem.mp3'
const Audio = () => {
  return (
    <div>
      <div className="border-t-4 border-primaryColor  bg-white p-5 rounded-lg shadow-2xl mt-10">
        <h1 className="text-3xl font-semibold mb-2">National Anthem</h1>
        <div className="w-full h-[1px] bg-[#b0adad]"></div>

        <div className="mt-5 flex justify-center">
          <audio controls>
          <source src={nationalAnthem} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export default Audio;

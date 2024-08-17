import { FiCheckSquare } from "react-icons/fi";


const CardDesign = ({image,name,items}:{image:string;name:string,items:string[]}) => {
  return (
    <div className="bg-white border-b-4 border-primaryColor w-full rounded-xl shadow-xl p-7  hover:shadow-primaryColor hover:-mt-1 grow-0">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-center">
        {name}
        </h1>
      </div>
      <div className=" grid grid-cols-1 gap-5 items-center">
        {/* 1 */}

        <img src={image} alt="" className="mx-auto h-[180px] md:h-[200px]" />
        <div className=" md:px-3">

            {

                items.map(item=>{
                    return(
                        <a
                        href=""
                        className="hover:text-primaryColor flex items-center gap-1 mt-1 "
                      >
                        <span className="text-primaryColor text-xl">
                          <FiCheckSquare />
                        </span>
                        <p className="text-[16px] font-medium ">{item} </p>
                      </a>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
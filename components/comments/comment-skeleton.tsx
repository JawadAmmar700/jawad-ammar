import React from "react"

const Skeleton = () => {
  return (
    <div className="w-full flex items-center justify-center mt-3 flex-none">
      <div>
        <div className="w-56 h-14 bg-white rounded flex items-center justify-center space-x-2 shadow-2xl">
          <div className="w-[30px] h-[30px] border-4 border-[#BEA5F4] rounded-full p-0.5">
            <div className="w-full h-full rounded-full bg-[#E7E7E7]"></div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="w-36 h-3 rounded bg-[#EFEFEF]"></div>
            <div className="w-24 h-3 rounded bg-[#EFEFEF]"></div>
          </div>
        </div>
        <div className="-mt-2 ml-8 w-56 h-14 bg-white rounded flex items-center justify-center space-x-2 shadow-2xl">
          <div className="w-[30px] h-[30px] border-4 border-[#BEA5F4] rounded-full p-0.5">
            <div className="w-full h-full rounded-full bg-[#E7E7E7]"></div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="w-36 h-3 rounded bg-[#EFEFEF]"></div>
            <div className="w-24 h-3 rounded bg-[#EFEFEF]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton

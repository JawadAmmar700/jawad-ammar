import React from "react"
import Card from "./Card"

const Work = React.forwardRef<HTMLDivElement>(({ all }: any, ref) => {
  return (
    <div
      ref={ref}
      id="Showcase"
      className="w-full pb-4 mt-16 bg-black opacity-100 flex flex-col space-y-24 py-10"
    >
      <div className="flex flex-col items-center space-y-4 mt-12">
        <p className="font-bold text-white text-2xl">Showcase</p>
        <p className="text-gray-300 ">
          Meet hundreds of beautiful websites built with Next.js by Vercel
        </p>
      </div>

      <div className="w-full  flex justify-center items-center">
        <div className=" overflow-y-scroll grid grid-cols-3 gap-10 w-[90%] place-content-center py-2 ">
          {all?.map((item: any, index: number) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
})

export default Work

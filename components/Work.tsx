import React from "react"
import Card from "./Card"

const Work = React.forwardRef<HTMLDivElement>((props: any, ref) => {
  return (
    <div
      ref={ref}
      id="Work"
      className="w-full h-[950px] pb-4 mt-16 bg-black opacity-90 relative"
    >
      <h1 className="absolute top-24 text-white font-bold text-2xl left-2/4 -translate-x-2/4">
        My Projects
      </h1>
      <div className="relative top-56 text-white px-16">
        <div>
          <p className="text-xl font-bold">NextJs</p>
        </div>
        <div className="mt-6 md:mt-9 flex overflow-x-scroll pb-10 hide-scroll-bar ">
          {props?.NextJs.map((item: any, index: number) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="relative top-56 text-white px-16">
        <div>
          <p className="text-xl font-bold">ReactJs</p>
        </div>
        <div className="mt-6 md:mt-9 flex overflow-x-scroll pb-10 hide-scroll-bar">
          {props?.ReactJs.map((item: any, index: number) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
})

export default Work

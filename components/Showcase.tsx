import React from "react"
import Card from "./Card"

type ProjectType = {
  name: string
  src: string
  link: string
  videoUrl: string
  technology: string
  description: string
  site?: string
  span: number
}

const ShowCase = ({ all }: { all: ProjectType[] }) => {
  return (
    <div
      id="Showcase"
      className="w-full pb-4 mt-16 bg-black opacity-100 flex flex-col space-y-24 py-10"
    >
      <div className="flex flex-col items-center space-y-4 mt-12">
        <p className="font-bold text-white text-2xl">Showcase</p>
        <p className="text-gray-300 text-sm text-center md:text-xl">
          Meet couple of beautiful websites built with Next.js and React.js
        </p>
      </div>

      <div className="w-full  flex justify-center items-center">
        <div className=" overflow-y-scroll grid grid-cols-1 md:grid-cols-3 gap-10 w-[90%] place-content-center py-2">
          {all?.map((item: any, index: number) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShowCase

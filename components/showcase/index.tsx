import { ProjectType } from "../../lib/types"
import { ExclamationIcon } from "@heroicons/react/solid"
import Card from "./Card"

const ShowCase = ({
  projects,
  showcaseRef,
}: {
  projects: ProjectType[]
  showcaseRef: React.RefObject<HTMLDivElement>
}) => {
  return (
    <div
      ref={showcaseRef}
      id="Showcase"
      className="w-full pb-4 mt-16 bg-black opacity-100 flex flex-col space-y-24 py-10"
    >
      <div className="flex flex-col items-center space-y-4 mt-12">
        <p className="font-bold text-white text-2xl">Projects</p>
        <p className="text-gray-300 text-sm text-center md:text-xl">
          Here are some interactive and responsive applications I've worked on,
          built with different frameworks and libraries.
        </p>
        <div className="flex items-center justify-center space-x-2">
          <ExclamationIcon className="w-5 h-5 text-yellow-500" />
          <p className="text-gray-300 text-sm ">
            some project demo's wont work due to database limitation
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className=" overflow-y-hidden grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-10 w-[90%] place-content-center py-2">
          {projects?.map((item: ProjectType, index: number) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ShowCase

import React from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import resumeData from "../json/resumeData.json"
import {
  CodeIcon,
  PlayIcon,
  ChevronLeftIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline"
import Link from "next/link"

export const getStaticPaths: GetStaticPaths = async () => {
  const Nextjs = resumeData.NextJs.map(project => ({
    params: { name: project.name },
  }))
  const Reactjs = resumeData.ReactJs.map(project => ({
    params: { name: project.name },
  }))
  const paths = Nextjs.concat(Reactjs)

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const param = ctx.params.name
  const nextjs = resumeData.NextJs
  const reactjs = resumeData.ReactJs
  const AllProjects = nextjs.concat(reactjs)
  const specificProject = AllProjects.find(project => project.name === param)

  return {
    props: { specificProject },
  }
}

const Details = ({ specificProject: data }) => {
  return (
    <div className="w-full relative text-white z-0">
      <div className="w-full">
        <Link href="/#Work">
          <div className="fixed top-2 left-5 text-blue-500 flex justify-center items-center hover:scale-100 scale-95 hover:text-blue-600 cursor-pointer">
            <ChevronLeftIcon className="w-[30px]" />
            <p className="font-semibold">Home</p>
          </div>
        </Link>
        <img
          src={data.src}
          alt={data.name}
          className="w-full md:h-[500px] object-contain z-10"
        />
      </div>

      <div className="w-full mb-10 text-white mt-10 flex flex-col space-y-5 justify-center items-center z-30">
        <div className="flex space-x-2 items-center justify-center">
          <h1 className="font-bold text-xl">Project Name:</h1>
          <p className="text-xl">{data.name}</p>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center ">
          <h1 className="font-bold text-xl">Technology Used:</h1>
          <p className="text-xl  md:w-auto text-center">{data.technology}</p>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-center ">
          <h1 className="font-bold text-xl">Description:</h1>
          <p className="text-xl px-4  md:w-[700px] text-center">
            {data.description}
          </p>
        </div>
        <div className="flex space-x-2 mb-5 items-center justify-center">
          <a
            href={data.link}
            target="_blank"
            className=" border-2 font-bold h-[50px] hover:bg-white hover:text-black transition-all duration-75 delay-75 border-white rounded flex space-x-3 w-[150px] items-center justify-center"
          >
            <p> View Code</p>
            <CodeIcon className="w-[30px]" />
          </a>
          <a
            href={data.videoUrl}
            target="_blank"
            className=" border-2 text-black bg-white font-bold h-[50px] hover:bg-black hover:text-white transition-all duration-75 delay-75 border-white rounded flex space-x-3 w-[150px] items-center justify-center"
          >
            <p>Watch</p>
            <PlayIcon className="w-[30px]" />
          </a>
        </div>
        {data?.site && (
          <a
            href={data.site}
            target="_blank"
            className="  font-bold h-[50px]  transition-all duration-75 delay-75  rounded flex space-x-3 w-[150px] items-center justify-center hover:outline-white"
          >
            <p>View Site</p>
            <GlobeAltIcon className="w-[30px]" />
          </a>
        )}
      </div>
    </div>
  )
}

export default Details

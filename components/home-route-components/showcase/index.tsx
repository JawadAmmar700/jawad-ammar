import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import Content from "./content";

const ShowCase = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <div
      id="Showcase"
      className="w-full pb-4 mt-16 bg-black opacity-100 flex flex-col space-y-5 py-10"
    >
      <div className="flex flex-col items-center space-y-4 mt-12">
        <p className="font-bold text-white text-2xl">Projects</p>
        <p className="text-gray-300 text-sm text-center md:text-xl px-4">
          Here are some interactive and responsive applications I've worked on,
          built with different frameworks and libraries.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-2  justify-center items-center">
          <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />
          <p className="text-gray-300 text-sm text-center px-4">
            Some project will display an error due to database free trial
            limitations.
          </p>
        </div>
      </div>
      <Content projects={projects} />
    </div>
  );
};

export default ShowCase;

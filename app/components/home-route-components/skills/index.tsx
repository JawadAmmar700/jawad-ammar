import { Skills, subSkillType } from "../../lib/types";
import SkillsContent from "./skills-content";

const SKills = ({ skills }: { skills: Skills[] }) => {
  return (
    <div id="Skills" className="w-full relative mt-72 text-black">
      <div className="flex flex-col space-y-4 w-full md:items-center bg-slate-100 relative top-16">
        <div className="mt-16 px-2 flex flex-col md:w-[700px] lg:w-[900px] mb-4 lg:ml-24 ">
          <div>
            <p className="text-2xl font-bold">Education:</p>
            <div className="p-4 font-medium ">
              <p>
                1- Bachelor Science Degree in Computer and Communication
                Engineering
              </p>
              <div className="ml-10  ">
                <li> Lebanese International University, Beirut, Lebanon</li>
                <li> 2018- In Progress, expected in 2022</li>
              </div>
            </div>
            <div className="p-4 font-medium ">
              <p>2- Baccalaureate Degree</p>
              <div className="ml-10">
                <li> Cedars Cultural School, Kabr Chamoun, Lebanon </li>
                <li> 2017-2018</li>
              </div>
            </div>
          </div>
          <div className=" px-2">
            <p className="text-2xl font-bold">Skills:</p>
            <SkillsContent skills={skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SKills;

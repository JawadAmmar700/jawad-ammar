import { useState } from "react"
import ProgressBar from "./ProgressBar"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { ChevronUpIcon } from "@heroicons/react/solid"
import { motion } from "framer-motion"
import { Skills, subSkillType } from "../../lib/types"

const SKills = ({
  skills,
  skillRef,
}: {
  skills: Skills[]
  skillRef: React.RefObject<HTMLDivElement>
}) => {
  const [isOpen, setIsOpen] = useState(-1)

  return (
    <div id="Skills" ref={skillRef} className="w-ful relative mt-72">
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
                <li> Cedars Cultural School, Kabr Chmoun, Lebanon </li>
                <li> 2017-2018</li>
              </div>
            </div>
          </div>
          <div className=" px-2">
            <p className="text-2xl font-bold">Skills:</p>
            <div className="p-4 font-medium">
              {skills?.map((skill: Skills, index: number) => (
                <div key={index}>
                  <p>
                    {index + 1}- {skill.lng}- {skill.percent}%
                  </p>
                  <div id="Skills" className="px-8">
                    <ProgressBar percent={skill.percent} />
                    <div
                      onClick={() => setIsOpen(index === isOpen ? -1 : index)}
                      className="w-[105px] text-sm mt-1 justify-center flex items-center space-x-3 cursor-pointer hover:text-blue-500"
                    >
                      view more
                      {isOpen == index ? (
                        <ChevronUpIcon className="w-[15px] h-[15px]" />
                      ) : (
                        <ChevronDownIcon className="w-[15px] h-[15px]" />
                      )}
                    </div>
                    {isOpen === index && (
                      <div className="px-4">
                        {skill.subSkill.map(
                          (subSkill: subSkillType, index: number) => (
                            <div key={index}>
                              <li>
                                {subSkill.lng}- {subSkill.percent}%
                              </li>
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${subSkill.percent}%` }}
                                transition={{ duration: 0.5 }}
                                className="px-4"
                              >
                                <ProgressBar percent={subSkill.percent} />
                              </motion.div>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SKills

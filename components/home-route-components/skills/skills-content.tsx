"use client";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import ProgressBar from "./ProgressBar";

const SkillsContent = ({ skills }: { skills: Skills[] }) => {
  const [isOpen, setIsOpen] = useState<number>(-1);

  return (
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
                {skill.subSkill.map((subSkill: subSkillType, index: number) => (
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
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsContent;

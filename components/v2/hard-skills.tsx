import Image from "next/image";
import React from "react";
import HighlightText from "./highlight-text";
import SectionTitle from "./section-title";
import Separator from "./separator";

type HardSkillsProps = {
  skills: Skills[];
};

const HardSkills = ({ skills }: HardSkillsProps) => {
  return (
    <div className="mt-5">
      <SectionTitle>HARD SKILLS</SectionTitle>
      <Separator />
      <div className="mt-2 flex flex-wrap justify-around items-start gap-y-3  space-x-3">
        {skills.map((skill) => (
          <div key={skill.id.toString()}>
            <h1 className="font-bold">{skill.title}</h1>
            <div className="font-semibold">
              <div className="flex flex-col space-y-1 mt-2">
                {skill.skills?.map((subSkill, index) => (
                  <div
                    key={index}
                    className="flex space-x-2 items-center p-2 rounded-lg shadow-sm  dark:bg-black/10"
                  >
                    <Image
                      src={`/technology/${subSkill.src}.svg`}
                      alt={subSkill.name}
                      width={20}
                      height={20}
                    />
                    <p className="text-xs text-black dark:text-white font-semibold">
                      <HighlightText>{subSkill.name}</HighlightText>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HardSkills;

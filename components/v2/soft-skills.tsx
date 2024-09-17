import React from "react";
import List from "./list";
import SectionTitle from "./section-title";
import Separator from "./separator";

const SoftSkillsArray = [
  "   Good verbal and written communication skills",
  " Motivated and always willing to learn new things",
  "Independent and self-sufficient in handling tasks",
  "Collaborative and able to work in a team driven environment",
];

const SoftSkills = () => {
  return (
    <div className="mt-5">
      <SectionTitle>SOFT SKILLS</SectionTitle>
      <Separator />
      <div className="mt-2">
        <List list={SoftSkillsArray} />
      </div>
    </div>
  );
};

export default SoftSkills;

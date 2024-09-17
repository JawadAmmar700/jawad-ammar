import React from "react";
import List from "./list";
import SectionTitle from "./section-title";
import Separator from "./separator";

const hobbies = [
  " Artificial Intelligence",
  "  Video Games",
  "Cooking middle eastern cuisine",
  "Exercising",
];

const Hobbies = () => {
  return (
    <div className="mt-5">
      <SectionTitle>HOBBIES</SectionTitle>
      <Separator />
      <div className="mt-2">
        <List list={hobbies} />
      </div>
    </div>
  );
};

export default Hobbies;

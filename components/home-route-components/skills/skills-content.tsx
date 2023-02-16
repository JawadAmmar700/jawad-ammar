import Image from "next/image";

const SkillsContent = ({ skills }: { skills: subSkillType[] }) => {
  return (
    <div className="p-4 font-medium">
      <div className="space-x-2 flex flex-wrap w-full gap-y-2">
        {skills?.map((skill, index) => (
          <div
            key={index}
            className="flex space-x-2 items-center p-2 rounded-lg bg-white shadow-2xl"
          >
            <Image
              src={`/technology/${skill.src}.svg`}
              alt={skill.name}
              width={20}
              height={20}
            />
            <p className="text-xs text-black font-bold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;

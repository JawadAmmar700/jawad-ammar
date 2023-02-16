import SkillsContent from "./skills-content";

const SKills = ({ data }: { data: Skills[] }) => {
  return (
    <div id="Skills" className="w-full relative mt-72 text-black">
      <div className="flex flex-col space-y-4 w-full md:items-center bg-slate-100 relative top-16">
        <div className="mt-16 px-2 flex flex-col md:w-[700px] lg:w-[900px] mb-4 lg:ml-24 ">
          <div className="">
            <p className="text-2xl font-bold">Key Skills:</p>
            <div className="flex flex-col space-y-4 mt-10">
              {data.map((skill, i) => (
                <div key={i} className="flex flex-col space-y-2 px-5">
                  <p className="text-xl font-bold">{skill.title}</p>
                  <SkillsContent skills={skill.skills} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SKills;

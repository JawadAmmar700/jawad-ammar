import SkillsContent from "./skills-content";

const SKills = ({ skills }: { skills: Skills[] }) => {
  return (
    <div id="Skills" className="w-full relative mt-72 text-black">
      <div className="flex flex-col space-y-4 w-full md:items-center bg-slate-100 relative top-16">
        <div className="mt-16 px-2 flex flex-col md:w-[700px] lg:w-[900px] mb-4 lg:ml-24 ">
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

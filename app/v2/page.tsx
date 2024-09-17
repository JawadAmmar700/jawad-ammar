import EducationAndExperience from "@/components/v2/education-and-experience";
import HardSkills from "@/components/v2/hard-skills";
import Header from "@/components/v2/header";
import Hobbies from "@/components/v2/hobbies";
import Info from "@/components/v2/info";
import Languages from "@/components/v2/languages";
import Projects from "@/components/v2/projects";
import SoftSkills from "@/components/v2/soft-skills";
import Summary from "@/components/v2/summary";
import { projectsQuery, skillsQuery } from "@/lib/queries";

export const runtime = "edge";

export default async function Home() {
  const projects = await projectsQuery();
  const skills = await skillsQuery();
  return (
    <main className="md:py-10 xl:px-52 lg:px-40 p-5 dark:text-white text-black">
      <Header />
      <Info />
      <Summary />
      <EducationAndExperience />
      <Projects projects={projects} />
      <HardSkills skills={skills} />
      <SoftSkills />
      <Languages />
      <Hobbies />
    </main>
  );
}

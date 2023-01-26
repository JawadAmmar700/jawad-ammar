import Carousal from "../components/project-route-components/slider/carousal";
import Footer from "../components/home-route-components/Footer";
import Header from "../components/project-route-components/header";
import OverflowImage from "../components/project-route-components/overflow-image";
import ProjectSocial from "../components/project-route-components/project-social";
import ProjectDetail from "../components/project-route-components/project-detail";
import { projectQuery, projectsQuery } from "../../lib/queries";

export const config = {
  runtime: "nodejs",
};

export async function generateStaticParams() {
  const projects = await projectsQuery();

  return projects.map((project) => ({
    name: project.name,
  }));
}

const Details = async ({ params }: { params: { name: string } }) => {
  const data = await projectQuery(params.name.replace("%20", " "));

  return (
    <div className="w-full bg-[#0F172A]">
      <Header name={data.name} />
      <OverflowImage
        src={data.src}
        name={data.name}
        description={data.description}
      />
      <ProjectSocial repo={data.repo} site={data.site} youtube={data.youtube} />
      <ProjectDetail
        name={data.name}
        description={data.description}
        technology={data.technology}
      />
      <Carousal slides={data.slide} />
      <Footer marginTop="16" />
    </div>
  );
};

export default Details;

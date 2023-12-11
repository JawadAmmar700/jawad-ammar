import Image from "next/image";
import { projectsQuery, skillsQuery } from "../lib/queries";
import About from "../components/home-route-components/About";
import Contact from "../components/home-route-components/Contact";
import Footer from "../components/home-route-components/Footer";
import Header from "../components/home-route-components/Header";
import Intro from "../components/home-route-components/Intro";
import ShowCase from "../components/home-route-components/showcase";
import SKills from "../components/home-route-components/skills";

// export const runtime = "edge";

const Home = async () => {
  const projects = await projectsQuery();
  const skills = await skillsQuery();
  return (
    <div className="relative">
      <div className="w-full h-screen fixed">
        <Image src="/sticky_image.jpg" alt="sticky image" fill />
      </div>
      <main className="w-full absolute top-0">
        <Header />

        <>
          <Intro />
          <About />
          <SKills data={skills} />
          <ShowCase projects={projects} />
          <Contact />
          <Footer />
        </>
      </main>
    </div>
  );
};

export default Home;

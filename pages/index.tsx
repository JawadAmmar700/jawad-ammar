import type { GetStaticProps } from "next"
import Head from "next/head"
import resumeData from "../data/resume-data.json"
import {
  Intro,
  Header,
  About,
  SKills,
  ShowCase,
  Contact,
  Footer,
} from "../components"

type subSkillType = {
  lng: string
  percent: number
}

type ProjectType = {
  name: string
  src: string
  link: string
  videoUrl: string
  technology: string
  description: string
  site?: string
  span: number
}

type Skills = {
  lng: string
  percent: string
  subSkill: Array<subSkillType>
}

interface Data {
  skills: Array<Skills>
  Projects: Array<ProjectType>
}

export const getStaticProps: GetStaticProps = () => {
  const data = {
    skills: resumeData.skills,
    Projects: resumeData.NextJs.concat(resumeData.ReactJs),
  }

  return {
    props: { data },
  }
}

export default function Home({ data }: { data: Data }) {
  return (
    <div className="z-50 relative scroll-smooth">
      <Head>
        <title>Intro</title>
        <link rel="icon" href="/J.png" />
      </Head>
      <img
        src="/fixedImage.jpg"
        alt="fixed image"
        className="w-full h-screen fixed z-0"
      />
      <main className="w-full absolute top-0">
        <Header />
        <div>
          <Intro />
          <About />
          <SKills skills={data.skills} />
          <ShowCase all={data.Projects} />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}

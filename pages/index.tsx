import type { GetStaticProps } from "next"
import Head from "next/head"
import prisma from "../lib/prisma"
import { ProjectType, Skills } from "../lib/types"
import {
  Intro,
  Header,
  About,
  SKills,
  ShowCase,
  Contact,
  Footer,
} from "../components"

export const getStaticProps: GetStaticProps = async () => {
  const projects = await prisma.data.findMany()
  const skillsData = await prisma.skills.findMany()

  const skills = skillsData.map(skill => {
    const convertedSubSkill = skill.subSkill.map(str => JSON.parse(str))
    return {
      lng: skill.lng,
      percent: skill.percent,
      subSkill: convertedSubSkill,
    }
  })

  const data = {
    skills,
    projects,
  }

  return {
    props: {
      data: JSON.stringify(data),
    },
  }
}

export default function Home({ data }: { data: string }) {
  const skills: Skills[] = JSON.parse(data).skills
  const projects: ProjectType[] = JSON.parse(data).projects

  return (
    <div className="relative">
      <Head>
        <title>Intro</title>
        <link rel="icon" href="/J.png" />
      </Head>
      <img
        src="/fixedImage.jpg"
        alt="fixed image"
        className="w-full h-screen fixed -z-10"
      />
      <main className="w-full absolute top-0">
        <Header />
        <div>
          <Intro />
          <About />
          <SKills skills={skills} />
          <ShowCase projects={projects} />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}

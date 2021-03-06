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
import { useRef } from "react"
import Image from "next/image"
import { isOnline } from "../lib/connection"

export const getStaticProps: GetStaticProps = async () => {
  const is_online = await isOnline()
  if (!is_online) {
    return {
      redirect: {
        destination: "/12029",
        permanent: false,
      },
    }
  }

  const projects = await prisma.data.findMany({
    orderBy: {
      createdAt: "asc",
    },
  })

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
  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  return (
    <div className="relative">
      <Head>
        <title>Jawad's resume</title>
        <link rel="icon" href="/jawad.png" />
      </Head>
      <div className="w-full h-screen fixed">
        <Image src="/fixedImage.jpg" alt="fixed image" layout="fill" />
      </div>
      <main className="w-full absolute top-0">
        <Header refs={refs} />
        <div>
          <Intro introRef={refs[2]} />
          <About aboutRef={refs[0]} />
          <SKills skills={skills} skillRef={refs[1]} />
          <ShowCase projects={projects} showcaseRef={refs[3]} />
          <Contact contactRef={refs[4]} />
          <Footer />
        </div>
      </main>
    </div>
  )
}

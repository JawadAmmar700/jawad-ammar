import type { GetStaticProps } from "next"
import Head from "next/head"
import { useRef } from "react"
import {
  Intro,
  Header,
  About,
  SKills,
  Work,
  Contact,
  Footer,
} from "../components"

import resumeData from "../data/resume-data.json"

export const getStaticProps: GetStaticProps = () => {
  const data = {
    skills: {
      skills: resumeData.skills,
    },
    Projects: resumeData.NextJs.concat(resumeData.ReactJs),
  }

  return {
    props: { data },
  }
}

export default function Home({ data }) {
  const IntroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const SkillsRef = useRef<HTMLDivElement>(null)
  const WorkRef = useRef<HTMLDivElement>(null)
  const ContactRef = useRef<HTMLDivElement>(null)

  const refs = {
    IntroRef,
    aboutRef,
    SkillsRef,
    WorkRef,
    ContactRef,
  }

  return (
    <div className="z-50 relative ">
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
        <Header {...refs} />
        <div>
          <Intro aboutRef={aboutRef} ref={IntroRef} />
          <About ContactRef={ContactRef} ref={aboutRef} />
          <SKills {...data.skills} ref={SkillsRef} />
          <Work all={data.Projects} ref={WorkRef} />
          <Contact ref={ContactRef} />
          <Footer IntroRef={IntroRef} />
        </div>
      </main>
    </div>
  )
}

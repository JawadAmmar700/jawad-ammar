"use client";
import React, { useState } from "react";
import SectionTitle from "./section-title";
import Separator from "./separator";
import HighlightText from "./highlight-text";
import { Images, MinusIcon, PlusIcon, TextIcon } from "lucide-react";
import Select from "./Select";
import { FiGithub, FiGlobe, FiYoutube } from "react-icons/fi";
import Link from "next/link";
import CarouselUI from "./carousel";

type ProjectsProps = {
  projects: ProjectType[];
};

const Projects = ({ projects }: ProjectsProps) => {
  const [projectId, setProjectId] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(
    projects.filter((project) => project.ref === "next")
  );
  const [isPhotos, setIsPhotos] = useState<boolean>(false);
  return (
    <div className="mt-5 relative flex flex-col space-y-2">
      <div>
        <div className="flex items-center justify-between">
          <SectionTitle>PROJECTS</SectionTitle>
          <Select
            defaultValue="next"
            onChange={(value) => {
              setFilteredProjects(
                projects.filter((project) => project.ref === value)
              );
              setProjectId(1);
            }}
          />
        </div>
        <Separator />

        <p className="font-semibold text-xs mt-2">
          <HighlightText>
            As an ambitious and dedicated developer, I have gained a solid
            foundation in various technologies through personal projects. These
            projects not only showcase my technical abilities but also my
            ability to think creatively, solve problems and deliver results.
          </HighlightText>
        </p>
        {filteredProjects.map((project, i) => (
          <div
            key={i}
            className={`mt-2 ${projectId - 1 === i && "animate-fadeIn"}`}
          >
            {projectId - 1 === i && (
              <>
                <h1 className="font-bold text-xs">
                  <HighlightText>{project.name}</HighlightText>
                </h1>
                {!isPhotos ? (
                  <div className="mt-2">
                    {project.bulletPoints.map((details) => (
                      <p className="font-semibold text-xs mt-1">
                        &#8226; <HighlightText>{details}</HighlightText>{" "}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-center animate-fadeIn">
                    <CarouselUI slides={project.slide} />
                  </div>
                )}
                <div className="flex mt-5 space-x-2">
                  <Link href={project.repo} target="_blank">
                    <FiGithub className="w-[25px]" />
                  </Link>
                  <Link href={project.youtube} target="_blank">
                    <FiYoutube className="w-[25px]" />
                  </Link>
                  <Link href={project.site!} target="_blank">
                    <FiGlobe className="w-[25px]" />
                  </Link>
                  <button onClick={() => setIsPhotos(!isPhotos)}>
                    {isPhotos ? (
                      <TextIcon className="h-4 text-black dark:text-white" />
                    ) : (
                      <Images className="h-4 text-black dark:text-white" />
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
        {/* controls */}
        <div className="absolute bottom-0 right-0 rounded-lg flex flex-col items-end backdrop-blur-sm">
          <button
            onClick={() => setProjectId((prev) => prev + 1)}
            className="p-2 rounded-sm opacity-70 hover:opacity-90 transition-opacity duration-300 shadow cursor-pointer"
            disabled={projectId == filteredProjects.length}
          >
            <PlusIcon className="h-4 text-black dark:text-white" />
          </button>
          <div className="p-2 mr-2 font-semibold opacity-70">
            <p>{projectId}</p>
          </div>
          <button
            onClick={() => setProjectId((prev) => prev - 1)}
            className="p-2 rounded-sm  opacity-70 hover:opacity-90 transition-opacity duration-300 shadow cursor-pointer"
            disabled={projectId == 1}
          >
            <MinusIcon className="h-4 text-black dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;

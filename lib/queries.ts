import { notFound } from "next/navigation";
import prisma from "./prisma";

const projectsQuery = async () => {
  const projects = await prisma.data.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return projects;
};

const skillsQuery = async () => {
  const skills = await prisma.skills.findMany();
  return skills;
};

const projectQuery = async (name: string) => {
  const project = await prisma.data.findFirst({
    where: {
      name: name,
    },
  });
  if (!project) {
    notFound();
  }
  return project;
};

export { projectsQuery, skillsQuery, projectQuery };

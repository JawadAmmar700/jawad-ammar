import prisma from "../lib/prisma";
import { projects } from "./data/projects.json";
import { skills } from "./data/skills.json";

async function main() {
  await prisma.data.createMany({
    data: projects,
  });

  await prisma.skills.createMany({
    data: skills,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

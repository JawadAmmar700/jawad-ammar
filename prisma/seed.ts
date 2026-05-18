import { PrismaClient } from "@prisma/client";
import { projects } from "./data/projects.json";
import { skills } from "./data/skills.json";
const prisma = new PrismaClient({
  datasourceUrl: process.env.DIRECT_DATABASE_URL,
});

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

import prisma from "../lib/prisma";
import Projects from "./data/projects.json";
import Skills from "./data/skills.json";

async function main() {
  await prisma.data.createMany({
    data: Projects,
  });

  await prisma.skills.createMany({
    data: Skills,
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

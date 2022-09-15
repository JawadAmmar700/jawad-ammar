import prisma from "../lib/prisma";
import Projects from "./data/projects.json";
import Skills from "./data/skills.json";

async function main() {
  await prisma.data.createMany({
    data: Projects,
  });

  const skills = Skills.map((skill) => {
    return {
      lng: skill.lng,
      percent: `${skill.percent}`,
      subSkill: skill.subSkill.map((subSkill) => {
        return JSON.stringify(subSkill);
      }),
    };
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

type subSkillType = {
  name: string;
  src: string;
};

type Slide = {
  folder: string;
  imagesLength: string;
};

type Technology = {
  name: string;
  color: string;
};

type ProjectType = {
  id: string;
  name: string;
  src: string;
  repo: string;
  youtube: string;
  slide: Slide;
  technology: Technology[];
  description: string;
  site?: string;
  span: string;
};

type Skills = {
  id: String;
  title: String;
  ref: String;
  skills: SkillsSubSkill[];
};

type Slides = {
  folder: string;
  imagesLength: string;
};

type ProjectSocialProps = {
  repo: string;
  site: string;
  youtube: string;
};

type OverflowImageProps = {
  src: string;
  name: string;
  description: string;
};

type ProjectDetailProps = {
  name: string;
  description: string;
  technology: Technology[];
};

type CardsProps = {
  data: ProjectType[];
  paginationRight: number;
  paginationLeft: number;
};

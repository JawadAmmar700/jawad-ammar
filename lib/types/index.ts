type subSkillType = {
  lng: string;
  percent: string;
};

type ProjectType = {
  name: string;
  src: string;
  link: string;
  videoUrl: string;
  technology: string;
  description: string;
  site?: string;
  span: number;
};

type Skills = {
  lng: string;
  percent: string;
  subSkill: Array<subSkillType>;
};

interface Data {
  skills: Array<Skills>;
  projects: Array<ProjectType>;
}

interface Reply {
  id: string;
  createdAt: string;
  updatedAt: string;
  repliedComment: string;
  repliedUser: string;
  image: string;
  commentId: string;
}

interface Comment {
  id: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  comment: string;
  image: string;
  Replies: Array<Reply>;
}

type User = {
  id: string;
  email: string;
  name: string;
  image: string;
};

type Session = {
  accessToken: string;
  expires: string;
  user: User;
};

type Providers = {
  callbackUrl: string;
  id: string;
  name: string;
  signinUrl: string;
  type: string;
};

export type {
  subSkillType,
  ProjectType,
  Skills,
  Data,
  Reply,
  Comment,
  User,
  Session,
  Providers,
};

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroStat {
  num: string;
  label: string;
}

export interface AboutDetail {
  key: string;
  val: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  tags: string[];
}

export interface Experience {
  period: string;
  company: string;
  location: string;
  type: string;
  role: string;
  bullets: string[];
}

export interface Project {
  name: string;
  icon: string;
  type: string;
  stack: string[];
  desc: string;
  github: string;
  live?: string;
}

export interface Achievement {
  icon: string;
  title: string;
  sub: string;
}

export interface HeroData {
  name: string;
  title: string;
  tagline: string;
  intro: string;
  badges: string[];
  stats: Array<{ label: string; value: string }>;
  viewProjectsHref: string;
  resumeHref: string;
  contactHref: string;
  availability: string;
  profileImage: string;
}

export interface AboutData {
  heading: string;
  description: string;
  highlights: string[];
}

export interface SkillData {
  name: string;
}

export interface ProjectData {
  title: string;
  summary: string;
  tech: string[];
  githubUrl: string;
  repoName: string;
  imageUrl: string;
  status?: 'Live' | 'In Progress' | 'Case Study';
  liveDemoUrl?: string;
  caseStudyUrl?: string;
}

export interface ExperienceData {
  period: string;
  title: string;
  company: string;
  details: string;
}

export interface EducationData {
  degree: string;
  institute: string;
  period: string;
  location: string;
}

export interface DrivingLicenseData {
  category: string;
  issued: string;
  expires: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface ContactData {
  heading: string;
  blurb: string;
  links: ContactLink[];
  socialLinks: ContactLink[];
}

export interface CertificationData {
  name: string;
}

export interface SeoData {
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface PortfolioData {
  hero: HeroData;
  about: AboutData;
  skills: SkillData[];
  projects: ProjectData[];
  experience: ExperienceData[];
  education: EducationData[];
  drivingLicenses: DrivingLicenseData[];
  certifications: CertificationData[];
  contact: ContactData;
  seo: SeoData;
}

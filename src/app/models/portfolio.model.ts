export interface HeroData {
  name: string;
  title: string;
  headline: string;
  tagline: string;
  badges: string[];
  availabilityChips: string[];
  stats: Array<{ label: string; value: string }>;
  viewProjectsHref: string;
  resumeHref: string;
  contactHref: string;
  scheduleInterviewHref: string;
  availability: string;
  profileImage: string;
}

export interface AboutData {
  heading: string;
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ProjectData {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  features: string[];
  achievements: string[];
  architectureLayers: string[];
  lessons?: string[];
  tech: string[];
  githubUrl: string;
  repoName: string;
  imageUrl: string;
  featured: boolean;
  status?: 'Live' | 'In Progress' | 'Case Study';
  liveDemoUrl?: string;
  caseStudyPath?: string;
}

export interface ExperienceData {
  period: string;
  title: string;
  company: string;
  location?: string;
  type?: string;
  details: string;
  achievements: string[];
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

export interface ContactPhone {
  display: string;
  href: string;
}

export interface ContactEmail {
  display: string;
  href: string;
}

export interface ContactData {
  heading: string;
  blurb: string;
  phoneSectionTitle: string;
  phones: ContactPhone[];
  emailSectionTitle: string;
  email: ContactEmail;
  location: string;
  timezone: string;
  availability: string;
  links: ContactLink[];
  socialLinks: ContactLink[];
}

export interface CertificationData {
  name: string;
  issuer?: string;
  issued?: string;
  previewImage?: string;
  pdfUrl?: string;
}

export interface AiCapability {
  title: string;
  description: string;
}

export interface AiSectionData {
  heading: string;
  blurb: string;
  capabilities: AiCapability[];
}

export interface ServiceItem {
  title: string;
  description: string;
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
  skillGroups: SkillGroup[];
  ai: AiSectionData;
  services: ServiceItem[];
  projects: ProjectData[];
  experience: ExperienceData[];
  education: EducationData[];
  drivingLicenses: DrivingLicenseData[];
  certifications: CertificationData[];
  contact: ContactData;
  seo: SeoData;
}

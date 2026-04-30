import type { SiteIconName } from '@/lib/icons';

export type NavItem = {
  label: string;
  href: string;
};

export type HeroAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

export type EcosystemUnit = {
  name: string;
  description: string;
  sector: string;
  services: string[];
  roadmap: string;
  icon: SiteIconName;
};

export type Industry = {
  name: string;
  description: string;
  icon: SiteIconName;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export type ValuePillar = {
  title: string;
  description: string;
  icon: SiteIconName;
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export type SolutionCategory = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  capabilities: string[];
  outcomes: string[];
  useCases: string[];
  icon: SiteIconName;
};

export type Initiative = {
  title: string;
  description: string;
  focus: string[];
  icon: SiteIconName;
};

export type PartnerType = {
  title: string;
  description: string;
  highlights: string[];
  icon: SiteIconName;
};

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
  icon: SiteIconName;
};

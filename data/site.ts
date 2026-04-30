import type {
  ContactDetail,
  EcosystemUnit,
  HeroAction,
  Industry,
  Initiative,
  NavItem,
  PartnerType,
  SolutionCategory,
  Stat,
  TimelineEntry,
  ValuePillar,
} from '@/types/site';

export const siteConfig = {
  name: 'Aznix Holding',
  shortName: 'Aznix',
  description:
    'Aznix Holding builds, owns, funds, and operates technology ventures across SaaS, fintech, blockchain, AI, and enterprise infrastructure.',
  url: 'https://aznixholding.com',
  email: 'partnerships@aznixholding.com',
  phone: '+1 (202) 555-0147',
  location: 'Dubai, UAE',
  statement:
    'A technology holding company shaping the next generation of digital infrastructure.',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'X', href: 'https://x.com' },
    { label: 'Crunchbase', href: 'https://www.crunchbase.com' },
  ],
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Innovation', href: '/innovation' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Contact', href: '/contact' },
];

export const heroActions: HeroAction[] = [
  { label: 'Explore Ecosystem', href: '/ecosystem', variant: 'primary' },
  { label: 'Partner With Us', href: '/partnerships', variant: 'secondary' },
];

export const ecosystemUnits: EcosystemUnit[] = [
  {
    name: 'Aznix SaaS',
    sector: 'Business software infrastructure',
    description:
      'Cloud-native platforms for workflow orchestration, multi-tenant operations, and scalable business software delivery.',
    services: ['SaaS architecture', 'Workflow engines', 'Tenant operations', 'Platform analytics'],
    roadmap:
      'Expanding into vertical SaaS layers for regulated industries and high-compliance operations.',
    icon: 'layers3',
  },
  {
    name: 'Aznix CRM',
    sector: 'Customer management systems',
    description:
      'Relationship intelligence platforms designed to unify customer data, lifecycle engagement, and revenue teams.',
    services: ['CRM infrastructure', 'Customer data layers', 'Lead orchestration', 'Lifecycle automation'],
    roadmap:
      'Launching AI-guided pipeline optimization and cross-channel customer intelligence modules.',
    icon: 'usersRound',
  },
  {
    name: 'Aznix Billing',
    sector: 'Billing infrastructure',
    description:
      'Billing engines for subscription, transaction, and hybrid revenue models with enterprise-grade controls.',
    services: ['Usage billing', 'Subscription engines', 'Revenue workflows', 'Collections tooling'],
    roadmap:
      'Rolling out adaptive pricing intelligence and embedded finance reconciliation capabilities.',
    icon: 'walletCards',
  },
  {
    name: 'Aznix Fintech',
    sector: 'Financial systems',
    description:
      'Modern financial operations infrastructure supporting payments, treasury visibility, and intelligent finance automation.',
    services: ['Payment rails', 'Finance automation', 'Treasury visibility', 'Risk controls'],
    roadmap:
      'Building regional financial intelligence products for multi-market enterprise operators.',
    icon: 'landmark',
  },
  {
    name: 'Aznix Chain',
    sector: 'Blockchain systems',
    description:
      'Blockchain architecture for digital trust, tokenized workflows, and secure distributed infrastructure.',
    services: ['Blockchain middleware', 'On-chain data services', 'Wallet infrastructure', 'Smart contract tooling'],
    roadmap:
      'Advancing enterprise-ready blockchain layers for settlement, identity, and auditability.',
    icon: 'binary',
  },
  {
    name: 'Aznix Labs',
    sector: 'Research and development',
    description:
      'Applied R&D arm incubating the next wave of AI, automation, data infrastructure, and product experiments.',
    services: ['Applied AI research', 'Rapid prototyping', 'Systems experimentation', 'New venture incubation'],
    roadmap:
      'Accelerating internal venture creation through repeatable innovation and launch frameworks.',
    icon: 'brainCircuit',
  },
];

export const industries: Industry[] = [
  {
    name: 'Fintech',
    description: 'Infrastructure for payment orchestration, risk layers, and intelligent financial operations.',
    icon: 'coins',
  },
  {
    name: 'Healthcare',
    description: 'Secure operational systems for compliance-heavy environments and data-sensitive workflows.',
    icon: 'heartPulse',
  },
  {
    name: 'Retail',
    description: 'Connected commerce tools that unify transactions, billing, and customer intelligence.',
    icon: 'shoppingBag',
  },
  {
    name: 'Logistics',
    description: 'Automation for high-volume coordination, routing visibility, and operational resilience.',
    icon: 'truck',
  },
  {
    name: 'Enterprise',
    description: 'Foundational software systems designed for scale, governance, and cross-team execution.',
    icon: 'briefcaseBusiness',
  },
  {
    name: 'Blockchain',
    description: 'Digital trust architecture powering secure data, settlement, and programmable operations.',
    icon: 'blocks',
  },
];

export const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Ventures' },
  { value: 50, suffix: '+', label: 'Products' },
  { value: 100, suffix: 'K+', label: 'Users' },
  { value: 5, suffix: '+', label: 'Industries' },
];

export const valuePillars: ValuePillar[] = [
  {
    title: 'Innovation',
    description: 'We invest in the systems that shape how businesses operate tomorrow.',
    icon: 'zap',
  },
  {
    title: 'Ownership',
    description: 'We build and operate ventures with long-term conviction, not short-term delivery cycles.',
    icon: 'building2',
  },
  {
    title: 'Trust',
    description: 'We design high-integrity infrastructure for critical workflows and mission-sensitive operations.',
    icon: 'shieldCheck',
  },
  {
    title: 'Scale',
    description: 'Every product is architected to support growth across markets, industries, and business models.',
    icon: 'scale',
  },
  {
    title: 'Technology',
    description: 'We combine software, automation, AI, and digital finance into one operating ecosystem.',
    icon: 'circuitBoard',
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: '2021',
    title: 'Holding structure initiated',
    description:
      'Aznix began as a venture platform focused on building foundational digital products rather than agency engagements.',
  },
  {
    year: '2022',
    title: 'Core infrastructure ventures launched',
    description:
      'The first operational initiatives were established across SaaS systems, billing operations, and customer infrastructure.',
  },
  {
    year: '2024',
    title: 'Expansion into fintech and blockchain',
    description:
      'The portfolio expanded into digital finance, blockchain architecture, and enterprise-grade automation layers.',
  },
  {
    year: '2026',
    title: 'Integrated ecosystem model',
    description:
      'Aznix now operates as a connected technology group with shared capabilities across product, capital, and infrastructure.',
  },
];

export const leadership = [
  {
    name: 'Executive Office',
    title: 'Group Strategy and Venture Operations',
    description:
      'Leads capital allocation, venture incubation, and long-range ecosystem development across the holding company.',
  },
  {
    name: 'Platform Leadership',
    title: 'Technology, Product, and Systems',
    description:
      'Drives architecture, platform reliability, and shared product capabilities across Aznix ventures.',
  },
  {
    name: 'Growth & Partnerships',
    title: 'Enterprise Relationships and Strategic Alliances',
    description:
      'Builds long-term partnerships with operators, investors, and ecosystem collaborators.',
  },
];

export const solutions: SolutionCategory[] = [
  {
    slug: 'enterprise-solutions',
    title: 'Enterprise Solutions',
    description:
      'Unified enterprise platforms that connect operating teams, data systems, and decision layers into one scalable environment.',
    problem: 'Large organizations struggle with fragmented workflows, slow operations, and disconnected data systems.',
    solution:
      'Aznix delivers unified enterprise platforms that connect departments, automate execution, and centralize operational visibility.',
    impact: 'Stronger governance, faster decision-making, and scalable digital operations.',
    capabilities: ['Operational control towers', 'Cross-team workflow architecture', 'System unification', 'Executive reporting layers'],
    outcomes: ['Fewer system silos', 'Improved execution speed', 'Stronger governance visibility'],
    useCases: ['Enterprise modernization', 'Multi-entity operations', 'Executive operating systems'],
    icon: 'factory',
  },
  {
    slug: 'crm-infrastructure',
    title: 'CRM Infrastructure',
    description:
      'Relationship infrastructure designed to unify customer intelligence, lifecycle execution, and revenue coordination.',
    problem: 'Revenue teams often work across siloed systems that weaken customer intelligence and lifecycle execution.',
    solution:
      'We build CRM foundations that align engagement data, sales processes, and automated relationship workflows.',
    impact: 'Higher customer clarity, better retention, and more efficient revenue operations.',
    capabilities: ['Customer data architecture', 'Lifecycle orchestration', 'Lead and pipeline systems', 'Sales workflow automation'],
    outcomes: ['Cleaner relationship data', 'Better conversion efficiency', 'Stronger retention operations'],
    useCases: ['B2B sales platforms', 'Customer lifecycle systems', 'Revenue operations modernization'],
    icon: 'usersRound',
  },
  {
    slug: 'payment-systems',
    title: 'Payment Systems',
    description:
      'Flexible monetization and billing infrastructure built for recurring, transactional, and hybrid business models.',
    problem: 'Modern businesses need flexible billing and payment systems that can support evolving monetization models.',
    solution:
      'Our billing and finance platforms support subscription, usage, and hybrid commerce models with built-in control layers.',
    impact: 'Improved cash flow, faster launch cycles, and resilient revenue infrastructure.',
    capabilities: ['Subscription billing', 'Usage metering', 'Revenue workflows', 'Collections and reconciliation'],
    outcomes: ['Faster monetization launches', 'Lower billing friction', 'More resilient cash operations'],
    useCases: ['SaaS monetization', 'Fintech billing rails', 'Embedded finance operations'],
    icon: 'badgeDollarSign',
  },
  {
    slug: 'blockchain-systems',
    title: 'Blockchain Systems',
    description:
      'Trust architecture for businesses that need verifiable transactions, programmable coordination, and secure digital settlement.',
    problem: 'Enterprises need trusted digital infrastructure for settlement, auditability, and secure data exchange.',
    solution:
      'Aznix creates blockchain middleware and trust layers for programmable, verifiable business workflows.',
    impact: 'More transparent operations, lower reconciliation friction, and stronger digital trust.',
    capabilities: ['Blockchain middleware', 'Trust layers', 'On-chain workflow design', 'Settlement architecture'],
    outcomes: ['Improved auditability', 'Reduced reconciliation overhead', 'Stronger trust by design'],
    useCases: ['Digital settlement', 'Identity-linked transactions', 'Enterprise trust infrastructure'],
    icon: 'waypoints',
  },
  {
    slug: 'automation-systems',
    title: 'Automation Systems',
    description:
      'Execution engines that reduce manual work, accelerate workflows, and expand operating leverage across the enterprise.',
    problem: 'Manual processes reduce operational speed, create bottlenecks, and limit execution at scale.',
    solution:
      'We design automation engines that remove repetitive work across finance, operations, and customer systems.',
    impact: 'Faster execution, lower operating cost, and more capacity for strategic growth.',
    capabilities: ['Workflow automation', 'Rules engines', 'Cross-system orchestration', 'Operational triggers'],
    outcomes: ['Lower operational drag', 'Fewer repetitive tasks', 'More scalable teams'],
    useCases: ['Finance automation', 'Ops workflow orchestration', 'Back-office modernization'],
    icon: 'workflow',
  },
  {
    slug: 'ai-business-tools',
    title: 'AI Business Tools',
    description:
      'Intelligence layers that move businesses from reporting and dashboards toward adaptive, guided operations.',
    problem: 'Businesses need intelligence layers that move beyond dashboards into predictive and adaptive operations.',
    solution:
      'Our AI-driven management tools transform operational data into recommendations, orchestration, and decision support.',
    impact: 'Sharper planning, more responsive systems, and intelligent operating leverage.',
    capabilities: ['Decision support systems', 'Predictive insight layers', 'Management copilots', 'Adaptive planning workflows'],
    outcomes: ['Faster decisions', 'Stronger planning accuracy', 'Higher operating leverage'],
    useCases: ['Management intelligence', 'Operational planning', 'Adaptive business tooling'],
    icon: 'bot',
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

export const initiatives: Initiative[] = [
  {
    title: 'AI Systems',
    description:
      'Developing applied intelligence layers that embed forecasting, orchestration, and operational guidance into core business workflows.',
    focus: ['Decision support engines', 'Adaptive workflows', 'Predictive operations'],
    icon: 'bot',
  },
  {
    title: 'Automation Engines',
    description:
      'Creating reusable automation frameworks to reduce operational drag across finance, CRM, support, and administration.',
    focus: ['Process automation', 'Workflow orchestration', 'Cross-system execution'],
    icon: 'refreshCw',
  },
  {
    title: 'Blockchain Infrastructure',
    description:
      'Investing in digital trust layers for secure transactions, identity-linked flows, and enterprise verifiability.',
    focus: ['Settlement rails', 'Trust architecture', 'Programmable infrastructure'],
    icon: 'lockKeyhole',
  },
  {
    title: 'Financial Intelligence Systems',
    description:
      'Building intelligence tooling that translates financial operations into real-time visibility and strategic action.',
    focus: ['Revenue insights', 'Risk monitoring', 'Capital intelligence'],
    icon: 'chartColumnBig',
  },
];

export const partnerTypes: PartnerType[] = [
  {
    title: 'Investors',
    description: 'Aligned capital partners who understand infrastructure-led value creation and long-horizon venture building.',
    highlights: ['Portfolio expansion', 'Strategic capital deployment', 'Innovation-backed growth'],
    icon: 'landmark',
  },
  {
    title: 'Technology Partners',
    description: 'Platform, infrastructure, and data partners who strengthen the operating capabilities of the Aznix ecosystem.',
    highlights: ['Platform integrations', 'Shared R&D opportunities', 'Joint go-to-market pathways'],
    icon: 'wrench',
  },
  {
    title: 'Strategic Alliances',
    description: 'Cross-sector relationships that unlock market access, distribution, and differentiated product positioning.',
    highlights: ['Market expansion', 'Ecosystem leverage', 'Long-term strategic value'],
    icon: 'handshake',
  },
  {
    title: 'Enterprise Collaboration',
    description: 'Business operators seeking infrastructure partnerships, venture collaboration, or system-level transformation.',
    highlights: ['Operational modernization', 'Venture collaboration', 'Shared product initiatives'],
    icon: 'arrowRight',
  },
];

export const contactDetails: ContactDetail[] = [
  {
    label: 'Business Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: 'mail',
  },
  {
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`,
    icon: 'phone',
  },
  {
    label: 'Location',
    value: siteConfig.location,
    icon: 'mapPinned',
  },
];

export const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Innovation', href: '/innovation' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Ecosystem',
    links: ecosystemUnits.slice(0, 4).map((unit) => ({
      label: unit.name,
      href: '/ecosystem',
    })),
  },
  {
    title: 'Solutions',
    links: solutions.slice(0, 4).map((solution) => ({
      label: solution.title,
      href: '/solutions',
    })),
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/contact' },
      { label: 'Terms', href: '/contact' },
      { label: 'Compliance', href: '/about' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
      { label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, '')}` },
      { label: siteConfig.location, href: '/contact' },
    ],
  },
];

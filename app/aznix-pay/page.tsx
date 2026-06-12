import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, ShieldCheck, Globe2, Users2 } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Aznix Pay — Global Business Payments',
  description: 'Aznix Pay offers multi-currency business accounts, FX exchange, faster global payments, and secure international treasury tools.',
};

const featureItems = [
  '180+ countries supported',
  '34 currencies held',
  '38 currency pairs exchanged instantly',
  'FCA Authorised',
  '3× faster global payments',
];

const serviceCards = [
  {
    title: 'Multi-Currency Accounts',
    body: 'Receive, hold and exchange money in 34 currencies worldwide. Get local IBANs in key territories.',
    icon: <div className="service-icon bg-[#e8f5ee] text-[#1a6b4a]">€</div>,
    primary: true,
  },
  {
    title: 'FX & Currency Exchange',
    body: 'Make affordable, instant exchanges between 38 currency pairs around the clock at excellent rates.',
    icon: <div className="service-icon bg-[#e8f5ee] text-[#1a6b4a]">⇄</div>,
  },
  {
    title: 'Global Payments',
    body: 'Experience faster international payments with a streamlined KYC process and guaranteed delivery.',
    icon: <div className="service-icon bg-[#e8f5ee] text-[#1a6b4a]">🌍</div>,
  },
  {
    title: 'Global Payroll & Payouts',
    body: 'Manage cross-border payroll and supplier payments while saving on FX with bulk payment tools.',
    icon: <div className="service-icon bg-[#e8f5ee] text-[#1a6b4a]">💼</div>,
  },
  {
    title: 'Spending Control',
    body: 'Set unique access parameters for every team member and manage permissions from one dashboard.',
    icon: <div className="service-icon bg-[#e8f5ee] text-[#1a6b4a]">🔒</div>,
  },
  {
    title: 'Local Payments',
    body: 'Domestic virtual IBANs in key territories for efficient payments at a lower cost. Get paid like a local.',
    icon: <div className="service-icon bg-[#e8f5ee] text-[#1a6b4a]">🏦</div>,
  },
];

const supportFeatures = [
  {
    title: 'Knowledge',
    description: 'Our expertise saves you time and money on global payments. We understand the nuances of cross-border transactions.',
    emoji: '✍️',
  },
  {
    title: 'Advice',
    description: 'Live help and guidance ensure smooth transaction processing whenever you need it.',
    emoji: '💬',
  },
  {
    title: 'Analysis',
    description: 'Detailed reports help you make informed decisions and optimize international finances.',
    emoji: '📊',
  },
];

const testimonials = [
  {
    quote: 'We manage multiple currencies, track payments, simplify reporting and pay our team in one simple dashboard. It’s a huge time saver.',
    author: 'Jonathan Muyal',
    company: 'Accountant & EOR Payroll Manager · Traffic Devils',
  },
  {
    quote: 'Customer support is always available. All payments are processed instantly without any delays. Highly recommend for international business.',
    author: 'ABC Capital Ltd.',
    company: 'Verified Trustpilot Review',
  },
  {
    quote: 'Opened account for affiliate marketing activity, works smoothly, thorough compliance. Excellent service for our cross-border operations.',
    author: 'FN Media Ltd.',
    company: 'Verified Trustpilot Review',
  },
];

const securityCards = [
  {
    title: 'FCA Regulated',
    body: 'Your funds are safeguarded in full compliance with FCA regulations. We hold FCA reference number 900920.',
    icon: '🛡️',
  },
  {
    title: 'Fraud Prevention',
    body: 'Advanced fraud prevention measures include two-factor authentication and multi-signature controls.',
    icon: '⚠️',
  },
  {
    title: 'Data Protection',
    body: 'Sensitive data is protected by leading security protocols and data safeguarding standards.',
    icon: '🔐',
  },
];

const solutionCards = [
  { badge: 'Startups', title: 'For Startups & Founders', body: 'Fuel your growth with flexible, affordable cross-border payments designed for fast-growing businesses.' },
  { badge: 'Enterprise', title: 'For Executives & Finance Teams', body: 'Empower growth with seamless cross-border payments and complete control of all your international transactions.' },
  { badge: 'Supply Chain', title: 'Import & Export Businesses', body: 'Manage cross-border payroll and supplier payments. Save on FX with ease across your supply chain.' },
  { badge: 'Travel', title: 'Travel & Hospitality', body: 'Cross-border payments, low fees, and transparent reporting tailored to the travel sector’s unique needs.' },
  { badge: 'eCommerce', title: 'eCommerce & Online Businesses', body: 'Accept international payments efficiently with local IBANs and multi-currency account management.' },
  { badge: 'Holdings', title: 'Holding Companies', body: 'Centralize your multi-entity finances with seamless currency management across all your holdings.' },
];

export default function AznixPayPage() {
  return (
    <main className="bg-[#F5F2EF] text-slate-950">
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f5ee] px-4 py-2 text-sm font-semibold text-[#1a6b4a]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#1a6b4a]" />
              Ready, set, pay
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Fast, reliable <em className="italic text-[#1a6b4a]">multi-currency</em> business accounts
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
                Personalized service for all businesses, big or small. Hold, send, and receive funds in 34 currencies across 180+ countries.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="inline-flex rounded-full bg-[#14532d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f7d52]">
                Get Started
              </a>
              <a href="#" className="inline-flex rounded-full border border-slate-300 bg-transparent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-[#1a6b4a] hover:text-[#1a6b4a]">
                Contact sales
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="text-[#0f766e]">★★★★★</span>
              <span>Rated Excellent on Trustpilot</span>
            </div>
          </div>

          <div className="relative">
            <div className={`${styles.floatingPill} ${styles.pillTop}`}>
              <span className={styles.pillDot} />
              Live exchange rates
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-6">
                <div className="text-sm text-slate-500">My Account</div>
                <div className="rounded-full bg-[#e8f5ee] px-3 py-1 text-sm font-semibold text-[#1a6b4a]">
                  34 currencies
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="text-sm text-slate-500">Total balance</div>
                <div className="text-4xl font-semibold text-slate-950">€84,250.00</div>
                <div className="text-sm text-slate-500">Across 6 currencies</div>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {['🇬🇧 GBP', '🇺🇸 USD', '🇪🇺 EUR', '🇩🇰 DKK', '🇨🇦 CAD'].map((currency) => (
                  <div key={currency} className="rounded-full border border-slate-200 bg-[#f5f2ef] px-3 py-2 text-sm text-slate-700">
                    {currency}
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-3">
                {[
                  { name: 'Wacky Wanders OU', date: 'Today, 10:42', amount: '+€49,250', tone: 'text-[#14532d]' },
                  { name: 'Marketing Beasts Ltd', date: 'Today, 09:15', amount: '−250 DKK', tone: 'text-slate-700' },
                  { name: 'ABC Capital SL', date: 'Yesterday', amount: '+£9,250', tone: 'text-[#14532d]' },
                ].map((txn) => (
                  <div key={txn.name} className="flex items-center justify-between rounded-2xl bg-[#f5f2ef] p-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${txn.amount.startsWith('+') ? 'bg-[#e8f5ee] text-[#1a6b4a]' : 'bg-[#e6f1fb] text-[#0c447c]'}`}>
                        {txn.name.split(' ').map((word) => word[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-950">{txn.name}</div>
                        <div className="text-xs text-slate-500">{txn.date}</div>
                      </div>
                    </div>
                    <div className={`text-sm font-semibold ${txn.tone}`}>{txn.amount}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.floatingPill} ${styles.pillBottom}`}>
              <span className={styles.pillDot} />
              FCA Regulated · Funds Safeguarded
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#14532d] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 text-sm sm:px-8 lg:px-10">
          {featureItems.map((item) => (
            <div key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-[#68c99b]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="rounded-[20px] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { num: '34', label: 'Currencies supported' },
                { num: '180+', label: 'Countries worldwide' },
                { num: '38', label: 'FX currency pairs' },
                { num: '3×', label: 'Faster global payments' },
              ].map((item) => (
                <div key={item.label} className="border-r border-slate-200 last:border-r-0 px-4 text-center">
                  <div className="text-4xl font-serif font-semibold text-[#1a6b4a]">{item.num}</div>
                  <div className="mt-2 text-sm text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="section-tag pb-2 text-sm font-semibold uppercase tracking-widest text-[#1a6b4a]">Financial Services</div>
              <h2 className="section-title text-3xl font-semibold tracking-tight text-slate-950">Everything your business needs to pay globally</h2>
              <p className="mt-4 max-w-2xl text-slate-600">One account for all your international payment needs — from holding to sending, exchanging to receiving.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {serviceCards.map((card) => (
                <div key={card.title} className={`rounded-[20px] border p-6 transition hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${card.primary ? 'bg-[#14532d] border-transparent text-white' : 'bg-white border-slate-200 text-slate-950'}`}>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f5ee] text-[#1a6b4a] text-lg font-semibold">{card.icon}</div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${card.primary ? 'text-slate-200' : 'text-slate-600'}`}>{card.body}</p>
                  <a href="#" className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${card.primary ? 'text-white/80' : 'text-[#1a6b4a]'}`}>
                    Learn more <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div>
              <div className="section-tag pb-2 text-sm font-semibold uppercase tracking-widest text-[#1a6b4a]">Personalised Support</div>
              <h2 className="section-title text-3xl font-semibold tracking-tight text-slate-950">Say goodbye to generic help</h2>
              <p className="mt-4 text-slate-600">Hello to personalized service that’s all about you and your unique business needs. Your account manager is always available to help.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#" className="inline-flex rounded-full bg-[#14532d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f7d52]">Get Started</a>
                <a href="#" className="inline-flex rounded-full border border-slate-300 bg-transparent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-[#1a6b4a] hover:text-[#1a6b4a]">Contact sales</a>
              </div>
            </div>
            <div className="space-y-5">
              {supportFeatures.map((feature) => (
                <div key={feature.title} className="support-feat rounded-[16px] border border-slate-200 bg-[#f5f2ef] p-6">
                  <div className="flex items-start gap-4">
                    <div className="support-feat-icon flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f5ee] text-[#1a6b4a] text-lg">{feature.emoji}</div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-950">{feature.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="pb-10">
            <div className="section-tag pb-2 text-sm font-semibold uppercase tracking-widest text-[#1a6b4a]">Trusted Worldwide</div>
            <h2 className="section-title text-3xl font-semibold tracking-tight text-slate-950">Trusted by companies of all sizes</h2>
            <p className="mt-4 max-w-2xl text-slate-600">Aznix Pay has earned the trust of companies worldwide by tailoring services to the unique needs of each client.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.author} className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 text-[#00b67a]">★★★★★</div>
                <p className="text-sm italic leading-7 text-slate-700">“{item.quote}”</p>
                <div className="mt-5 text-sm font-semibold text-slate-950">{item.author}</div>
                <div className="text-xs text-slate-500">{item.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#14532d] py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="section-tag pb-2 text-sm font-semibold uppercase tracking-widest text-[#68c99b]">Security</div>
          <h2 className="section-title text-3xl font-semibold tracking-tight text-white">Your money protected 24/7</h2>
          <p className="mt-4 max-w-2xl text-slate-200">Rest easy knowing your money is safe with secure storage, safeguarding, and advanced transaction monitoring.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {securityCards.map((item) => (
              <div key={item.title} className="rounded-[20px] border border-white/10 bg-white/10 p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white text-lg">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="section-tag pb-2 text-sm font-semibold uppercase tracking-widest text-[#1a6b4a]">Tailored Solutions</div>
          <div className="grid gap-10 md:grid-cols-3">
            {solutionCards.map((item) => (
              <div key={item.title} className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
                <span className="mb-4 inline-flex rounded-full bg-[#e8f5ee] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1a6b4a]">{item.badge}</span>
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1a6b4a]">Learn more <ArrowRight className="h-4 w-4" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#14532d] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Ready to simplify your global payments?</h2>
            <p className="mt-3 max-w-2xl text-slate-200">Join thousands of businesses trusting Aznix Pay for seamless cross-border transactions.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#14532d] transition hover:bg-[#e8f5ee]">Get started</a>
            <a href="#" className="inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white">Contact sales</a>
          </div>
        </div>
      </section>
    </main>
  );
}

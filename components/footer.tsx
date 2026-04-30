import Link from 'next/link';
import { footerColumns, siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(5,1fr)]">
          <div className="max-w-sm">
            <p className="text-2xl font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-4 text-base leading-7 text-slate-300">{siteConfig.statement}</p>
            <div className="mt-6 flex gap-3">
              {siteConfig.socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-brand-400/40 hover:text-white"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-500">{column.title}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.statement}</p>
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

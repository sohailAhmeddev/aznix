'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation, siteConfig } from '@/app/data/site';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHomePage = pathname === '/';
  const isImmersivePage = pathname === '/' || pathname === '/vps-hosting';

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={cn(
          'mx-auto max-w-7xl px-5 py-3 transition duration-300',
          isImmersivePage
            ? 'rounded-[1.75rem] border border-white/50 bg-white/18 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl'
            : 'rounded-full border border-slate-200 bg-white shadow-sm',
        )}
      >
        <div className="flex items-center justify-between gap-4">
          {/* <Link href="/" className="flex items-center gap-3 text-slate-950 py-0 bg-black/70 rounded  ">
            
            <Image
              className="h-[50px] w-[140px] object-cover"
              src="/logo.png"
              alt="Aznix logo"
              width={140}
              height={50}
              priority
            />
             <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-slate-600">
                Holding Company
                 Aznix Solutions
                </p>
              <p className="text-base font-semibold">
                {siteConfig.name}
                 Aznix
                </p>
            </div>
          </Link> */}
           <Link href={"/"}  className="nav-logo flex items-center gap-2 ">
              <div className="nav-logo-mark">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="5" height="5" fill="#FBBF24" />
                  <rect
                    x="8"
                    y="1"
                    width="5"
                    height="5"
                    fill="#FFFFFF"
                    opacity="1"
                  />
                  <rect
                    x="1"
                    y="8"
                    width="5"
                    height="5"
                    fill="#FFFFFF"
                    opacity="1"
                  />
                  <rect x="8" y="8" width="5" height="5" fill="#FBBF24" />
                </svg>
              </div>
              Aznix
            </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm transition',
                  pathname === item.href
                    ? isImmersivePage
                      ? 'bg-white/70 text-slate-950'
                      : 'bg-slate-100 text-slate-950'
                    : isImmersivePage
                      ? 'text-slate-800 hover:bg-white/40 hover:text-slate-950'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                'hidden rounded-full px-5 py-2.5 text-sm font-semibold text-slate-950 transition lg:inline-flex',
                isImmersivePage
                  ? 'bg-brand-400 shadow-[0_14px_28px_rgba(251,191,36,0.35)] hover:bg-brand-300'
                  : 'bg-brand-400 hover:bg-brand-300',
              )}
            >
              Get in Touch
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-950 lg:hidden',
                isImmersivePage ? 'border border-white/60 bg-white/55 backdrop-blur' : 'border border-slate-200',
              )}
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div
            className={cn(
              'mt-4 rounded-3xl p-4 lg:hidden',
              isImmersivePage
                ? 'border border-white/60 bg-white/72 backdrop-blur-xl'
                : 'border border-slate-200 bg-white',
            )}
          >
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm transition',
                    pathname === item.href
                      ? 'bg-slate-100 text-slate-950'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950',
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-2xl bg-brand-400 px-4 py-3 text-sm font-semibold text-slate-950"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}


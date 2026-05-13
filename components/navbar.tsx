'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation, siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-full border border-white/10 bg-slate-950/70 px-5 py-3 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 text-white py-0">
            {/* <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 text-sm font-bold text-slate-950">
              A
            </span> */}
            <Image
              className="h-[50px] w-[140px] object-cover"
              src="/logo.png"
              alt="Aznix logo"
              width={140}
              height={50}
              priority
            />
            {/* <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-slate-400">
                {/* Holding Company */}
                {/* Aznix Solutions
                </p>
              <p className="text-base font-semibold"> */}
                {/* {siteConfig.name} */}
                {/* Aznix
                </p>
            </div> */} 
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm transition',
                  pathname === item.href ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-brand-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-brand-300 lg:inline-flex"
            >
              Get in Touch
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/95 p-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm transition',
                    pathname === item.href ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white',
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

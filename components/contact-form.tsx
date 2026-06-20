'use client';

import { cn } from '@/lib/utils';

type ContactFormProps = {
  className?: string;
  buttonClassName?: string;
};

export function ContactForm({ className, buttonClassName }: ContactFormProps) {
  return (
    <form className={cn('rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8', className)}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="type-label normal-case tracking-normal text-slate-700">Name</span>
          <input className="form-input" type="text" name="name" placeholder="Your name" />
        </label>
        <label className="space-y-2">
          <span className="type-label normal-case tracking-normal text-slate-700">Email</span>
          <input className="form-input" type="email" name="email" placeholder="you@company.com" />
        </label>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="type-label normal-case tracking-normal text-slate-700">Company</span>
          <input className="form-input" type="text" name="company" placeholder="Company name" />
        </label>
        <label className="space-y-2">
          <span className="type-label normal-case tracking-normal text-slate-700">Subject</span>
          <input className="form-input" type="text" name="subject" placeholder="How can we help?" />
        </label>
      </div>
      <label className="mt-5 block space-y-2">
        <span className="type-label normal-case tracking-normal text-slate-700">Message</span>
        <textarea className="form-input min-h-36 resize-y" name="message" placeholder="Tell us about your partnership, venture, or infrastructure objective." />
      </label>
      <button
        type="submit"
        className={cn(
          'type-button mt-6 inline-flex rounded-full bg-brand-400 px-6 py-3 text-slate-950 transition hover:bg-brand-300',
          buttonClassName,
        )}
      >
        Send Inquiry
      </button>
    </form>
  );
}


'use client';

export function ContactForm() {
  return (
    <form className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-slate-300">Name</span>
          <input className="form-input" type="text" name="name" placeholder="Your name" />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-slate-300">Email</span>
          <input className="form-input" type="email" name="email" placeholder="you@company.com" />
        </label>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm text-slate-300">Company</span>
          <input className="form-input" type="text" name="company" placeholder="Company name" />
        </label>
        <label className="space-y-2">
          <span className="text-sm text-slate-300">Subject</span>
          <input className="form-input" type="text" name="subject" placeholder="How can we help?" />
        </label>
      </div>
      <label className="mt-5 block space-y-2">
        <span className="text-sm text-slate-300">Message</span>
        <textarea className="form-input min-h-36 resize-y" name="message" placeholder="Tell us about your partnership, venture, or infrastructure objective." />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex rounded-full bg-brand-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-300"
      >
        Send Inquiry
      </button>
    </form>
  );
}

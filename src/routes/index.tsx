import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech Plumber — Your Technology Partner" },
      {
        name: "description",
        content:
          "Comprehensive IT support for businesses in the DC metro area. Network, security, infrastructure, and data recovery from Tech Plumber.",
      },
      { property: "og:title", content: "Tech Plumber — Your Technology Partner" },
      {
        property: "og:description",
        content: "Enterprise-level IT expertise without the overhead.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "703-624-8700";
const EMAIL = "jhacker@techplumber.com";

const services = [
  {
    title: "Network Support",
    body: "Keep your systems running smoothly with proactive monitoring and regular tune-ups.",
  },
  {
    title: "Security",
    body: "Network security audits, automatic updates, and reliable backup solutions.",
  },
  {
    title: "Infrastructure Planning",
    body: "Network design and implementation tailored to your specific needs.",
  },
  {
    title: "Remote Monitoring",
    body: "We proactively identify and resolve issues before you notice them, delivering speedy, secure same-day remote service while also planning and executing strategic hardware and software upgrades aligned with your budget and long-term goals.",
  },
  {
    title: "Data Recovery",
    body: "When disaster strikes, we're ready to get you back online fast.",
  },
];

const clients = [
  "Lincoln Property Company",
  "Macpherson Opticians",
  "Tishman Speyer",
  "US China Education Trust",
  "Cohen and Cohen DDS",
  "JCR Companies Inc",
];

const testimonials = [
  { quote: "Now if only the Tech Plumber could clone himself", source: "NBC 4 News" },
  { quote: "Technology causing panic? The gadget doctor is in", source: "Washington Post" },
  {
    quote:
      "Available to solve your woes is Tech Plumber, the D.C. area's hottest Mr. Fix-It hero for technology problems",
    source: "Daily Candy",
  },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    el.querySelectorAll(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Index() {
  const rootRef = useReveal<HTMLDivElement>();

  return (
    <div ref={rootRef} className="bg-white text-black antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="text-base font-medium tracking-tight">
            Tech Plumber
          </a>
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="hidden sm:inline-flex items-center gap-2 text-sm border border-black/15 rounded-full px-4 py-2 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-sm bg-black text-white rounded-full px-4 py-2 hover:bg-black/80 transition-all duration-300"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Email us</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-24 md:pt-40 pb-24 md:pb-32 text-center">
        <div className="reveal inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-black/50 mb-8">
          <span className="w-8 h-px bg-black/30" />
          Established 2004 · DC Metro
          <span className="w-8 h-px bg-black/30" />
        </div>
        <h1 className="reveal reveal-delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.02] tracking-[-0.04em]">
          Your technology partner,
          <br className="hidden sm:block" />{" "}
          <span className="text-black/40">not just your tech support.</span>
        </h1>
        <p className="reveal reveal-delay-2 mt-10 max-w-2xl mx-auto text-base md:text-lg text-black/60 leading-relaxed font-light">
          Running a business is complicated enough without worrying whether your network will
          crash, your data is secure, or your team can access what they need. We deliver
          enterprise-level IT expertise — without the overhead of an in-house team.
        </p>
        <div className="reveal reveal-delay-3 mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 text-sm hover:gap-3 transition-all duration-300"
          >
            Get in contact
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#services"
            className="text-sm text-black/60 hover:text-black px-4 py-3 transition-colors"
          >
            Explore services →
          </a>
        </div>
      </section>

      {/* Marquee / Trust strip */}
      <section className="border-y border-black/10 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.18em] text-black/40">
          <span>25+ years experience</span>
          <span className="w-1 h-1 rounded-full bg-black/20" />
          <span>Senior technicians only</span>
          <span className="w-1 h-1 rounded-full bg-black/20" />
          <span>Same-day response</span>
          <span className="w-1 h-1 rounded-full bg-black/20" />
          <span>Trusted across DC</span>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-4xl mx-auto px-6 md:px-10 py-28 md:py-40">
        <div className="reveal text-center mb-16 md:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-black/50 mb-4">What we do</div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.035em]">Our services</h2>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="reveal border-t border-black/10"
        >
          {services.map((s, i) => (
            <AccordionItem
              key={s.title}
              value={`item-${i}`}
              className="border-b border-black/10"
            >
              <AccordionTrigger className="py-7 md:py-8 text-xl md:text-2xl font-normal tracking-tight hover:no-underline hover:opacity-70 transition-opacity [&>svg]:hidden group">
                <span>{s.title}</span>
                <span className="relative w-5 h-5 shrink-0 ml-4">
                  <span className="absolute inset-x-0 top-1/2 h-px bg-black -translate-y-1/2" />
                  <span className="absolute inset-y-0 left-1/2 w-px bg-black -translate-x-1/2 transition-transform duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-0" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-black/60 leading-relaxed pb-8 max-w-2xl font-light">
                {s.body}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Founder */}
      <section className="bg-black text-white py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="reveal md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-white/5">
              <img
                src={founderImg}
                alt="Jason Hacker, founder of Tech Plumber"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s] ease-out"
                loading="lazy"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between">
              <div>
                <div className="text-base font-medium">Jason Hacker</div>
                <div className="text-sm text-black/50">Founder · Tech Plumber</div>
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-black/40">Est. 2004</div>
            </div>
          </div>
          <div className="reveal reveal-delay-1 md:col-span-7">
            <div className="text-xs uppercase tracking-[0.2em] text-black/50 mb-5">
              Meet the founder
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.035em] leading-[1.05]">
              25 years of solving problems before you notice them.
            </h2>
            <div className="mt-10 space-y-5 text-base md:text-lg text-black/70 leading-relaxed font-light max-w-xl">
              <p>
                Jason Hacker established Tech Plumber in 2004 to provide high-quality tech support
                for businesses large and small throughout the DC metro area. With more than 25
                years of experience managing both large-scale and small corporate IT projects,
                Jason brings deep technical expertise and a passion for solving complex technology
                challenges.
              </p>
              <p>
                Tech Plumber operates with a small team of elite senior technicians known for their
                reliability, responsiveness, and virtually nonexistent turnover.
              </p>
              <p>
                A defining characteristic of Tech Plumber is its unwavering dedication to clients.
                Jason understands that every organization has unique operational needs requiring
                tailored solutions. Whether supporting a family-owned business or a large trade
                association, Tech Plumber takes the time to listen, strategize, and implement the
                most effective IT solutions for each client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-28 md:py-40">
        <div className="reveal text-center mb-16 md:mb-24">
          <div className="text-xs uppercase tracking-[0.2em] text-black/50 mb-4">Press</div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.035em]">
            What people are saying
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 md:gap-14">
          {testimonials.map((t, i) => (
            <figure
              key={t.source}
              className={`reveal reveal-delay-${i + 1} flex flex-col`}
            >
              <div className="text-3xl text-black/20 leading-none mb-4">"</div>
              <blockquote className="text-lg md:text-xl leading-snug font-light text-black/85 tracking-tight flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-black/10 text-xs uppercase tracking-[0.18em] text-black/50">
                {t.source}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="bg-black text-white py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="reveal grid md:grid-cols-12 gap-8 mb-14 md:mb-20 items-end">
            <div className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
                Selected clients
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.035em]">
                Trusted across the DC metro.
              </h2>
            </div>
            <p className="md:col-span-5 text-white/60 font-light leading-relaxed">
              From family-owned practices to global institutions — every client gets the same
              senior team, the same standards, the same care.
            </p>
          </div>
          <ul className="reveal grid sm:grid-cols-2 gap-x-16">
            {clients.map((c) => (
              <li
                key={c}
                className="text-lg md:text-xl py-5 border-b border-white/10 font-light flex items-center justify-between group"
              >
                <span>{c}</span>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto px-6 md:px-10 py-28 md:py-40">
        <div className="reveal text-center mb-14 md:mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-black/50 mb-4">Contact</div>
          <h2 className="text-5xl md:text-6xl font-medium tracking-[-0.04em]">Get in touch</h2>
          <p className="mt-5 text-black/60 font-light">
            Tell us what you're working on. We'll respond within one business day.
          </p>
        </div>
        <form
          className="reveal space-y-8"
          action={`mailto:${EMAIL}`}
          method="post"
          encType="text/plain"
          onSubmit={(e) => {
            const form = e.currentTarget;
            const fd = new FormData(form);
            const body = Array.from(fd.entries())
              .map(([k, v]) => `${k}: ${v}`)
              .join("\n");
            window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
              "New inquiry from techplumber.com",
            )}&body=${encodeURIComponent(body)}`;
            e.preventDefault();
          }}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="First name" name="first" required />
            <Field label="Last name" name="last" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" />
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-black/50 mb-3">
              Project details
            </label>
            <textarea
              name="details"
              required
              rows={5}
              maxLength={2000}
              className="w-full border-b border-black/20 bg-transparent py-3 text-base font-light focus:outline-none focus:border-black transition-colors resize-none"
              placeholder="Tell us what's going on…"
            />
          </div>
          <button
            type="submit"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black text-white rounded-full px-8 py-4 text-sm hover:gap-3 transition-all duration-300"
          >
            Send inquiry
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="text-base font-medium">Tech Plumber</div>
            <div className="mt-1 text-white/50 font-light">Your technology partner.</div>
          </div>
          <div className="space-y-1 font-light">
            <a href={`mailto:${EMAIL}`} className="block hover:text-white/70 transition-colors">
              {EMAIL}
            </a>
            <a
              href={`tel:${PHONE.replace(/-/g, "")}`}
              className="block text-white/70 hover:text-white transition-colors"
            >
              {PHONE}
            </a>
          </div>
          <div className="md:text-right text-white/40 font-light">
            © {new Date().getFullYear()} Tech Plumber. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-black/50 mb-3">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={255}
        className="w-full border-b border-black/20 bg-transparent py-3 text-base font-light focus:outline-none focus:border-black transition-colors"
      />
    </div>
  );
}

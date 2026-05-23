import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import founderImg from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech Plumber — Your Technology Partner" },
      { name: "description", content: "Comprehensive IT support for businesses in the DC metro area. Network, security, infrastructure, and data recovery from Tech Plumber." },
      { property: "og:title", content: "Tech Plumber — Your Technology Partner" },
      { property: "og:description", content: "Enterprise-level IT expertise without the overhead." },
    ],
  }),
  component: Index,
});

const services = [
  { title: "Network Support & Maintenance", body: "Keep your systems running smoothly with proactive monitoring and regular tune-ups" },
  { title: "Security & Data Protection", body: "Protect your business with comprehensive security audits, threat monitoring, and data protection strategies." },
  { title: "Infrastructure Planning", body: "Strategic IT planning that scales with your business — from cabling to cloud architecture." },
  { title: "Remote Monitoring, Support & Upgrades", body: "24/7 remote monitoring and rapid-response support keeps your team productive." },
  { title: "Data Recovery", body: "When the worst happens, our recovery specialists restore what matters most." },
];

const clients = [
  "Lincoln Property Company", "Macpherson Opticians",
  "Tishman Speyer", "US China Education Trust",
  "Cohen and Cohen DDS", "JCR Companies Inc",
  "Hilton Hotels", "The Washington Ballet",
  "Brookfield Properties", "Georgetown Day School",
];

const testimonials = [
  { quote: "Now if only the Tech Plumber could clone himself", source: "NBC 4 News" },
  { quote: "Technology causing panic? The gadget doctor is in", source: "Washington Post" },
  { quote: "Available to solve your woes is Tech Plumber, the D.C area's hottest Mr. Fix-It hero for technology problems", source: "Daily Candy" },
];

function Index() {
  const [open, setOpen] = useState(0);

  return (
    <div className="bg-white text-black">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">Tech Plumber</a>
          <a href="tel:7036248700" className="border border-black rounded-full px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors">
            703-624-8700
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Your technology partner, not just your tech support.
          </h1>
          <div className="mt-10 space-y-5 text-base md:text-lg text-black/80 max-w-lg leading-relaxed">
            <p>Running a business is complicated enough without worrying whether your network will crash, your data is secure, or your team can access what they need. That's where we come in.</p>
            <p>We provide comprehensive IT support that eliminates the need to hire in-house technicians, giving you enterprise-level expertise without the overhead.</p>
          </div>
        </div>
        <div>
          <img src={heroImg} alt="Tech Plumber technicians supporting a client" width={1280} height={1024} className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <h2 className="text-5xl md:text-7xl font-bold text-center tracking-tight">Our services</h2>
        <div className="mt-16 border-t border-black/80">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <div key={s.title} className="border-b border-black/80">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-8 text-left"
                >
                  <span className="text-2xl md:text-3xl font-normal">{s.title}</span>
                  {isOpen ? <Minus className="w-6 h-6 shrink-0" /> : <Plus className="w-6 h-6 shrink-0" />}
                </button>
                {isOpen && (
                  <p className="pb-10 text-center text-base md:text-lg max-w-2xl mx-auto text-black/80">
                    {s.body}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Founder */}
      <section className="grid md:grid-cols-2">
        <img src={founderImg} alt="Jason Hacker, founder of Tech Plumber" width={1024} height={1280} loading="lazy" className="w-full h-full object-cover min-h-[500px]" />
        <div className="bg-black text-white p-10 md:p-16 lg:p-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">Meet the founder</h2>
          <div className="mt-10 space-y-5 text-base md:text-lg leading-relaxed text-white/90">
            <p>Jason Hacker established Tech Plumber in 2004 to provide high-quality tech support for businesses large and small in the DC metro area. Jason brings more than 25 years of experience managing large and small corporate IT projects, along with a passion for all things technical, to bear for his customers. Tech Plumber employs a small fleet of elite, senior, and aptly capable technicians with virtually no turnover.</p>
            <p>A defining characteristic of Tech Plumber is an unwavering dedication to its clients. Founder Jason Hacker understands that every organization is unique and requires tailored solutions. Whether it's a thriving small family-owned business or a large trade association, Jason Hacker and his small team take the time to listen, understand, and strategize to provide the best-suited IT solutions.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <h2 className="text-4xl md:text-6xl font-bold text-center tracking-tight">What people are saying</h2>
        <div className="mt-20 grid md:grid-cols-3 gap-12 md:gap-10">
          {testimonials.map((t) => (
            <figure key={t.source}>
              <blockquote className="text-xl md:text-2xl leading-snug font-medium">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-base text-black/70">— {t.source}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="bg-black text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Our clients include</h2>
          <ul className="mt-16 grid md:grid-cols-2 gap-x-16">
            {clients.map((c) => (
              <li key={c} className="text-xl md:text-2xl py-6 border-b border-white/20">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <h2 className="text-5xl md:text-7xl font-bold text-center tracking-tight">Get in touch</h2>
        <form
          className="mt-16 space-y-10"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks — we'll be in touch shortly.");
          }}
        >
          <fieldset>
            <legend className="text-base mb-4">Name</legend>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="First Name" name="first" required />
              <Field label="Last Name" name="last" required />
            </div>
          </fieldset>
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" />
          <div>
            <label className="block text-base mb-2">Project Details/Issue <span className="text-black/60">(required)</span></label>
            <textarea name="details" required rows={6} maxLength={2000} className="w-full border border-black/80 p-3 focus:outline-none focus:ring-1 focus:ring-black bg-white" />
          </div>
          <button type="submit" className="w-full border-t border-black/80 pt-6 text-2xl font-normal hover:opacity-60 transition-opacity">
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-bold text-base">Jason Hacker</div>
            <div className="mt-1 text-white/70">Founder, Tech Plumber</div>
          </div>
          <div>
            <a href="mailto:info@techplumber.com" className="hover:underline">info@techplumber.com</a>
            <div className="mt-1 text-white/70">703-624-8700</div>
          </div>
          <div className="md:text-right text-white/60">© {new Date().getFullYear()} Tech Plumber. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-base mb-2">
        {label} {required && <span className="text-black/60">(required)</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={255}
        className="w-full border border-black/80 p-3 focus:outline-none focus:ring-1 focus:ring-black bg-white"
      />
    </div>
  );
}

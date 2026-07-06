import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE_CONFIG } from "@/lib/siteConfig";
import RevealText from "@/components/luxury/RevealText";
import FadeIn from "@/components/luxury/FadeIn";
import AnimatedCounter from "@/components/luxury/AnimatedCounter";
import ImageReveal from "@/components/luxury/ImageReveal";
import HomeServices from "@/components/luxury/HomeServices";
import HomeTestimonials from "@/components/luxury/HomeTestimonials";
import { ArrowRight, Phone, CheckCircle, ChevronDown } from "lucide-react";

const HERO_IMG =
  "https://media.base44.com/images/public/6a4c0fd67824b652684904d1/822cf18f1_generated_fb0371bc.png";
const ABOUT_IMG =
  "https://media.base44.com/images/public/6a4c0fd67824b652684904d1/4e0d28fc0_generated_c31faf3c.png";

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A2540]/96 backdrop-blur-md shadow-xl"
          : "bg-[#0A2540]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between py-4">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 no-underline">
          <div
            className="w-10 h-10 rounded-md flex items-center justify-center font-mono font-bold text-white text-lg flex-shrink-0"
            style={{ background: "#C97D3B" }}
          >
            A
          </div>
          <div>
            <div className="font-display font-bold text-lg leading-tight text-white">
              A MODEL PLUMBING
            </div>
            <div
              className="text-[10px] tracking-[0.14em] uppercase font-mono"
              style={{ color: "#7FB9DE" }}
            >
              Est. 2001 · Lic #M-31665
            </div>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-7">
          {SITE_CONFIG.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors no-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA cluster */}
        <div className="flex items-center gap-4">
          <a
            href={SITE_CONFIG.phoneHref}
            className="hidden sm:block text-white font-mono text-sm font-semibold no-underline"
          >
            {SITE_CONFIG.phone}
          </a>
          <a
            href="#contact"
            className="text-white text-xs tracking-[0.1em] uppercase font-body font-medium px-5 py-2.5 transition-colors no-underline"
            style={{ background: "#C97D3B" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#a86529")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C97D3B")}
          >
            Free Quote
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-xl bg-transparent border-0 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-5" style={{ background: "#0A2540" }}>
          {SITE_CONFIG.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/85 py-3 border-b font-medium no-underline"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE_CONFIG.phoneHref}
            className="block text-white/85 py-3 font-medium no-underline"
          >
            Call {SITE_CONFIG.phone}
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32" style={{ background: "#0A2540" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <FadeIn>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4 font-mono"
              style={{ color: "#7FB9DE" }}
            >
              {SITE_CONFIG.pricing.eyebrow}
            </p>
          </FadeIn>
          <RevealText>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
              {SITE_CONFIG.pricing.headline}
            </h2>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-white/70 text-lg max-w-xl font-light">
              {SITE_CONFIG.pricing.subtext}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-12 items-start">
          {/* Ticket card */}
          <FadeIn delay={0.1}>
            <div
              className="rounded-lg overflow-hidden shadow-2xl relative"
              style={{ background: "#F3F0E5" }}
            >
              {/* Notch circles */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full"
                style={{ left: "-10px", background: "#0A2540" }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full"
                style={{ right: "-10px", background: "#0A2540" }}
              />
              {SITE_CONFIG.pricing.items.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-baseline gap-4 px-10 py-5 font-mono"
                  style={{
                    borderBottom:
                      i < SITE_CONFIG.pricing.items.length - 1
                        ? "1px dashed rgba(14,42,70,0.2)"
                        : "none",
                  }}
                >
                  <span className="text-sm" style={{ color: "#191B1D" }}>
                    {item.name}
                  </span>
                  <span
                    className="font-semibold text-base whitespace-nowrap"
                    style={{ color: "#9C5518" }}
                  >
                    {item.amount}
                  </span>
                </div>
              ))}
              <div
                className="px-10 py-5 text-xs font-body"
                style={{ color: "#52565A" }}
              >
                {SITE_CONFIG.pricing.note}
              </div>
            </div>
          </FadeIn>

          {/* CTA copy */}
          <FadeIn delay={0.3}>
            <div>
              <h3 className="font-display text-2xl text-white mb-4">
                Not sure what you need?
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Call or send a photo of the problem — most quotes are turned
                around the same day, no cost, no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="inline-flex items-center gap-2 text-white text-xs tracking-[0.1em] uppercase font-body font-medium px-6 py-3.5 transition-colors no-underline"
                  style={{ background: "#C97D3B" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#a86529")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#C97D3B")
                  }
                >
                  <Phone className="w-4 h-4" />
                  Call {SITE_CONFIG.phone}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-white text-xs tracking-[0.1em] uppercase font-body font-medium px-6 py-3.5 transition-colors no-underline"
                  style={{ border: "1px solid rgba(255,255,255,0.28)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.7)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.28)")
                  }
                >
                  Request Quote
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Service Area ─────────────────────────────────────────────────────────────
function ServiceArea() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#F7F7F7" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-[#999] mb-4 font-mono">
                {SITE_CONFIG.serviceArea.eyebrow}
              </p>
            </FadeIn>
            <RevealText>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight text-[#111]">
                {SITE_CONFIG.serviceArea.headline}
              </h2>
            </RevealText>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-[#555] text-lg font-light">
                {SITE_CONFIG.serviceArea.description}
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 grid grid-cols-2 gap-y-3 gap-x-6">
                {SITE_CONFIG.serviceArea.towns.map((town) => (
                  <div
                    key={town}
                    className="flex items-center gap-2 font-mono text-sm"
                    style={{ color: "#0A2540" }}
                  >
                    <span style={{ color: "#C97D3B" }}>—</span>
                    {town}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div
              className="rounded-lg overflow-hidden shadow-lg"
              style={{ border: "1.5px solid #e5e5e5" }}
            >
              <iframe
                title="A Model Plumbing service area map — Dripping Springs, TX"
                loading="lazy"
                src={SITE_CONFIG.serviceArea.mapSrc}
                className="w-full border-0 block"
                style={{ height: "340px" }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (i) => setOpenIdx(openIdx === i ? -1 : i);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-[#999] mb-4 font-mono">
              Good to know
            </p>
          </FadeIn>
          <RevealText>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-[#111]">
              Frequently Asked
            </h2>
          </RevealText>
        </div>
        <div className="max-w-3xl">
          {SITE_CONFIG.faq.map((item, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div style={{ borderBottom: "1px solid #e5e5e5" }}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left flex justify-between items-center gap-4 py-6 bg-transparent border-0 cursor-pointer"
                  aria-expanded={openIdx === i}
                >
                  <span
                    className="font-display text-lg font-semibold tracking-tight"
                    style={{ color: "#111" }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{
                      width: 20,
                      height: 20,
                      color: "#C97D3B",
                      transform: openIdx === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {openIdx === i && (
                  <div className="pb-6">
                    <p
                      className="text-base leading-relaxed max-w-prose"
                      style={{ color: "#555" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name  = fd.get("fname")  || "";
    const phone = fd.get("fphone") || "";
    const addr  = fd.get("faddr")  || "";
    const msg   = fd.get("fmsg")   || "";
    const body  = `Name: ${name}%0APhone: ${phone}%0AAddress: ${addr}%0A%0A${encodeURIComponent(msg)}`;
    window.location.href = `mailto:${SITE_CONFIG.contact.mailtoEmail}?subject=${encodeURIComponent(
      SITE_CONFIG.contact.mailtoSubject
    )}&body=${body}`;
  };

  const inputClass =
    "w-full px-3 py-3 rounded text-white text-sm font-body focus:outline-none transition-colors";
  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
  };

  return (
    <section id="contact" className="py-24 md:py-32" style={{ background: "#0A2540" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <FadeIn>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4 font-mono"
              style={{ color: "#7FB9DE" }}
            >
              {SITE_CONFIG.contact.eyebrow}
            </p>
          </FadeIn>
          <RevealText>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-white">
              {SITE_CONFIG.contact.headline}
            </h2>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-white/70 text-lg max-w-xl font-light">
              {SITE_CONFIG.contact.subtext}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact details */}
          <FadeIn>
            <div className="space-y-8">
              {[
                {
                  label: "Call / Text",
                  content: (
                    <a
                      href={SITE_CONFIG.phoneHref}
                      className="text-white text-xl font-semibold no-underline"
                      style={{ transition: "color .15s" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#C97D3B")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  ),
                },
                {
                  label: "Email",
                  content: (
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-white text-xl font-semibold no-underline"
                      style={{ transition: "color .15s" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#C97D3B")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                    >
                      {SITE_CONFIG.email}
                    </a>
                  ),
                },
                {
                  label: "Hours",
                  content: (
                    <p className="text-white text-lg">{SITE_CONFIG.hours}</p>
                  ),
                },
                {
                  label: "Find us",
                  content: (
                    <p className="text-white text-lg">{SITE_CONFIG.address}</p>
                  ),
                },
              ].map(({ label, content }) => (
                <div key={label}>
                  <p
                    className="text-xs tracking-[0.1em] uppercase font-mono mb-2"
                    style={{ color: "#7FB9DE" }}
                  >
                    {label}
                  </p>
                  {content}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Quote form */}
          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-lg p-8 space-y-5"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs tracking-[0.08em] uppercase font-mono mb-2"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Name
                  </label>
                  <input
                    name="fname"
                    type="text"
                    placeholder="Jane Rodriguez"
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs tracking-[0.08em] uppercase font-mono mb-2"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Phone
                  </label>
                  <input
                    name="fphone"
                    type="tel"
                    placeholder="(512) 555-0134"
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-xs tracking-[0.08em] uppercase font-mono mb-2"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Address / Area
                </label>
                <input
                  name="faddr"
                  type="text"
                  placeholder="Dripping Springs, TX"
                  className={inputClass}
                  style={inputStyle}
                />
              </div>
              <div>
                <label
                  className="block text-xs tracking-[0.08em] uppercase font-mono mb-2"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  What's going on?
                </label>
                <textarea
                  name="fmsg"
                  rows={4}
                  placeholder="Water heater not heating, leaking under kitchen sink, etc."
                  className={inputClass}
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>
              <button
                type="submit"
                className="text-white text-xs tracking-[0.1em] uppercase font-body font-medium px-8 py-3.5 transition-colors border-0 cursor-pointer"
                style={{ background: "#C97D3B" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#a86529")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#C97D3B")
                }
              >
                Send Request
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8" style={{ background: "#081A2C" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div
          className="text-sm font-mono"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          © {new Date().getFullYear()} {SITE_CONFIG.footer.copyright}
        </div>
        <div className="flex items-center gap-6">
          {SITE_CONFIG.social.map((s) => (
            <a
              key={s.platform}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono no-underline transition-colors"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
              }
            >
              {s.platform}
            </a>
          ))}
          <a
            href={SITE_CONFIG.phoneHref}
            className="text-sm font-mono no-underline transition-colors"
            style={{ color: "rgba(255,255,255,0.55)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
            }
          >
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY       = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div className="overflow-hidden" id="top">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 md:px-12"
        style={{ paddingTop: "80px" }}
      >
        {/* Parallax background */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <div
            className="absolute inset-0 z-10"
            style={{ background: "rgba(10,37,64,0.72)" }}
          />
          <img
            src={HERO_IMG}
            alt="Professional plumbing service in Dripping Springs TX"
            className="w-full h-full object-cover"
            style={{ opacity: 0.5 }}
          />
        </motion.div>

        <motion.div
          className="relative z-20 text-center max-w-5xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          {/* Eyebrow */}
          <FadeIn delay={0.2}>
            <p
              className="text-xs tracking-[0.35em] uppercase mb-8 font-mono flex items-center justify-center gap-3"
              style={{ color: "#7FB9DE" }}
            >
              <span
                className="inline-block"
                style={{ width: 26, height: 2, background: "#C97D3B" }}
              />
              {SITE_CONFIG.tagline}
            </p>
          </FadeIn>

          {/* Headline — three lines, third line in copper */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.95] text-white">
            {SITE_CONFIG.heroHeadline.split("\n").map((line, i) => (
              <span
                key={i}
                className="block"
                style={i === 2 ? { color: "#C97D3B" } : undefined}
              >
                <RevealText delay={0.3 + i * 0.15} splitWords>
                  {line}
                </RevealText>
              </span>
            ))}
          </h1>

          {/* Sub-headline */}
          <FadeIn delay={0.8}>
            <p
              className="mt-8 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-body font-light"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              {SITE_CONFIG.heroSubheadline}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={1}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 text-white text-sm tracking-[0.1em] uppercase font-body font-medium px-8 py-4 transition-colors no-underline"
                style={{ background: "#C97D3B" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#a86529")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#C97D3B")
                }
              >
                <Phone className="w-4 h-4" />
                Call {SITE_CONFIG.phone}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white text-sm tracking-[0.1em] uppercase font-body font-medium px-8 py-4 transition-colors no-underline"
                style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.75)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.3)")
                }
              >
                Get a Free Quote
              </a>
            </div>
          </FadeIn>

          {/* Trust badges */}
          <FadeIn delay={1.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {SITE_CONFIG.heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="text-xs tracking-[0.06em] px-3 py-1.5 font-mono"
                  style={{
                    border: "1px solid rgba(255,255,255,0.22)",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Scroll
          </span>
          <div
            className="relative overflow-hidden"
            style={{ width: 1, height: 48, background: "rgba(255,255,255,0.18)" }}
          >
            <motion.div
              className="absolute top-0 w-full"
              style={{ background: "#C97D3B" }}
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── Trust Strip ──────────────────────────────────────────────────────── */}
      <div
        style={{
          background: "#081A2C",
          borderTop: "1px solid rgba(127,185,222,0.16)",
          borderBottom: "1px solid rgba(127,185,222,0.16)",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SITE_CONFIG.trustStrip.map((item) => (
              <div
                key={item.value}
                className="font-mono text-xs"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                <div
                  className="font-semibold text-sm mb-0.5"
                  style={{ color: "#fff" }}
                >
                  {item.value}
                </div>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats ────────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" style={{ background: "#F7F7F7" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {SITE_CONFIG.stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p
                    className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight"
                    style={{ color: "#0A2540" }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-xs tracking-[0.2em] uppercase text-[#555]">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ImageReveal
              src={ABOUT_IMG}
              alt="A Model Plumbing — Danny Lee Terry, Licensed Master Plumber since 2001"
              className="relative aspect-[3/4] rounded-sm"
              parallax
            />
            <div>
              <FadeIn>
                <p className="text-xs tracking-[0.3em] uppercase text-[#999] mb-6 font-mono">
                  Who's turning the wrench
                </p>
              </FadeIn>
              <RevealText>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#111]">
                  {SITE_CONFIG.about.headline.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
              </RevealText>
              <FadeIn delay={0.3}>
                <p className="mt-8 text-[#555] leading-relaxed text-lg font-light">
                  {SITE_CONFIG.about.description}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <ul className="mt-8 space-y-3">
                  {SITE_CONFIG.about.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "#333" }}
                    >
                      <CheckCircle
                        style={{
                          width: 18,
                          height: 18,
                          color: "#3F7A6E",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="mt-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm tracking-[0.1em] uppercase font-body font-medium growing-underline no-underline"
                    style={{ color: "#0A2540" }}
                  >
                    Get a Free Quote <ArrowRight style={{ width: 16, height: 16 }} />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────────── */}
      <div id="services">
        <HomeServices />
      </div>

      {/* ── Pricing ──────────────────────────────────────────────────────────── */}
      <Pricing />

      {/* ── Testimonials ─────────────────────────────────────────────────────── */}
      <div id="reviews">
        <HomeTestimonials />
      </div>

      {/* ── Service Area ─────────────────────────────────────────────────────── */}
      <ServiceArea />

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <FAQ />

      {/* ── Contact ──────────────────────────────────────────────────────────── */}
      <Contact />

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}

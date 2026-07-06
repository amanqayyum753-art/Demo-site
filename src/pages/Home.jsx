import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE_CONFIG } from "@/lib/siteConfig";
import RevealText from "@/components/luxury/RevealText";
import FadeIn from "@/components/luxury/FadeIn";
import MagneticButton from "@/components/luxury/MagneticButton";
import AnimatedCounter from "@/components/luxury/AnimatedCounter";
import ImageReveal from "@/components/luxury/ImageReveal";
import HomeServices from "@/components/luxury/HomeServices";
import HomeTestimonials from "@/components/luxury/HomeTestimonials";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a4c0fd67824b652684904d1/822cf18f1_generated_fb0371bc.png";
const ABOUT_IMG = "https://media.base44.com/images/public/6a4c0fd67824b652684904d1/4e0d28fc0_generated_c31faf3c.png";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-white/70 z-10" />
          <img
            src={HERO_IMG}
            alt="Modern professional environment"
            className="w-full h-full object-cover opacity-40"
          />
        </motion.div>

        <motion.div
          className="relative z-20 text-center max-w-5xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          <FadeIn delay={0.2}>
            <p className="text-xs tracking-[0.35em] uppercase text-[#555] mb-8 font-body">
              {SITE_CONFIG.tagline}
            </p>
          </FadeIn>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight leading-[0.95] text-[#111]">
            {SITE_CONFIG.heroHeadline.split("\n").map((line, i) => (
              <span key={i} className="block">
                <RevealText delay={0.3 + i * 0.15} splitWords>
                  {line}
                </RevealText>
              </span>
            ))}
          </h1>

          <FadeIn delay={0.8}>
            <p className="mt-8 text-lg md:text-xl text-[#555] max-w-xl mx-auto leading-relaxed font-body font-light">
              {SITE_CONFIG.heroSubheadline}
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <MagneticButton to="/services" variant="primary">
                Explore Services <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton to="/contact" variant="text">
                Get in touch
              </MagneticButton>
            </div>
          </FadeIn>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#999]">Scroll</span>
          <motion.div
            className="w-[1px] h-12 bg-[#ddd] relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 w-full bg-[#0A2540]"
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-[#F7F7F7]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {SITE_CONFIG.stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#111]">
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

      {/* About Preview */}
      <section className="py-24 md:py-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ImageReveal
              src={ABOUT_IMG}
              alt="Professional portrait"
              className="relative aspect-[3/4] rounded-sm"
              parallax
            />
            <div>
              <FadeIn>
                <p className="text-xs tracking-[0.3em] uppercase text-[#999] mb-6">
                  Who we are
                </p>
              </FadeIn>
              <RevealText>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#111]">
                  {SITE_CONFIG.about.headline.split("\n").map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h2>
              </RevealText>
              <FadeIn delay={0.3}>
                <p className="mt-8 text-[#555] leading-relaxed text-lg font-light">
                  {SITE_CONFIG.about.description}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="mt-10">
                  <MagneticButton to="/about" variant="text">
                    Learn our story <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <HomeServices />

      {/* Testimonials */}
      <HomeTestimonials />
    </div>
  );
}

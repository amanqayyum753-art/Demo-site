import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/siteConfig";
import FadeIn from "@/components/luxury/FadeIn";
import RevealText from "@/components/luxury/RevealText";

export default function HomeTestimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SITE_CONFIG.testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-[#999] mb-16 text-center">
            What our clients say
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto text-center min-h-[280px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.3] text-[#111] italic">
                "{SITE_CONFIG.testimonials[current].quote}"
              </blockquote>
              <div className="mt-10">
                <p className="text-sm font-medium text-[#111] tracking-wide">
                  {SITE_CONFIG.testimonials[current].author}
                </p>
                <p className="text-xs text-[#999] mt-1 tracking-wide">
                  {SITE_CONFIG.testimonials[current].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center gap-3 mt-12">
            {SITE_CONFIG.testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-8 h-[2px] transition-all duration-500 ${
                  i === current ? "bg-[#0A2540]" : "bg-[#ddd]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

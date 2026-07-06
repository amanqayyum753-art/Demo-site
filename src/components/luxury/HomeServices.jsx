import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/siteConfig";
import FadeIn from "@/components/luxury/FadeIn";
import RevealText from "@/components/luxury/RevealText";
import MagneticButton from "@/components/luxury/MagneticButton";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeServices() {
  return (
    <section className="py-24 md:py-40 bg-[#F7F7F7]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20">
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-[#999] mb-6">
                What we do
              </p>
            </FadeIn>
            <RevealText>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#111]">
                Our Areas of
                <br />
                <span className="italic">Expertise</span>
              </h2>
            </RevealText>
          </div>
          <FadeIn delay={0.3} className="mt-8 md:mt-0">
            <MagneticButton to="/services" variant="text">
              View all services <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#e5e5e5]">
          {SITE_CONFIG.services.slice(0, 3).map((service, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link to="/services">
                <motion.div
                  className="bg-white p-10 md:p-12 group cursor-pointer h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-8">
                    <span className="text-xs tracking-[0.2em] text-[#999] font-mono">
                      0{i + 1}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-[#ccc] group-hover:text-[#0A2540] transition-colors duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 transform" />
                  </div>
                  <h3 className="font-display text-2xl tracking-tight text-[#111] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#555] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

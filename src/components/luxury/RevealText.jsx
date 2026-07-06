import React from "react";
import { motion } from "framer-motion";

export default function RevealText({
  children,
  className = "",
  delay = 0,
  as = "div",
  splitWords = false,
}) {
  if (splitWords && typeof children === "string") {
    const words = children.split(" ");
    return (
      <span className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}>
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    );
  }

  const Tag = motion[as] || motion.div;

  return (
    <div className="overflow-hidden">
      <Tag
        className={className}
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </Tag>
    </div>
  );
}

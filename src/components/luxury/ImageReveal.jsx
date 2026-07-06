import React from "react";
import { motion } from "framer-motion";

export default function ImageReveal({
  src,
  alt,
  className = "",
  delay = 0,
  parallax = false,
}) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="absolute inset-0 bg-white z-10"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.9,
          delay: delay + 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{ transformOrigin: "right" }}
      />
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
        whileHover={parallax ? { scale: 1.05 } : undefined}
      />
    </motion.div>
  );
}

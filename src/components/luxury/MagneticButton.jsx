import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function MagneticButton({
  children,
  to,
  onClick,
  className = "",
  variant = "primary",
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.15;
    const y = (clientY - (top + height / 2)) * 0.15;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const baseStyles =
    variant === "primary"
      ? "bg-[#0A2540] text-white hover:bg-[#1a3a5c]"
      : variant === "outline"
      ? "border border-[#0A2540] text-[#0A2540] hover:bg-[#0A2540] hover:text-white"
      : "text-[#0A2540] growing-underline";

  const content = (
    <motion.span
      ref={ref}
      className={`inline-flex items-center gap-2 px-8 py-4 text-sm tracking-[0.1em] uppercase font-body font-medium transition-colors duration-300 ${baseStyles} ${className}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.span>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return (
    <button onClick={onClick} type={onClick ? "button" : "submit"}>
      {content}
    </button>
  );
}

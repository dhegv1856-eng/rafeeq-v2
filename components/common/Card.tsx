"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
};

export default function Card({
  children,
  className = "",
  hover = true,
  onClick,
}: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.01,
            }
          : undefined
      }
      transition={{
        duration: 0.25,
      }}
      onClick={onClick}
      className={`
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        ${hover ? "hover:shadow-xl" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
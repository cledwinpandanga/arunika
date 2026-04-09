import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TransitionWrapperProps {
  children: React.ReactNode;
  animateFrom: "left" | "right" | "top" | "bottom";
  duration: number;
  className?: string;
}

export default function TransitionWrapper({
  children,
  animateFrom,
  className,
  duration = 1.5,
}: TransitionWrapperProps) {
  let initial = {};
  let whileInView = {};

  if (animateFrom === "left") {
    initial = { opacity: 0, x: -50, y: 0 };
    whileInView = { opacity: 1, x: 0, y: 0 };
  } else if (animateFrom === "right") {
    initial = { opacity: 0, x: 50, y: 0 };
    whileInView = { opacity: 1, x: 0, y: 0 };
  } else if (animateFrom === "bottom") {
    initial = { opacity: 0, x: 0, y: 0 };
    whileInView = { opacity: 1, x: 0, y: -50 };
  } else if (animateFrom === "top") {
    initial = { opacity: 0, x: 0, y: -50 };
    whileInView = { opacity: 1, x: 0, y: 0 };
  }

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={{ duration, ease: "easeOut" }}
      className={cn(`${className}`)}
    >
      {children}
    </motion.div>
  );
}

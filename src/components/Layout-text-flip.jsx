"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utlis";

export const LayoutTextFlip = ({
  text = "",
  words = ["Landing Pages", "Component Blocks"],
  duration = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

return (
    <>
        <motion.span
            layoutId="subtext"
            className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl">
            {text}
        </motion.span>
        <motion.span>
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={currentIndex}
                    initial={{ y: -40, filter: "blur(2px)" }}
                    animate={{
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    exit={{ y: 50, filter: "blur(2px)", opacity: 0 }}
                    transition={{
                        duration: 0.3,
                    }}
                    className={cn("inline-block whitespace-nowrap")}>
                    {words[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </motion.span>
    </>
);
};

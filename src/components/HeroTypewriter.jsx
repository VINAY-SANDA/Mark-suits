import React, { useState, useEffect } from "react";

export default function HeroTypewriter({
  words = [
    "Dreamer who codes his destiny",
    "Traveler collecting stories",
    "Reader lost in worlds",
    "Movie lover chasing emotions",
    "Creator building work that matters",
  ],
  typingSpeed = 100,
  deletingSpeed = 50,
  pause = 1000,
  loop = true,
}) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[index % words.length];

    if (!isDeleting) {
      // typing
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentWord.length) {
          // pause then start deleting
          timer = setTimeout(() => setIsDeleting(true), pause);
        }
      }, typingSpeed);
    } else {
      // deleting
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => {
            const next = prev + 1;
            if (!loop && next >= words.length) return prev; // stop at last
            return next;
          });
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, index]);

  return (
    <section style={{ minHeight: "60vh" }} className="flex items-center justify-center">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)", margin: 0 }}>
          <span style={{ opacity: 0.85 }}>I am Vinay Sanda — </span>
          <span style={{ color: "#3b82f6", fontWeight: 700 }}> {displayText}</span>
          <span style={{ display: "inline-block", width: "0.6ch", marginLeft: 6, animation: "blink 1s step-end infinite" }}>|</span>
        </h1>

        <style>{`
          @keyframes blink { 50% { opacity: 0 } }
        `}</style>
      </div>
    </section>
  );
}



/**
 * HeroTypewriter.jsx
 * Plain JSX React component (works in CRA / Vite / Next.js client-side)
 * Props:
 * - words: array of strings to cycle through
 * - typingSpeed: ms per character when typing
 * - deletingSpeed: ms per character when deleting
 * - pause: ms to wait after a word finishes before deleting
 * - loop: whether to loop words (true/false)
 */
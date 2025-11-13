// TypingEffect.jsx
// React (JavaScript) component + Tailwind CSS styles.
// Usage:
// 1. Ensure Tailwind CSS is configured in your React app (create-react-app or Vite).
// 2. Copy this file to `src/components/TypingEffect.jsx`.
// 3. Use: <TypingEffect words={["Software Developer","Freelancer","Innovator"]} />

import React, { useEffect, useState, useRef } from 'react';

export default function TypingEffect({
  words = ["Software Developer", "Freelancer", "Innovator"],
  typingSpeed = 90, // ms per char while typing
  deletingSpeed = 45, // ms per char while deleting
  pauseAfterType = 1200, // pause after full word typed
  pauseAfterDelete = 300, // pause after fully deleted before next word
  className = 'text-2xl md:text-3xl font-semibold text-gray-900',
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false };
  }, []);

  useEffect(() => {
    if (!mounted.current) return;

    const currentWord = words[wordIndex % words.length];

    let timeout = null;

    if (!isDeleting && text === currentWord) {
      // finished typing; wait then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterType);
    } else if (isDeleting && text === '') {
      // finished deleting; move to next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex(prev => prev + 1);
      }, pauseAfterDelete);
    } else {
      // continue typing or deleting
      const nextText = isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1);

      const delay = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => setText(nextText), delay);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete]);

  return (
    <div className="inline-flex items-center" aria-label="typing roles">
      <h2 className={`${className} flex items-center`}> 
        <span className="mr-3 text-gray-700">I am</span>
        <span className="text-indigo-600">{text}</span>
        <span className="ml-2 w-0.5 h-6 bg-current animate-[blink_1s_steps(2,end)_infinite]" aria-hidden="true" />
      </h2>

      {/* Tailwind keyframes for blinking caret — include in your global styles (tailwind config) if you prefer
          Or keep the inline style below to ensure it works without extra config */}
      <style>{`
        @keyframes blink { 0% { opacity: 1 } 50% { opacity: 0 } 100% { opacity: 1 } }
        .animate-[blink_1s_steps(2,end)_infinite] { animation: blink 1s steps(2,end) infinite; }
      `}</style>
    </div>
  );
}

/*
Quick notes:
- This is plain JavaScript React (no TypeScript).
- Tailwind classes are used for typography and spacing. Adjust `className` prop to match your site's hero styles.
- If you want the animation to pause on hover, wrap the component and toggle state onMouseEnter/onMouseLeave.
- For SSR (Next.js) behavior, ensure the component mounts before running the typing logic (this implementation is client-only).
*/

import React, { useEffect, useState, useRef } from "react";

const Preloader = ({
  words = ["Hello", "नमस्ते", "Hola", "Bonjour"],
  wordDuration = 800, // duration to show each word
  firstWordDuration = 500, // duration to show first word (Hello)
  fadeDuration = 300, // fade animation duration (ms)
  onFinish = null,
  className = "h-screen w-full flex items-center justify-center bg-white",
  textClass = "text-5xl font-semibold transition-all",
  showAll = false,
}) => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    console.log('Preloader mounted');
    
    const showNextWord = (currentIndex) => {
      if (currentIndex >= words.length) {
        // All words shown, finish the preloader
        console.log('All greetings shown, calling onFinish');
        if (typeof onFinish === "function") {
          onFinish();
        }
        return;
      }

      console.log(`Showing word ${currentIndex}: ${words[currentIndex]}`);
      
      // Use firstWordDuration for first word, wordDuration for rest
      const duration = currentIndex === 0 ? firstWordDuration : wordDuration;
      
      // After duration, fade out and show next word
      timeoutRef.current = setTimeout(() => {
        setFade(false);
        
        // Wait for fade out, then change word and fade in
        setTimeout(() => {
          const nextIndex = currentIndex + 1;
          if (nextIndex < words.length) {
            setIndex(nextIndex);
            setFade(true);
            showNextWord(nextIndex);
          } else {
            // Last word done, call onFinish
            console.log('Last greeting done, calling onFinish');
            if (typeof onFinish === "function") {
              onFinish();
            }
          }
        }, fadeDuration);
      }, duration);
    };

    // Start showing words from index 0
    showNextWord(0);

    return () => {
      console.log('Preloader unmounting');
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showAll) {
    return (
      <div className={className + ' flex-col gap-4'}>
        <div className="flex flex-col items-center">
          {words.map((w, i) => (
            <div key={i} className={`${textClass} text-2xl md:text-4xl opacity-90`}>
              {w}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <h1
        className={`${textClass} ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ transitionDuration: `${fadeDuration}ms` }}
      >
        {words[index]}
      </h1>
    </div>
  );
};

export default Preloader;

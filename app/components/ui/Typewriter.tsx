"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  delay?: number;
  deleteSpeed?: number;
  typeSpeed?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  delay = 2000,
  deleteSpeed = 50,
  typeSpeed = 100,
  className = "",
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay, deleteSpeed, typeSpeed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

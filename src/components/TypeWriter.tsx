import { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  className?: string;
}

const TypeWriter = ({ words, className = "" }: TypeWriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const currentWordChars = Array.from(currentWord);
    const currentTextChars = Array.from(currentText);

    const isFullyTyped = currentText === currentWord;
    const isFullyDeleted = currentText === "";

    let typingSpeed = isDeleting ? 50 : 100;
    if (isFullyTyped && !isDeleting) {
      typingSpeed = 2000;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (!isFullyTyped) {
          setCurrentText(currentWordChars.slice(0, currentTextChars.length + 1).join(""));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (!isFullyDeleted) {
          setCurrentText(currentWordChars.slice(0, currentTextChars.length - 1).join(""));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-cursor-blink text-primary">|</span>
    </span>
  );
};

export default TypeWriter;

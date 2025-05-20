
import { useState, useEffect, useRef } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export default function TypingAnimation({ 
  text, 
  speed = 30, 
  onComplete 
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const isFirstRender = useRef(true);
  
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    // Reset when text changes
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);
  
  return (
    <div className="whitespace-pre-wrap inline-flex items-center">
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-2 h-4 bg-synapse-500 dark:bg-synapse-400 ml-0.5 rtl:mr-0.5 rtl:ml-0 animate-pulse"></span>
      )}
    </div>
  );
}

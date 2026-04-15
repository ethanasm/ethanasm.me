"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export default function TypingText({
  text,
  delay = 0,
  speed = 80,
  className,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [started, displayed, text, speed]);

  return (
    <p className={className}>
      {displayed}
      <span className="animate-[blink_1s_step-end_infinite]">▌</span>
    </p>
  );
}

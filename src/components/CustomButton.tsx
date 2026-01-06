"use client";

import { useState, MouseEvent, TouchEvent, ReactNode } from "react";
import styles from "./CustomButton.module.css";

type CustomButtonProps = {
  children: ReactNode;
  color?: "yellow" | "red" | "blue"; // only used if no className
  alertText?: string;
  className?: string; // custom Tailwind styles
  onClick?: () => void;
};

export default function CustomButton({
  children,
  color = "blue",
  alertText,
  className = "",
  onClick,
}: CustomButtonProps) {
  const [active, setActive] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (alertText) alert(alertText);
    if (onClick) onClick();
  };

  // If a custom className is provided, ignore the module color
  const colorClass = className ? "" : styles[color];

  return (
    <button
      onClick={handleClick}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
      className={`${styles.button} ${colorClass} ${active ? styles.active : ""} ${className}`}
    >
      {children}
    </button>
  );
}

"use client";
import { ReactNode } from "react";

type Props = {
  id: string;
  className?: string; 
  children: ReactNode;
};

export default function PageLayout({ id, className = "", children }: Props) {
  return (
    <section
      id={id}
      className={`min-h-screen w-full bg-white snap-start ${className}`}
    >
      <div className="max-w-9xl mx-auto h-full">{children}</div>
    </section>
  );
}

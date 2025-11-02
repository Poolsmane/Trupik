"use client";

import { useEffect } from "react";

export default function ScrollAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".content-block").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}

import { useEffect } from "react";

export function useScrollAnimation() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]"),
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("opacity-100", "translate-y-0");
            el.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => {
      el.classList.add(
        "opacity-0",
        "translate-y-6",
        "transition-all",
        "duration-700",
        "ease-out",
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

import React, { useEffect, useRef } from "react";

const REVIEWS = [
  { name: "Ayesha Khan", role: "Product Manager", text: "Waseem delivered a fantastic dashboard that helped our team make data-driven decisions. Highly recommend!", rating: 5 },
  { name: "Bilal Ahmed", role: "CTO", text: "Fast, communicative and delivered exactly what we needed. Clean code and great attention to detail.", rating: 5 },
  { name: "Sara Ali", role: "Data Scientist", text: "Great at turning messy data into actionable insights. Excellent ML skills.", rating: 5 },
  { name: "Hamza Raza", role: "Founder", text: "Delivered an MVP quickly and iterated based on feedback. Very professional.", rating: 4 },
  { name: "Zainab Noor", role: "Lead Engineer", text: "Solid frontend engineering and thoughtful UX suggestions.", rating: 5 },
  { name: "Omar Malik", role: "Researcher", text: "Impressive ML prototypes and reproducible pipelines.", rating: 4 },
  { name: "Mona Farooq", role: "Analyst", text: "Excellent visualizations and clear documentation.", rating: 5 },
  { name: "Faisal Khan", role: "CEO", text: "Reliable and delivered on time. Would hire again.", rating: 5 },
  { name: "Rizwan Shah", role: "Engineer", text: "Good communicator and quick to resolve issues.", rating: 4 },
  { name: "Nadia Iqbal", role: "Designer", text: "Helped polish the UI and made the product more appealing.", rating: 5 },
];

export default function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Reveal animation using IntersectionObserver for each review card
    const root = containerRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>('.review-card'));
    if (!cards.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('opacity-100', 'translate-y-0');
            el.classList.remove('opacity-0', 'translate-y-6');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((c) => {
      c.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out');
      obs.observe(c);
    });

    return () => obs.disconnect();
  }, []);

  // Split reviews into two rows of 5
  const firstRow = REVIEWS.slice(0, 5);
  const secondRow = REVIEWS.slice(5, 10);

  return (
    <section data-animate className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-border bg-card/60 p-8">
          <h2 className="font-serif text-2xl text-primary text-center">What people say</h2>
          <p className="mt-2 text-center text-muted-foreground">Real reviews from clients and collaborators</p>

          <div ref={containerRef} className="mt-8 grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {firstRow.map((r, i) => (
                <article key={i} className="review-card rounded-xl border border-border bg-background/5 p-4 shadow">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">{r.name.split(" ")[0][0]}</div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role}</div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">{r.text}</p>

                  <div className="mt-4 flex items-center gap-1" aria-hidden>
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg key={si} className={`h-4 w-4 ${si < r.rating ? 'text-primary' : 'text-muted-foreground/60'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.636 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {secondRow.map((r, i) => (
                <article key={i + 5} className="review-card rounded-xl border border-border bg-background/5 p-4 shadow">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">{r.name.split(" ")[0][0]}</div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role}</div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">{r.text}</p>

                  <div className="mt-4 flex items-center gap-1" aria-hidden>
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg key={si} className={`h-4 w-4 ${si < r.rating ? 'text-primary' : 'text-muted-foreground/60'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.636 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

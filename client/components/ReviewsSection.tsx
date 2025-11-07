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
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const hoverCounter = useRef(0);
  const SPEED_PX_PER_SEC = 40; // scrolling speed

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Force desktop-like continuous scrolling by duplicating content in DOM via rendering items twice
    let last = performance.now();

    function step(now: number) {
      const dt = now - last;
      last = now;
      if (!pausedRef.current) {
        // move scroll
        el.scrollLeft += (SPEED_PX_PER_SEC * dt) / 1000;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          // loop back seamlessly
          el.scrollLeft -= half;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function pause() {
    hoverCounter.current += 1;
    pausedRef.current = true;
  }
  function resume() {
    hoverCounter.current = Math.max(0, hoverCounter.current - 1);
    if (hoverCounter.current === 0) pausedRef.current = false;
  }

  // duplicate items for seamless scroll
  const items = [...REVIEWS, ...REVIEWS];

  return (
    <section className="w-full py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="rounded-2xl border border-border bg-card/60 p-8">
          <h2 className="font-serif text-2xl text-primary text-center">What people say — Project reviews</h2>
          <p className="mt-2 text-center text-muted-foreground">Feedback specific to delivered projects and outcomes</p>

          <div
            ref={scrollerRef}
            className="mt-8 flex gap-6 overflow-hidden no-scrollbar"
            aria-label="Project reviews carousel"
          >
            {items.map((r, i) => (
              <article
                key={i}
                onMouseEnter={pause}
                onMouseLeave={resume}
                onFocus={pause}
                onBlur={resume}
                className="review-card min-w-[300px] max-w-[320px] rounded-xl border border-border bg-card p-5 shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-foreground">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                  <div className="flex items-center gap-1" aria-hidden>
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg key={si} className={`h-4 w-4 ${si < r.rating ? 'text-primary' : 'text-muted-foreground/50'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.375 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.636 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-sm text-muted-foreground">{r.text}</p>

              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

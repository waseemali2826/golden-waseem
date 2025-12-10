import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const certs = [
  { title: "Human Resource Management", subtitle: "HR Management", img: "/HR.webp" },
  { title: "Digital Marketing Specialist", subtitle: "Digital Marketing", img: "/DM.webp" },
  { title: "Course Completion Certificate", subtitle: "Online Course", img: "/Gao-completion.webp" },
  { title: "Master ChatGPT", subtitle: "AI / NLP", img: "/gpt.webp" },
  { title: "Basic Python Certificate", subtitle: "Python", img: "/python.webp" },
  { title: "Digital Marketing Certificate", subtitle: "Digital Marketing", img: "/marketing.webp" },
  { title: "Fortune Certificate", subtitle: "Professional Training", img: "/fortune.webp" },
  { title: "Mastering Microsoft PowerBI Certificate", subtitle: "Power BI", img: "/power.webp" },
  { title: "MEAL Essentials Certificate", subtitle: "Monitoring & Evaluation", img: "/Meal Essential.webp" },
  { title: "Create Your Own ChatGPT with PDF", subtitle: "Custom LLM App", img: "/creategpt.webp" },
  { title: "Data Analytics Essentials", subtitle: "Data Analytics", img: "/DAE.webp" },
];

export default function Certificates() {
  useScrollAnimation();

  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="container mx-auto py-16">
      <header className="mb-8 text-center">
        <h1 className="font-serif text-3xl text-white">Certificates & Achievements</h1>
        <p className="mt-2 text-muted-foreground">Verified certificates and course achievements. Click the image to preview.</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {certs.map((c, idx) => (
          <article key={c.title} className="rounded-2xl border border-border bg-card/60 overflow-hidden shadow hover:shadow-lg transition-shadow flex flex-col">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setActive(idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActive(idx);
              }}
              className="w-full bg-gradient-to-br from-primary/10 to-accent/5 flex cursor-pointer items-center justify-center"
            >
              {/* Full-width certificate image inside card */}
              <img src={c.img} alt={c.title} className="w-full h-56 md:h-64 object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.subtitle}</p>
              <p className="mt-6 text-xs text-muted-foreground">Click the image to view a larger preview.</p>
            </div>
          </article>
        ))}
      </div>

      {active !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onKeyDown={(e) => { if (e.key === 'Escape') setActive(null); }} tabIndex={-1}>
          <div className="absolute inset-0 bg-black/90" onClick={() => setActive(null)} />
          <div className="z-10 w-full h-full flex items-center justify-center p-4">
            <button className="absolute top-6 right-6 z-20 rounded-full bg-black/50 p-2 text-white" onClick={() => setActive(null)} aria-label="Close preview">✕</button>
            <img src={certs[active].img} alt={certs[active].title} className="max-h-[95vh] max-w-[95vw] object-contain shadow-lg z-10" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

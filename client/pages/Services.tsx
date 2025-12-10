import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    title: "AI & Machine Learning",
    img: "https://cdn.builder.io/api/v1/image/assets%2Fe690a34fb9644577a9814872d86f9388%2F96ba2c34fbec4c2b8a3c1c1172f3302c?format=webp&width=800",
    desc: "Custom ML models, neural networks, and AI-powered solutions for business automation, prediction, and NLP tasks.",
  },
  {
    title: "Web Development",
    img: "https://cdn.builder.io/api/v1/image/assets%2Fe690a34fb9644577a9814872d86f9388%2Faa59d9f3973646cbbd2daacf0400a151?format=webp&width=1200",
    desc: "Modern, responsive websites and SPAs using React, TypeScript, and best frontend practices for accessibility and performance.",
  },
  {
    title: "Python Development",
    img: "https://cdn.builder.io/api/v1/image/assets%2Fe690a34fb9644577a9814872d86f9388%2Ff21141312ea44abbb53f1ba4e7b010a2?format=webp&width=1200",
    desc: "Backend development, APIs, data processing, and automation using Python, FastAPI, Flask and scripting for integrations.",
  },
  {
    title: "Data Visualization",
    img: "https://cdn.builder.io/api/v1/image/assets%2Fe690a34fb9644577a9814872d86f9388%2F01768bf14fd54c87b94cfb62027755ea?format=webp&width=1200",
    desc: "Interactive dashboards and insightful visualizations using charting libraries and dashboard frameworks for BI needs.",
  },
  {
    title: "Data Science",
    img: "https://cdn.builder.io/api/v1/image/assets%2Fe690a34fb9644577a9814872d86f9388%2Fd1dbace29b2c4e7a95a588ed4257a04c?format=webp&width=1200",
    desc: "End-to-end data science projects: data collection, preprocessing, modelling, evaluation, and deployment.",
  },
  {
    title: "Database Management",
    img: "https://cdn.builder.io/api/v1/image/assets%2Fe690a34fb9644577a9814872d86f9388%2Fbae93c26855e4f26a0eb97cc8a036514?format=webp&width=1200",
    desc: "Efficient database design, indexing, migrations, and performance tuning for PostgreSQL, MongoDB, and SQL Server.",
  },
];

export default function Services() {
  useScrollAnimation();

  return (
    <div className="container mx-auto py-16">
      <header className="mb-8 text-center" data-animate>
        <h1 className="font-serif text-3xl text-primary">Services</h1>
        <p className="mt-2 text-muted-foreground">
          Comprehensive services across AI, web, and data to help you ship
          reliable products.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="rounded-2xl border border-border bg-card/60 overflow-hidden shadow hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="h-48 w-full bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground flex-1">
                {s.desc}
              </p>
              <div className="mt-6">
                <Link to="/contact">
                  <Button variant="outline" size="sm">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground">
          Need something custom?{" "}
          <Link to="/contact" className="text-primary underline">
            Contact me
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

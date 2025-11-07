import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function StatCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5 shadow h-full flex flex-col">
      <h3 className="font-semibold text-primary">{title}</h3>
      <div className="mt-3 text-sm text-muted-foreground flex-1">{children}</div>
    </div>
  );
}

export default function Index() {
  const heroImages = [
    "1st-hero.webp",
    "2nd-hero.webp",
    "3rd-hero.webp",
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((s) => (s + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // Scroll animations: observe elements with [data-animate] and reveal them when they enter the viewport.
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));
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
      { threshold: 0.15 }
    );

    elements.forEach((el) => {
      // set initial state classes (these classes appear in source so Tailwind will include them)
      el.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-700", "ease-out");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero - Full Page */}
      <section data-animate className="relative h-screen w-full overflow-hidden flex items-center">
        {/* Background slider */}
        <div
          aria-hidden
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `linear-gradient(rgba(6,8,11,0.5), rgba(6,8,11,0.7)), url('${heroImages[active]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "saturate(110%)",
          }}
        />

        <div className="relative container mx-auto px-6 z-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="text-center md:text-left">
              <p className="text-sm tracking-widest text-primary/80 mb-2">PORTFOLIO</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-foreground mb-4 hero-float">
                Waseem Ali
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                <span className="font-semibold">BS Data Science Student · AI/ML Engineer</span>
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Passionate about turning data into actionable insights, building intelligent AI solutions, and developing modern web applications.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Link to="/projects">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                    View Projects
                  </Button>
                </Link>
                <a href="#contact">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                    Contact Me
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-12 md:mt-0 flex justify-center">
              <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe690a34fb9644577a9814872d86f9388%2F97fd4de9a2aa476cba4e151aec9f3b32?format=webp&width=800" 
                  alt="Waseem Ali" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="animate-bounce flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-2">Scroll Down</p>
            <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-muted-foreground/70 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* dots */}
        <div className="absolute bottom-8 right-8 hidden md:flex flex-col gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-10" : "bg-primary/30 w-6 hover:bg-primary/60"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Professional Summary */}
      <section data-animate className="container mx-auto grid gap-6 py-12 md:grid-cols-4 items-stretch">
        <div className="md:col-span-4">
          <h2 className="font-serif text-2xl text-primary">Professional Summary</h2>
        </div>
        <StatCard title="Specializations">
          MERN Stack Developer — MongoDB, Express, React, and Node.js. Building full‑stack JavaScript applications with RESTful APIs and modern frontend architectures.
        </StatCard>
        <StatCard title="Frontend">
          React, TypeScript, TailwindCSS, component-driven UIs.
        </StatCard>
        <StatCard title="Databases">
          SQL Server, PostgreSQL, schema design & performance tuning.
        </StatCard>
        <StatCard title="Availability">
          Remote-first, open to contract or full‑time roles.
        </StatCard>
      </section>

      {/* Technical Expertise */}
      <section data-animate className="bg-muted/10 py-12">
        <div className="container mx-auto">
          <h2 className="font-serif text-2xl text-primary">Technical Expertise</h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-stretch">
            <div className="rounded-xl border border-border bg-card/60 p-6 flex flex-col">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 6h18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary">Backend Development</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-1">Node.js, Express, ASP.NET Core, microservices, authentication, and scalable server architectures.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6 flex flex-col">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 20v-16" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 12h12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary">Frontend Engineering</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-1">React, TypeScript, component-driven UIs, responsive design, and modern state management.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6 flex flex-col">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19.4 15a7 7 0 10-14.8 0" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary">Database Management</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-1">Design, indexing, migrations, and performance tuning for PostgreSQL, SQL Server and MongoDB.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6 flex flex-col">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="4" y="4" width="16" height="6" rx="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary">API Integration</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-1">RESTful APIs, OpenAPI/Swagger, GraphQL basics, third-party integrations and secure data exchange.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6 flex flex-col">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary">Version Control</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-1">Git workflows, branching strategies, CI integrations, code review practices, and release management.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6 flex flex-col">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 3v18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary">Performance Optimization</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-1">Profiling, caching, query optimization, load testing and front-end performance best practices.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section data-animate className="py-12 bg-center bg-cover bg-no-repeat" style={{
        backgroundImage: `linear-gradient(rgba(6,8,11,0.5), rgba(6,8,11,0.6)), url('https://cdn.builder.io/api/v1/image/assets%2F121404fcb1684e55a4fdbb955d186e82%2F900671041bde4f048b3f4f066e2d57f9?format=webp&width=2000')`,
      }}>
        <div className="container mx-auto grid gap-6 md:grid-cols-2 items-stretch text-white">
        <div>
          <h2 className="font-serif text-2xl text-primary">Experience</h2>
          <div className="mt-6 grid gap-6">
            <article className="rounded-xl border border-border bg-card/60 p-6 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 6h18" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Freelance MERN Stack Developer</h3>
                    <p className="text-sm text-muted-foreground">2022 — Present</p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Remote</div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-1">Delivered end-to-end web applications and APIs for small businesses. Responsibilities included backend API design, frontend implementation with React, and integrating ML prototypes into production-ready services.</p>
            </article>

            <article className="rounded-xl border border-border bg-card/60 p-6 h-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2v6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Python Developer — Intern</h3>
                    <p className="text-sm text-muted-foreground">2021 — 2022</p>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">Data & Research</div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-1">Worked on data pipelines, cleaning and preprocessing datasets, and building prototype models for classification tasks. Assisted in model evaluation and generating visual reports for stakeholders.</p>
            </article>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl text-primary">Education</h2>
          <div className="mt-6 grid gap-6">
            <div className="rounded-xl border border-border bg-card/60 p-6 h-full flex flex-col">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary">BSc — Data Science</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">NFC Institute of Engineering &amp; Fertilizer Research (2023 — 2027)</p>
              <p className="mt-3 text-sm text-muted-foreground flex-1">Focused on statistical modeling, machine learning, and data engineering. Relevant coursework includes Machine Learning, Data Mining, and Database Systems.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-6 h-full flex flex-col">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 3v18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary">MERN Stack Developer</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Freelance / Personal Projects</p>
              <p className="mt-3 text-sm text-muted-foreground flex-1">Built full‑stack JavaScript applications using MongoDB, Express, React, and Node.js. Implemented RESTful APIs, responsive UIs, and CI/CD pipelines for production deployments.</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Skills & Languages */}
      <section data-animate className="bg-muted/10 py-12">
        <div className="container mx-auto grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-primary">Top Technical Skills</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>1. Business Analysis</li>
              <li>2. Financial Analysis</li>
              <li>3. .NET Framework</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-primary">Languages</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Urdu — Native</li>
              <li>English — Professional working</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tools / Add to Portfolio section */}
      <section data-animate className="container mx-auto py-12">
        <div className="rounded-2xl border border-border bg-card/60 p-8">
          <h2 className="font-serif text-2xl text-primary">Tools</h2>
          <p className="mt-2 text-sm text-muted-foreground">A quick overview of the tooling and utilities used across projects.</p>

          <div className="mt-6 grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-7 items-center justify-items-center">
            {[
              { label: 'Automation', icon: (<svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 18v4" strokeLinecap="round" strokeLinejoin="round"/><path d="M4.93 4.93l2.83 2.83" strokeLinecap="round" strokeLinejoin="round"/><path d="M16.24 16.24l2.83 2.83" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
              { label: 'API', icon: (<svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="7" width="18" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 11l3 1-3 1" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 11l-3 1 3 1" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
              { label: 'DevOps', icon: (<svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12h6" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 12h6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3v6" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15v6" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
              { label: 'Versioning', icon: (<svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
              { label: 'Database', icon: (<svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="6" rx="8" ry="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
              { label: 'Management', icon: (<svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 100 8 4 4 0 000-8z" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 22v-2a4 4 0 014-4h4a4 4 0 014 4v2" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
              { label: 'Monitoring', icon: (<svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12s2-7 10-7 10 7 10 7-2 7-10 7S2 12 2 12z" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2">
                <div className="rounded-xl bg-card p-3 shadow-md border border-border">
                  {t.icon}
                </div>
                <div className="text-xs text-muted-foreground">{t.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link to="/projects"><Button>Add to my portfolio</Button></Link>
          </div>
        </div>
      </section>

      {/* Contact teaser */}
      <section id="contact" data-animate className="container mx-auto py-16">
        <div className="rounded-2xl border border-border bg-card/60 p-10 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold">Let’s build something great</h2>
          <p className="mt-2 text-muted-foreground">Ready for your next project — web apps, APIs, dashboards.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/contact"><Button>Contact</Button></Link>
            <Link to="/services"><Button variant="outline">Services</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

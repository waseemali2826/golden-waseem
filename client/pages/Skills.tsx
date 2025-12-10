const skillsData = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", pct: 90 },
      { name: "JavaScript", pct: 75 },
      { name: "HTML/CSS", pct: 85 },
      { name: "C++", pct: 60 },
      { name: "Java", pct: 50 },
      { name: "PHP", pct: 40 },
    ],
  },
  {
    title: "Data Science & Analysis",
    items: [
      { name: "Pandas", pct: 85 },
      { name: "NumPy", pct: 80 },
      { name: "Matplotlib", pct: 85 },
      { name: "Data Visualization", pct: 80 },
      { name: "Statistical Analysis", pct: 75 },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "Bootstrap", pct: 85 },
      { name: "Responsive Design", pct: 80 },
      { name: "Frontend Development", pct: 85 },
      { name: "MySQL", pct: 70 },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      { name: "Hugging Face", pct: 75 },
      { name: "FastAPI", pct: 80 },
      { name: "LLM Integration", pct: 70 },
    ],
  },
];

function SkillRow({ name, pct }: { name: string; pct: number }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div>{name}</div>
        <div className="ml-4 text-xs text-primary font-medium">{pct}%</div>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-muted/40">
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
          className="h-2 rounded-full bg-primary"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    q: "How do you measure your skill proficiency?",
    a: "I measure proficiency by hands-on project experience, ability to implement end-to-end solutions, and familiarity with ecosystem tools (for example: Pandas/NumPy for data, scikit-learn/TensorFlow for ML, and React/Tailwind for frontends).",
  },
  {
    q: "Which tools do you use for data preprocessing and visualization?",
    a: "I typically use Pandas and NumPy for preprocessing and Matplotlib/Seaborn or Plotly/Dash for visualization depending on the interactivity required.",
  },
  {
    q: "Can you take an existing dataset and deliver cleaned, analysis-ready data?",
    a: "Yes — I perform missing-value handling, outlier detection, normalization/encoding, and provide a documented dataset with a reproducible preprocessing script.",
  },
  {
    q: "How do you validate machine learning models?",
    a: "I use cross-validation, hold-out test sets, and appropriate metrics (accuracy, precision/recall, AUC) along with confusion matrices and feature importance analysis.",
  },
  {
    q: "What is your approach to deployment and integration?",
    a: "For APIs I prefer FastAPI or Flask and containerize services with Docker. For frontends I use React; deployments can be hosted on Netlify, Vercel, or a server depending on requirements.",
  },
  {
    q: "How do you ensure code quality and reproducibility?",
    a: "I write modular code, include unit tests where applicable, provide requirements files or environment.yml, and document steps to reproduce results.",
  },
  {
    q: "Can you work on collaborative teams and share progress?",
    a: "Yes — I use Git/GitHub for version control, follow feature-branch workflows, and provide regular updates with short demos or PRs.",
  },
  {
    q: "What turnaround time can I expect for small data tasks?",
    a: "For small exploratory analyses or cleaning tasks (1–2 days) depending on dataset size and scope; I'll provide a time estimate after reviewing requirements.",
  },
];

export default function Skills() {
  return (
    <div className="container mx-auto py-16">
      <div className="rounded-2xl border border-border bg-card/60 p-8">
        <h1 className="font-serif text-3xl text-primary text-center">
          Skills & Expertise
        </h1>
        <p className="mt-3 text-center text-muted-foreground">
          A curated overview of technical strengths across programming, data
          science, web development, and AI.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {skillsData.map((group) => (
            <section
              key={group.title}
              className="rounded-xl border border-border p-6 bg-background/5"
            >
              <h3 className="text-md font-semibold text-primary mb-4">
                {group.title}
              </h3>
              {group.items.map((it) => (
                <SkillRow key={it.name} name={it.name} pct={it.pct} />
              ))}
            </section>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="/contact"
            className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Hire / Contact
          </a>
        </div>

        {/* FAQ section placed after Hire / Contact */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-primary text-center">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            Common questions about hiring, collaboration, and technical
            capabilities.
          </p>

          <div className="mt-4">
            <Accordion type="single" collapsible>
              {FAQ_ITEMS.map((f, idx) => (
                <AccordionItem key={f.q} value={`item-${idx}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-white">{f.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import React from "react";

const TOOLS = [
  {
    label: "Automation",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2v4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18v4" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M4.93 4.93l2.83 2.83"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.24 16.24l2.83 2.83"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "API",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect
          x="3"
          y="7"
          width="18"
          height="10"
          rx="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 11l3 1-3 1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11l-3 1 3 1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "DevOps",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 12h6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 12h6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3v6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Versioning",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 5v14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Database",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <ellipse
          cx="12"
          cy="6"
          rx="8"
          ry="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Management",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M12 2a4 4 0 100 8 4 4 0 000-8z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 22v-2a4 4 0 014-4h4a4 4 0 014 4v2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Monitoring",
    icon: (
      <svg
        className="h-8 w-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M2 12s2-7 10-7 10 7 10 7-2 7-10 7S2 12 2 12z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ToolsSection() {
  return (
    <section
      className="container mx-auto py-12"
      aria-labelledby="tools-heading"
    >
      <div className="rounded-2xl border border-border bg-card/60 p-8">
        <h2
          id="tools-heading"
          className="font-serif text-2xl text-primary text-center"
        >
          Tools
        </h2>
        <p className="mt-2 text-sm text-muted-foreground text-center">
          A quick overview of the tooling and utilities used across projects.
        </p>

        <div className="mt-6 grid gap-4 grid-cols-3 sm:grid-cols-4 md:grid-cols-7 items-center justify-items-center">
          {TOOLS.map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-2">
              <div className="rounded-xl bg-card p-3 shadow-md border border-border">
                {t.icon}
              </div>
              <div className="text-xs text-muted-foreground">{t.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link to="/projects">
            <Button>Add to my portfolio</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    title: "TechHubReact",
    subtitle: "A platform to discover and share developer tools, tutorials, and starter kits.",
    tech: ["TypeScript", "Node.js", "Firebase"],
    img: "/techhub.webp",
    demo: "https://techhub-fsd.netlify.app/",
    github: "https://github.com/waseemali2826",
  },
  {
    title: "Depression Prediction",
    subtitle: "ML-based app that predicts depression likelihood from questionnaire or text-derived features.",
    tech: ["Machine Learning", "Streamlit", "Pandas", "Scikit-learn"],
    img: "/depression.webp",
    demo: "https://prediction-checker.netlify.app/",
    github: "https://github.com/waseemali2826",
  },
  {
    title: "Paper Generator",
    subtitle: "Generate practice papers and question sets automatically with customizable topics and difficulty.",
    tech: ["NLP", "Streamlit", "Scikit-learn"],
    img: "/paper-generator.webp",
    demo: "https://paper-generater.netlify.app/",
    github: "https://github.com/waseemali2826",
  },
  {
    title: "NFC Data Science Portal",
    subtitle: "Platform for NFC students to access datasets, explore visualizations, and interactive tools.",
    tech: ["Python", "Node.js", "Firebase", "FireStorage"],
    img: "/nfc-data-portal.webp",
    demo: "https://nfcdatascience.netlify.app/",
    github: "https://github.com/waseemali2826/nfc-data-science-portal",
  },
  {
    title: "Tool Website Pro",
    subtitle: "Versatile online platform offering text and utility tools such as formatting and analysis.",
    tech: ["React", "API", "Python", "Node.js"],
    img: "/tool.webp",
    demo: "https://textcraftpro.netlify.app/",
    github: "https://github.com/waseemali2826/nfc-data-science-portal",
  },
  {
    title: "Text to Speech",
    subtitle: "Advanced text-to-speech conversion application with multiple voice options.",
    tech: ["AI", "Speech Synthesis", "API", "NLP"],
    img: "/Text to speech.webp",
    demo: "https://text-tspeech.netlify.app/",
    github: "https://github.com/waseemali2826",
  },
  {
    title: "Background Remover",
    subtitle: "AI-powered background removal tool using ML algorithms for image segmentation.",
    tech: ["AI", "Image Processing", "ML", "OpenCV"],
    img: "/BGR.webp",
    demo: "https://imagebgr.netlify.app/", // or null
    github: "https://github.com/waseemali2826",
  },
  {
    title: "Coffee Shop Website",
    subtitle: "Modern coffee shop website with interactive menu and online ordering.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    img: "/coffee.webp",
    demo: "https://freshcoffeewebsite.netlify.app/",
    github: "https://github.com/waseemali2826",
  },
  {
    title: "Flappy Bird Game",
    subtitle: "Classic Flappy Bird recreation with smooth animations and scoring.",
    tech: ["HTML5 Canvas", "Game Dev", "CSS3", "Animation"],
    img: "/Flappy.webp",
    demo: "https://flappy-gamerainbow.netlify.app/",
    github: "https://github.com/waseemali2826",
  },
  {
    title: "T-Shirt Store",
    subtitle: "E-commerce site for T-shirts with responsive layout and cart functionality.",
    tech: ["HTML", "Bootstrap", "CSS", "Responsive"],
    img: "/tshirt.webp",
    demo: "https://wshirt-store.netlify.app/", // no demo yet
    github: "https://github.com/waseemali2826",
  },
  {
    title: "skyzenic-live",
    subtitle: "Real-time weather application with forecasting and interactive maps.",
    tech: ["API", "React", "Weather", "Geolocation"],
    img: "/skyzenic-live.webp",
    demo: "https://skyzenic-live.netlify.app/", // no demo yet
    github: "https://github.com/waseemali2826",
  },
  {
    title: "Car Dashboard Data Visualization",
    subtitle: "Interactive dashboard for car performance data with real-time analytics.",
    tech: ["Data Viz", "Dashboard", "Analytics", "Charts"],
    img: "/streamlit.webp",
    demo: "https://cardashboard-dykfcdryenuxtgh8sudun2.streamlit.app/", // no demo yet
    github: "https://github.com/waseemali2826",
  },
  {
    title: "Chair Web Project",
    subtitle: "E-commerce website for furniture with 3D product views and shopping cart.",
    tech: ["CSS3", "JavaScript", "E-commerce", "3D"],
    img: "/chair.webp",
      demo: "https://chair-web.netlify.app/",
      github: "https://github.com/waseemali2826",
  },
  {
    title: "Coffee Bean Project",
    subtitle: "Coffee e-commerce site with product catalog and smooth design.",
    tech: ["CSS3", "JavaScript", "E-commerce", "Coffee"],
    img: "/coffee.webp",
      demo: "https://cold-coffee-bean.netlify.app/",
      github: "https://github.com/waseemali2826",
  },
];

export default function Projects() {
  useScrollAnimation();

  return (
    <div className="container mx-auto py-16">
      <header className="mb-8 text-center">
        <h1 className="font-serif text-3xl text-primary">Featured Projects</h1>
        <p className="mt-2 text-muted-foreground">Selected projects showcasing web, AI/ML, and data visualization work.</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((p) => (
          <article key={p.title} className="rounded-2xl border border-border bg-card/60 overflow-hidden shadow hover:shadow-lg transition-shadow flex flex-col">
            <div className="w-full bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center p-0 overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-md font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.subtitle}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="inline-block rounded-full border border-border px-2 py-1 text-xs text-muted-foreground">{t}</span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-block">
                  <Button size="sm">Demo</Button>
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-block">
                  <Button variant="outline" size="sm">Code</Button>
                </a>
                <div className="ml-auto text-xs text-muted-foreground">Featured</div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground">Want to add live links or deploy demos? Send project links and I'll wire them up.</p>
      </div>
    </div>
  );
}

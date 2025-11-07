import { Link } from "react-router-dom";

export default function Footer() {
  const BG = "https://cdn.builder.io/api/v1/image/assets%2Fe690a34fb9644577a9814872d86f9388%2F40f387b77a53416ea22e96fc08fd5a7f?format=webp&width=1600";
  return (
    <footer
      className="mt-12 bg-cover bg-center text-foreground"
      style={{ backgroundImage: `linear-gradient(rgba(6,8,11,0.7), rgba(6,8,11,0.7)), url('${BG}')` }}
    >
      <div className="container mx-auto py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-primary">Waseem Ali</h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              Passionate about AI, Machine Learning, and Data Science. Building the future through intelligent systems and innovative solutions.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground hover:text-primary">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-md border border-border px-3 py-2 text-sm text-muted-foreground hover:text-primary">GitHub</a>
            </div>
          </div>

          <div>
            <h4 className="text-md font-semibold text-primary">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary">Projects</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold text-primary">Specializations</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Machine Learning</li>
              <li>Data Science</li>
              <li>Python Development</li>
              <li>AI Development</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Waseem Ali. All rights reserved. | Built with React & Tailwind CSS
      </div>
    </footer>
  );
}

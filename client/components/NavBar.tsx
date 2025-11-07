import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-extrabold tracking-wide text-primary text-xl"
        >
          Waseem Ali
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
                  isActive && "text-primary",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Simple mobile overflow menu */}
          <details className="relative">
            <summary className="list-none cursor-pointer rounded-md border border-border px-3 py-2 text-sm text-foreground/90 hover:bg-accent/40">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-48 rounded-md border border-border bg-card p-2 shadow-lg">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "block rounded px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                      isActive && "text-primary",
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

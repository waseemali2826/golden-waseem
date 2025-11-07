import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ToolsSection from "./ToolsSection";
import ReviewsSection from "./ReviewsSection";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      {location.pathname !== "/" && <ToolsSection />}
      <ReviewsSection />
      <Footer />
    </div>
  );
}

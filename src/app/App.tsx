import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Requirements from "./pages/Requirements";
import Demo from "./pages/Demo";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import { PageTransition } from "./components/PageTransition";
import { LoadingOverlay } from "./components/LoadingOverlay";

function ScrollToTop() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });

    // Short delay to show transition
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <LoadingOverlay isLoading={isTransitioning} />;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </PageTransition>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

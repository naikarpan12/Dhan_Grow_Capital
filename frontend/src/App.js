import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import SmoothScroll from "@/components/site/SmoothScroll";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Manifesto from "@/components/site/Manifesto";
import Services from "@/components/site/Services";
import Calculators from "@/components/site/Calculators";
import FounderTrust from "@/components/site/FounderTrust";
import Insights from "@/components/site/Insights";
import Footer from "@/components/site/Footer";
import FloatingCTA from "@/components/site/FloatingCTA";

function Home() {
  return (
    <div className="grain min-h-screen" data-testid="home-page">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Calculators />
        <FounderTrust />
        <Insights />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

function App() {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-left" />
    </SmoothScroll>
  );
}

export default App;

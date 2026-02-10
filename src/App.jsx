import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Projects } from "@/sections/Projects";
// import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <ThemeToggleButton />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;

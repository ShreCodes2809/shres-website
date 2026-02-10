import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = () => {
    const heroSection = document.getElementById("hero");

    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full glass accent-icon
        shadow-lg shadow-primary/20 transition-all duration-300 hover:brightness-110
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
          isVisible
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-3 opacity-0 pointer-events-none"
        }`}
    >
      <span className="flex items-center justify-center">
        <ChevronUp className="h-5 w-5" />
      </span>
    </button>
  );
};

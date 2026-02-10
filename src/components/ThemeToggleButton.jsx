import { Moon, Sun } from "lucide-react";
import { useLayoutEffect, useState } from "react";

const THEME_STORAGE_KEY = "preferred-theme";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "day" || savedTheme === "night") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "night"
    : "day";
};

export const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "night" ? "day" : "night"));
  };

  const nextThemeLabel = theme === "night" ? "day" : "night";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextThemeLabel} mode`}
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full glass accent-icon
        shadow-lg shadow-primary/20 transition-all duration-300 hover:brightness-110
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <span className="flex items-center justify-center">
        {theme === "night" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </span>
    </button>
  );
};

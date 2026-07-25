"use client";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem("theme", theme);
}

export function ThemeToggle() {
  function toggleTheme() {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex min-h-10 items-center justify-center border border-white/15 px-4 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
      aria-label="Toggle dark and light theme"
      title="Toggle theme"
    >
      Theme
    </button>
  );
}

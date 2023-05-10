export type Theme = "light" | "dark";

const setTheme = (theme: Theme) => {
  return localStorage ? localStorage.setItem("theme", theme) : undefined;
};

const getTheme = (): Theme | undefined => {
  return localStorage?.getItem("theme") as Theme | undefined;
};

export const getCurrentUserTheme = () => {
  const lsTheme = getTheme();
  if (lsTheme) {
    if (lsTheme === "dark" || lsTheme === "light") {
      return lsTheme;
    } else {
      return "light";
    }
  }
  if (window?.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

const toggle = document?.getElementById(
  "themeToggle"
) as HTMLInputElement | null;

export const reflectCurrentTheme = () => {
  const theme = getCurrentUserTheme();

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
    if (toggle) {
      toggle.checked = true;
    }
  } else {
    document.documentElement.classList.add("dark");
    if (toggle) {
      toggle.checked = false;
    }
  }

  setTheme(theme);
};

const handleToggleChange = () => {
  const element = document.documentElement;
  element.classList.toggle("dark");
  const isDark = element.classList.contains("dark");
  setTheme(isDark ? "dark" : "light");
};

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    setTheme(isDark ? "dark" : "light");
    reflectCurrentTheme();
  });

toggle?.addEventListener("change", handleToggleChange);

const saveUserTheme = (theme: "light" | "dark") => {
  localStorage.setItem("theme", theme);
};
const getCurrentUserTheme = () => {
  const lsTheme = localStorage?.getItem("theme");
  if (typeof localStorage !== "undefined" && lsTheme) {
    if (lsTheme === "dark" || lsTheme === "light") {
      return lsTheme;
    } else {
      return "light";
    }
  }
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

const theme = getCurrentUserTheme();

if (theme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
}

saveUserTheme(theme);

const handleToggleClick = () => {
  const element = document.documentElement;
  element.classList.toggle("dark");
  const isDark = element.classList.contains("dark");
  saveUserTheme(isDark ? "dark" : "light");
};

document
  .getElementById("themeToggle")
  ?.addEventListener("click", handleToggleClick);

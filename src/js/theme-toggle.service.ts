const saveUserTheme = (theme: "light" | "dark") => {
  localStorage.setItem("theme", theme);
};
const getCurrentUserTheme = () => {
  const lsTheme = localStorage?.getItem("theme");
  if (lsTheme) {
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

const toggle = document.getElementById(
  "themeToggle"
) as HTMLInputElement | null;

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

saveUserTheme(theme);

const handleToggleChange = () => {
  const element = document.documentElement;
  element.classList.toggle("dark");
  const isDark = element.classList.contains("dark");
  saveUserTheme(isDark ? "dark" : "light");
};

toggle?.addEventListener("change", handleToggleChange);

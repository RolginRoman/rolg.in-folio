export type Theme = "light" | "dark";
const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
const setTheme = (theme: Theme) => (localStorage ? localStorage.setItem("theme", theme) : undefined);
const getTheme = () => localStorage?.getItem("theme");
const getCurrentUserTheme = (): Theme => {
  const lsTheme = getTheme();
  return (
    lsTheme ? (["dark", "light"].includes(lsTheme) ? lsTheme : "light") : darkMedia.matches ? "dark" : "light"
  ) as Theme;
};

const reflectCurrentTheme = (host: HTMLElement, theme: Theme) => {
  setTheme(theme);
  return theme === "light" ? host.classList.remove("dark") : host.classList.add("dark");
};

const handleToggleChange = () => {
  const element = document.documentElement;
  element.classList.toggle("dark");
  const isDark = element.classList.contains("dark");
  setTheme(isDark ? "dark" : "light");
};

darkMedia.addEventListener("change", ({ matches: isDark }) => {
  setTheme(isDark ? "dark" : "light");
  reflectCurrentTheme(document.documentElement, isDark ? "dark" : "light");
});

const toggle = document?.getElementById("themeToggle") as HTMLInputElement | null;
if (toggle) {
  toggle.checked = getCurrentUserTheme() === "light";
  toggle.addEventListener("change", handleToggleChange);
}

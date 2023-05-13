const darkMedia = window.matchMedia("(prefers-color-scheme: dark)");
const setTheme = (theme) => (localStorage ? localStorage.setItem("theme", theme) : undefined);
const getTheme = () => localStorage?.getItem("theme");
const getCurrentUserTheme = () => {
  const lsTheme = getTheme();
  return lsTheme ? (["dark", "light"].includes(lsTheme) ? lsTheme : "light") : darkMedia.matches ? "dark" : "light";
};
((host, theme) => {
  setTheme(theme);
  return theme === "light" ? host.classList.remove("dark") : host.classList.add("dark");
})(document.documentElement, getCurrentUserTheme());

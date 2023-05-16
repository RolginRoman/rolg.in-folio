// it is a scipt reference that is inlined as base64 to ThemeInjector.astro
// TODO need to automate this inlining process somehow (vite plugins or something else)
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

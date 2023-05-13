export const matchReducedMotion = (callback: (isMatches: boolean) => void) => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  callback(reduced.matches);
  reduced.addEventListener("change", ({ matches }) => callback(matches));
};

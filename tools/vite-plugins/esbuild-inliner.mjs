export const esbuildInliner = () => {
  return {
    name: "esbuildInliner",
    transform(source, id) {
      return transformHtml(source, this, id);
    },
    transformIndexHtml(source, ctx) {
      return transformHtml(source, ctx);
    },
  };
};

const transformHtml = (source) => {
  return `${source}`;
};

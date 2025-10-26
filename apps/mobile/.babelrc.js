module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@libs/shared": "../../libs/shared/src/index.ts",
            shared: "../../libs/shared/src/index.ts",
          },
        },
      ],
    ],
  };
};

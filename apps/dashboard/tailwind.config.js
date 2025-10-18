const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("path");
const { colors } = require("../../libs/shared/src");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
      },
      textColor: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
        theme: colors.primary,
      },
    },
  },
  plugins: [],
};

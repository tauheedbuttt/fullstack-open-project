const { colors } = require("../../libs/shared/src/lib/shared");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        danger: colors.danger,
        blue: colors.blue,
      },
      textColor: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
        theme: colors.primary,
        danger: colors.danger,
      },
    },
  },
  plugins: [],
};

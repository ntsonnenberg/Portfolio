/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      phone: "360px",
      tablet: "664px",
      laptop: "1536px",
      desktop: "1920px",
    },
    extend: {
      colors: {
        primary: "#676767",
        "primary-variant": "#333232",
        "on-primary": "#FFFFFF",
        secondary: "#1A8ADC",
        "secondary-variant": "#005C9E",
        "on-secondary": "#FFFFFF",
        background: "#262626",
        "on-background": "#FFFFFF",
        surface: "#DDDDDD",
        "on-surface": "#000000",
        error: "#D42B2B",
        "on-error": "#000000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      "fade-in": {
        "0%": {
          opacity: "100",
        },
        "100%": {
          opacity: "0",
        },
      },
      "fade-out": {
        "0%": {
          opacity: "0",
        },
        "100%": {
          opacity: "100",
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 2s ease-out",
        "fade-in": "fade-in 2s ease-in",
        "fade-out": "fade-out 2s ease-out",
      },
    },
  },
  plugins: [],
};

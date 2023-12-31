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
        "primary-variant": "#141414",
        "on-primary": "#FFFFFF",
        secondary: "#1A8ADC",
        "secondary-variant": "#005C9E",
        "on-secondary": "#FFFFFF",
        background: "#141414",
        "on-background": "#FFFFFF",
        surface: "#F4F4F4",
        "on-surface": "#141414",
        error: "#D42B2B",
        "on-error": "#000000",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        code: "url(https://img.freepik.com/free-vector/pixel-rain-abstract-background_23-2148381456.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696896000&semt=ais)",
        "code-at-desk":
          "url(https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 2s ease-out",
        "fade-in-right": "fade-in-right 2s ease-out",
        "fade-in-left": "fade-in-left 2s ease-out",
      },
      dropShadow: {
        drawer: "0 10px 50px rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
};

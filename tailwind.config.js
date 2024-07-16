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
      laptop: "1440px",
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
        "on-background": "#E2E2E2",
        surface: "#FAFAFA",
        "on-surface": "#141414",
        error: "#D42B2B",
        "on-error": "#000000",
      },
      dropShadow: {
        over: "0 40px 28px rgba(0, 0, 0, 0.35)",
      },
      boxShadow: {
        "stand-out": "0 0px 100px 20px rgba(26, 9, 64, 0.7)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        code: "url(https://img.freepik.com/free-vector/pixel-rain-abstract-background_23-2148381456.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696896000&semt=ais)",
        "macbook-almost-closed":
          "url(https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
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
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        block: {
          "0%": {
            width: "0%",
            left: 0,
          },
          "50%": {
            width: "100%",
            left: 0,
          },
          "100%": {
            width: 0,
            left: "100%",
          },
        },
        "spin-top-in": {
          "0%": {
            transform: "rotate(0deg) translateY(0rem)",
          },
          "50%": {
            transform: "translateY(0.25rem)",
          },
          "100%": {
            transform: "rotate(45deg) translateY(0.25rem) translateX(0.25rem)",
          },
        },
        "spin-bottom-in": {
          "0%": {
            transform: "rotate(0deg) translateY(0rem)",
          },
          "50%": {
            transform: "rotate(-90deg) translateX(0.50rem)",
          },
          "100%": {
            transform:
              "rotate(-45deg) translateY(-0.25rem) translateX(0.25rem)",
          },
        },
        "spin-top-out": {
          "0%": {
            transform: "rotate(45deg) translateY(0.25rem) translateX(0.25rem)",
          },
          "50%": { transform: "translateY(0.25rem)" },
          "100%": { transform: "rotate(0deg) translateY(-0.125rem)" },
        },
        "spin-bottom-out": {
          "0%": {
            transform:
              "rotate(-45deg) translateY(-0.25rem) translateX(0.25rem)",
          },
          "50%": { transform: "rotate(-90deg) translateX(0.50rem)" },
          "100%": { transform: "rotate(0deg) translateY(0.125rem)" },
        },
        typing: {
          "0%": { width: "0%", visibility: "hidden" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
        grow: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        "fade-in-down": "fade-in-down 2s ease-out",
        "fade-in-right": "fade-in-right 2s ease-out",
        "fade-in-left": "fade-in-left 2s ease-out",
        "fade-in": "fade-in 2s 1.6s forwards",
        block: "block 2s ease-in-out forwards",
        "spin-top-in": "spin-top-in 0.5s forwards",
        "spin-bottom-in": "spin-bottom-in 0.5s forwards",
        "spin-top-out": "spin-top-out 0.5s forwards",
        "spin-bottom-out": "spin-bottom-out 0.5s forwards",
        typing: "typing 2s steps(15) forwards, blink .7s infinite",
        grow: "grow 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};

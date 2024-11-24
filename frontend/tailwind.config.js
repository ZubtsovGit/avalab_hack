/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#191a23",
          "200": "rgba(0, 0, 0, 0.3)",
        },
        cornflowerblue: {
          "100": "#66acff",
          "200": "#337acc",
        },
        black: "#000",
        whitesmoke: "#f3f3f3",
        darkgray: "#a1a1a1",
        gosblue: "#0d4cd3",
        dimgray: "#4d4d57",
      },
      spacing: {},
      fontFamily: {
        h3: "'Space Grotesk'",
        "text-paragraph": "'DM Sans'",
        inherit: "inherit",
        "montserrat-alternates": "'Montserrat Alternates'",
      },
      borderRadius: {
        "26xl": "45px",
        "6xs": "7px",
        sm: "14px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "11xl": "30px",
      "5xl": "24px",
      lg: "18px",
      "21xl": "40px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

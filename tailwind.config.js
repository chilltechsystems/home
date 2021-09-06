module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // darkMode: false, // or 'media' or 'class'
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryLight: "#ecf0f1",
        primaryDark: "#2c3e50",
        secondary: "#3b82f6",
        whatsapp: "#12edd4",
      },
      backgroundImage: (theme) => ({
        attachedbanner: "url('assets/attachedbanner.jpeg')",
      }),
      fontFamily: {
        lora: "'Lato', sans-serif",
        ubuntu: "'Ubuntu', sans-serif",
        sourcesans: "'Source Sans Pro', sans-serif",
      },
      height: {
        yoxl: "512px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

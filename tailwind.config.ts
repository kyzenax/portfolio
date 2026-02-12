import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfefd",
          100: "#cffbf8",
          500: "#20b2aa",
          600: "#16938c",
          700: "#0f716b"
        }
      },
      boxShadow: {
        soft: "0 8px 32px rgba(15, 113, 107, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;

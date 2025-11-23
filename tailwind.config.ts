import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#050608",
        gloom: "#111217",
        ectoplasm: "#9ad7ff",
        bloodlit: "#f25252"
      },
      backgroundImage: {
        "grain-noise": "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 version=%221.1%22 width=%22400%22 height=%22400%22%3E%3Cfilter id=%22n%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')"
      },
      boxShadow: {
        abyssal: "0 0 180px 40px rgba(5,6,8,0.75)",
        spectral: "0 0 160px 30px rgba(154,215,255,0.35)"
      },
      animation: {
        shimmer: "shimmer 4s ease-in-out infinite",
        flicker: "flicker 6s linear infinite",
        pulseSlow: "pulseSlow 9s ease-in-out infinite"
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { transform: "translateY(-4%)" },
          "50%": { transform: "translateY(4%)" }
        },
        flicker: {
          "0%, 100%": { opacity: "0.8" },
          "10%": { opacity: "0.4" },
          "20%": { opacity: "0.9" },
          "30%": { opacity: "0.3" },
          "40%": { opacity: "0.85" },
          "50%": { opacity: "0.5" },
          "60%": { opacity: "0.95" },
          "70%": { opacity: "0.35" },
          "80%": { opacity: "0.9" },
          "90%": { opacity: "0.6" }
        },
        pulseSlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.03)", opacity: "0.95" }
        }
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        textGrey: "#E3E3E3",
        primary: "#00A1ED",
        heroBackground: "#000D33"
      },
      fontFamily: {
        poppins: ["var(--poppins)"]
      },
      borderRadius: {
        cta: "15px",
        input: "20px"
      }
    },
  },
  plugins: [],
} satisfies Config;

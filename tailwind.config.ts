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

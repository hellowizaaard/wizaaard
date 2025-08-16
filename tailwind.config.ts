import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: 'jit',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1250px',
      'xxl': '1440px',
    },
    extend: {
      colors: {
        textGrey: "#E3E3E3",
        primary: "#00A1ED",
        heroBackground: "#000D33",
        f8f8f8: "#F8F8F8"
      },
      fontFamily: {
        poppins: ["var(--poppins)"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        cta: "15px",
        input: "20px"
      }
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        "120": "30rem", // 480px
        "144": "36rem", // 576px
        "192": "48rem", // 768px
        "240": "60rem", // 960px
        "288": "72rem", // 1152px
      },
      width: {
        "120": "30rem", // 480px
        "144": "36rem", // 576px
        "192": "48rem", // 768px
        "240": "60rem", // 960px
        "288": "72rem", // 1152px
      },
      fontSize: {
        xxs: "0.625rem", // 10px
      },
      backgroundColor: {
        contact: "#D9D9D9",
      },
    },
  },
  plugins: [],
} satisfies Config;

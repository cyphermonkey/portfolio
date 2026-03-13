import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: {
          DEFAULT: "var(--color-card)",
          hover: "var(--color-card-hover)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          lit: "var(--color-border-lit)",
        },
        text: {
          dim: "var(--color-text-dim)",
          muted: "var(--color-text-muted)",
        },
        accent: {
          orange: "var(--color-accent-orange)",
          blue: "var(--color-accent-blue)",
          green: "var(--color-accent-green)",
          purple: "var(--color-accent-purple)",
          cyan: "var(--color-accent-cyan)",
          yellow: "var(--color-accent-yellow)",
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        canvas: { DEFAULT: "#0A0E0C", raised: "#0F1510", inset: "#070A08" },
        border: { DEFAULT: "#1A2420", subtle: "#141A17" },
        ink: { DEFAULT: "#E8ECE9", muted: "#7A8A82", faint: "#4D5A53" },
        accent: { DEFAULT: "#0D9D6F", dim: "#0A7A57", bright: "#14C088" }
      },
      fontFamily: {
        display: ["Inter Tight", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-lg": ["2.75rem", { lineHeight: "1.08", letterSpacing: "-0.01em" }]
      },
      maxWidth: { content: "68rem" }
    }
  },
  plugins: [require("@tailwindcss/typography")]
} satisfies Config;
import containerQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-container": "#d3e6c4",
        "on-surface": "#101e21",
        "surface-variant": "#d6e5e9",
        "tertiary-container": "#383b3c",
        "surface-container": "#e1f1f5",
        background: "#e1f3ef",
        outline: "#717974",
        "surface-container-low": "#d2e9e3",
        "surface-dim": "#cddde1",
        "on-background": "#101e21",
        "surface-bright": "#e1f3ef",
        "on-tertiary-fixed": "#191c1d",
        "surface-container-lowest": "#ffffff",
        "on-secondary-fixed-variant": "#3b4b32",
        "on-error": "#ffffff",
        "primary-fixed-dim": "#a0d1bb",
        "primary-fixed": "#bbedd6",
        "surface-container-highest": "#d6e5e9",
        "inverse-on-surface": "#e4f3f7",
        surface: "#e1f3ef",
        "secondary-fixed-dim": "#baccac",
        "inverse-primary": "#a0d1bb",
        "on-secondary": "#ffffff",
        "on-primary-fixed-variant": "#204f3e",
        "on-primary-container": "#7eae99",
        "surface-container-high": "#dbebef",
        "on-secondary-container": "#57674c",
        "on-primary": "#ffffff",
        tertiary: "#232526",
        "error-container": "#ffdad6",
        secondary: "#536348",
        "surface-tint": "#396755",
        "on-primary-fixed": "#002116",
        "on-secondary-fixed": "#111f0a",
        "outline-variant": "#c0c8c3",
        "secondary-fixed": "#d5e8c6",
        "on-surface-variant": "#414944",
        "on-tertiary-container": "#a3a5a6",
        "primary-container": "#114232",
        "on-error-container": "#93000a",
        "tertiary-fixed": "#e1e3e4",
        primary: "#002b1e",
        "on-tertiary-fixed-variant": "#454748",
        "on-tertiary": "#ffffff",
        error: "#ba1a1a",
        "tertiary-fixed-dim": "#c5c7c8",
        "inverse-surface": "#253336"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "margin-desktop": "64px",
        "section-padding": "80px",
        "container-max": "1280px",
        gutter: "24px",
        unit: "8px",
        "margin-mobile": "20px"
      },
      fontFamily: {
        "headline-lg": ["Manrope", "sans-serif"],
        "body-md": ["Manrope", "sans-serif"],
        "headline-md": ["Manrope", "sans-serif"],
        "display-xl": ["Manrope", "sans-serif"],
        "label-sm": ["Manrope", "sans-serif"],
        "body-lg": ["Manrope", "sans-serif"],
        "headline-lg-mobile": ["Manrope", "sans-serif"]
      },
      fontSize: {
        "headline-lg": ["40px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "display-xl": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "label-sm": ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "700" }]
      }
    }
  },
  plugins: [forms, containerQueries]
};

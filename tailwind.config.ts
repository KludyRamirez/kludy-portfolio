import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        herobg: "linear-gradient(90deg, #0047AB 67%, #FBEC5D 33%)",
        herobgsm: "linear-gradient(90deg, #0047AB 67%, #0047AB 33%)",
      },
      boxShadow: {
        bottomShadow: "0px 2px 6px -3px rgba(0, 0, 0, 0.04)",
        bottomRightShadow: "2px 2px 6px -3px rgba(0, 0, 0, 0.06)",
      },
    },
    screens: {
      sm: { max: "639px" },
      md: "768px", // Medium devices (tablets)
      lg: "1024px", // Large devices (laptops/desktops)
      xl: "1280px", // Extra large devices (large desktops)
      "2xl": "1536px", // 2X large devices
      // Custom breakpoints for specific gadgets
      "iphone-se": "375px", // iPhone SE
      ipad: "768px", // iPad
      "ipad-pro": "1024px", // iPad Pro
      "macbook-air": "1440px", // MacBook Air
      "4k": "3840px", // 4K displays
    },
  },
  plugins: [],
};
export default config;

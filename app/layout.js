import { ThemeProvider } from "./ThemeProvider";
import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";
import { meta } from "./data/config";
// import Favicon from "@public/favicon/favicon.ico";
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  unicodeRange: "U+000-5FF",
});

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  icons: [
    { rel: "icon", url: "/favicon/favicon.ico" }, // default favicon
    // { rel: "icon", href: "/favicon/favicon-16x16.png", sizes: "16x16" },
    // { rel: "icon", href: "/favicon/favicon-32x32.png", sizes: "32x32" },
    // Add more favicon sizes here if needed
    // {
    //   rel: "icon",
    //   href: "/android-chrome-192x192.png",
    //   sizes: "192x192",
    //   type: "image/png",
    // }, // Android touch icon
    // {
    //   rel: "icon",
    //   href: "/android-chrome-512x512.png",
    //   sizes: "512x512",
    //   type: "image/png",
    // }, // Android touch icon
    // {
    //   rel: "apple-touch-icon",
    //   href: "/apple-touch-icon.png",
    //   sizes: "180x180",
    // },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={beVietnamPro.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

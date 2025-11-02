import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/footer.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trupik | Explore Your Next Adventure",
  description:
    "Discover breathtaking treks, connect with local guides, and book unforgettable adventures — only with Trupik.",
  keywords: [
    "trekking",
    "Trupik",
    "travel",
    "hiking",
    "mountains",
    "outdoors",
    "India treks",
    "adventure",
  ],
  authors: [{ name: "Trupik Team" }],
  openGraph: {
    title: "Trupik | Explore Your Next Adventure",
    description:
      "Your trusted marketplace for treks and outdoor adventures across India.",
    url: "https://www.trupik.com",
    siteName: "Trupik",
    images: [
      {
        url: "/images/hero.png", // ✅ Points to frontend/public/images/hero.png
        width: 1200,
        height: 630,
        alt: "Trupik Adventure Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/icons/favicon.ico", // ✅ Points to frontend/public/icons/favicon.ico
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Optional global stylesheet for legacy support */}
        <link rel="stylesheet" href="/static/css/style.css" />
      </head>

      <body>
        {/* ✅ Header & Navbar */}
        <header>
          <Navbar />
        </header>

        {/* ✅ Main content (matches {% block content %}) */}
        <main className="main-content" role="main">
          {children}
        </main>

        {/* ✅ Footer */}
        <footer>
          <Footer />
        </footer>

        {/* ✅ Optional global JS (if you use main.js) */}
        <script src="/static/js/main.js"></script>
      </body>
    </html>
  );
}

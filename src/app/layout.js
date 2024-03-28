import { Raleway } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import "@/styles/normalize.css";

const font = Raleway({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: "Film Focus",
  description: "A Next.js movie database application.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className} suppressHydrationWarning={true}>
          <div className="background-overlay" />
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

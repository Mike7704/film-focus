import { Raleway } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import "@/styles/normalize.css";

const font = Raleway({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: "Film Focus",
  description: "Film Focus is a movie database app that allows users to explore and review movies.",
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

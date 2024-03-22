import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Nav from "@/components/Nav";
import { auth } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Film Focus",
  description: "A movie review app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          <Header />

          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}

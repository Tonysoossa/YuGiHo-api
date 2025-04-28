import type { Metadata } from "next";
import {  Germania_One } from "next/font/google";
import "./styles/globals.css";
import QueryProvider from "./components/provider/QueryProvider";
import Footer from "./container/Footer";
import Header from "./container/Header";

const germania = Germania_One({
  weight: "400",
  variable: "--font-germania",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yu-Gi-Ho Api",
  description:
    "A Yu-Gi-Oh API for a tech test that generates global information about cards and specific characteristics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${germania.variable}
         antialiased`}
      >
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}

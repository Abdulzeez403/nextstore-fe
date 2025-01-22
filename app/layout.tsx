// import type { Metadata } from "next";
"use client"
import "./globals.css";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

// export const metadata: Metadata = {
//   title: "NextStore",
//   description: "The best place to buy stuff",
// };
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Provider store={store}>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
      </Provider>
    </html>
  );
}

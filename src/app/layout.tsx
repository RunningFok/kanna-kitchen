import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./shared/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "漢那廚房 || Kanna Kitchen ",
  description: "長洲日式餐廳 || Japanese Home Food in Cheung Chau",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import { Inter, Noto_Sans_TC } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const traditionalChinese = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

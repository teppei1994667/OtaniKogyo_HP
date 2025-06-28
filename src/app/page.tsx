import { Metadata } from "next";
import { AboutUs } from "./share/topPageComponent/AboutUs";
import { Contact } from "./share/topPageComponent/Contact";
import { MainImage } from "./share/topPageComponent/MainImage";
import { News } from "./share/topPageComponent/News";
import { OurService } from "./share/topPageComponent/OurService";
import { OurWorks } from "./share/topPageComponent/OurWorks";
import { SplashScreen } from "./share/topPageComponent/SplashScreen";

export const metadata: Metadata = {
  title: "株式会社大谷工業 | アスベスト除去の専門業者",
  description:
    "大谷工業はアスベスト除去、ダイオキシン対策に対応。安全・安心な工事を全国対応で提供します。",
  robots: "index, follow",
  keywords: ["解体工事", "アスベスト除去", "ダイオキシン工事"],
  alternates: {
    canonical: "https://www.otani-company.com/",
  },
  openGraph: {
    title: "株式会社大谷工業 | アスベスト除去、解体業の専門業者",
    description: "安心・安全なアスベスト除去工事を実施。",
    url: "https://www.otani-company.com/",
    siteName: "株式会社大谷工業",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社大谷工業 | アスベスト除去の専門業者",
    description: "アスベストやダイオキシン類除去に特化した専門会社です。",
  },
};

export default function Home() {
  return (
    <>
      <SplashScreen />
      <MainImage />
      <AboutUs />
      <OurService />
      <OurWorks />
      <News />
      <Contact />
    </>
  );
}

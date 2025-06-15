import { AboutUs } from "./share/topPageComponent/AboutUs";
import { Contact } from "./share/topPageComponent/Contact";
import { MainImage } from "./share/topPageComponent/MainImage";
import { News } from "./share/topPageComponent/News";
import { OurService } from "./share/topPageComponent/OurService";
import { OurWorks } from "./share/topPageComponent/OurWorks";
import { SplashScreen } from "./share/topPageComponent/SplashScreen";

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

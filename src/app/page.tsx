import { AboutUs } from "./component/Top/AboutUs";
import { Contact } from "./component/Top/Contact";
import { MainImage } from "./component/Top/MainImage";
import { News } from "./component/Top/News";
import { OurService } from "./component/Top/OurService";
import { OurWorks } from "./component/Top/OurWorks";
import { SplashScreen } from "./component/Top/SplashScreen";

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

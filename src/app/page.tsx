import { AboutUs } from "./component/AboutUs";
import { Contact } from "./component/Contact";
import { MainImage } from "./component/MainImage";
import { News } from "./component/News";
import { OurService } from "./component/OurService";
import { OurWorks } from "./component/OurWorks";

export default function Home() {
  return (
    <>
      <MainImage />
      <AboutUs />
      <OurService />
      <OurWorks />
      <News />
      <Contact />
    </>
  );
}

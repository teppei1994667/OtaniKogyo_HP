import Image from "next/image";
import { Title } from "../component/Title";
import { AnimationImage } from "../component/AnimationImage";
import { AnimationMessage } from "../component/AnimationMessage";

export const AboutUs = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="/about_us.png"
          alt="about us"
          width={1508}
          height={289}
          layout="responsive"
          className="opacity-15"
        />
        <Title
          title="About Us"
          parentClassName="absolute bottom-0 left-0 item-bottom"
          childClassName="text-4xl md:text-5xl lg:text-6xl xl:text-7xl pl-5"
        />
      </div>
      <div className="pl-6 md:pl-12 lg:pl-14">
        <h1 className="text-base md:text-xl xl:text-2xl font-bold primary-color">
          大谷工業について
        </h1>
      </div>
      <div className="relative h-80 sm:h-120 md:h-144 lg:h-192 xl:h-240 mt-6">
        <div className="absolute w-1/2 max-w-6xl mt-8 xl:mt-16 z-10">
          <AnimationImage
            src="/about_us_image.png"
            alt="大谷工業について"
            width={796}
            height={597}
            layout="responsive"
          />
        </div>
        <div className="absolute w-3/4 h-5/6 bg-blue-100 top-0 right-0 "></div>
        <div className="absolute w-24 sm:w-40 md:w-46 lg:w-56 xl:w-64 z-10 -top-6 right-8 sm:right-12 md:right-24 lg:right-36 xl:right-48 ">
          <AnimationImage
            src="/about_us_message.png"
            alt="about_us_message"
            width={470}
            height={894}
            layout="responsive"
          />
        </div>
        <AnimationMessage
          message={`あああああ、\nあああああああああああああああ、\nああああああああああああああああああ\nあああああああああああああ。\nあああああああああああ、\nああああああああああああああああ\nああああああああああああああああ。`}
          absolutelyShow={true}
          parentClassName="absolute w-72 sm:w-72 md:w-80 lg:w-120 xl:w-144 h-38 sm:h-44 md:h-52 lg:h-64 xl:h-96 
                           bg-white z-10 bottom-0 sm:bottom-4 md:bottom-14 xl:bottom-4 right-4 sm:right-10 xl:right-32 p-2 xl:p-8"
        />
      </div>
    </>
  );
};

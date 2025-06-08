import Image from "next/image";
import { Title } from "../share/Title";
import { AnimationImage } from "../share/AnimationImage";
import { AnimationMessage } from "../share/AnimationMessage";

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
        />
        <Title
          title="About Us"
          parentClassName="absolute bottom-0 left-0 item-bottom"
          childClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pl-10"
        />
      </div>
      <div className="pl-12 md:pl-12 lg:pl-14">
        <h1 className="xl:text-2xl md:text-xl sm:text-base text-sm font-bold primary-color">
          大谷工業について
        </h1>
      </div>
      <div className="relative h-72 sm:h-120 md:h-144 lg:h-192 xl:h-240 mt-6">
        <div className="absolute w-1/2 max-w-6xl mt-8 xl:mt-16 z-10">
          <AnimationImage
            src="/about_us_image.png"
            alt="大谷工業について"
            width={796}
            height={597}
            layout="responsive"
          />
        </div>
        <div className="absolute w-3/4 h-5/6 primary-bg-color opacity-20 top-0 right-0 "></div>
        <div className="absolute w-1/6 xl:w-64 z-10 -top-6 right-8 sm:right-12 md:right-24 lg:right-36 xl:right-48 ">
          <AnimationImage
            src="/about_us_message.png"
            alt="about_us_message"
            width={470}
            height={894}
            layout="responsive"
          />
        </div>
        <AnimationMessage
          message={`大谷工業は、\n地域社会に密着した企業として、\n常にお客様のニーズに応えることを\n目指しています。\n私たちの使命は、\n品質と信頼性を兼ね備えた製品と\nサービスを提供し、\nお客様の期待を超えることです。`}
          parentClassName="absolute w-52 sm:w-72 md:w-80 lg:w-120 xl:w-144 h-28 sm:h-44 md:h-52 lg:h-64 xl:h-96 bg-white z-10 bottom-0 md:bottom-14 xl:bottom-4 right-4 sm:right-10 xl:right-32 p-2 xl:p-8"
          childClassName="text-xxs sm:text-sm md:text-base lg:text-xl whitespace-pre-line text-center leading-tight font-semibold"
        />
      </div>
    </>
  );
};

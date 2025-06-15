import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Title } from "../component/Title";
import { AnimationImage } from "../component/AnimationImage";

export const OurWorks = () => {
  return (
    <>
      <div className="mt-4">
        <Image
          src="/our_works.png"
          alt="事業内容"
          width={1512}
          height={245}
          layout="responsive"
        />
      </div>
      <Grid container className="mt-2 md:mt-4 ml-2 md:ml-5 item-bottom">
        <Grid className="mr-2 md:mr-5">
          <Title
            title="施工実績"
            childClassName="text-2xl md:text-5xl font-bold"
          />
        </Grid>
        <Grid>
          <Link
            href=""
            className="text-2xl md:text-5xl font-thin text-gray-400 hover:text-gray-50 transition-colors duration-300"
          >{`>>`}</Link>
        </Grid>
      </Grid>
      <div className="absolute w-5/6 h-28 sm:h-36 md:h-48 lg:h-52 xl:h-60 mt-2 bg-blue-100 opacity-20"></div>
      <Grid
        container
        className="relative justify-between top-10 lg:top-20 lg:ml-12 h-36 sm:h-48 md:h-60 lg:h-72 xl:h-96"
      >
        <Grid className="w-1/4 lg:w-1/5 ml-12 lg:ml-48">
          <AnimationImage
            src="/jiseki1.png"
            alt="実績1"
            width={1280}
            height={960}
            layout="responsive"
          />
        </Grid>
        <Grid className="w-1/4 lg:w-1/5">
          <AnimationImage
            src="/jiseki2.png"
            alt="実績1"
            width={1280}
            height={960}
            layout="responsive"
          />
        </Grid>
        <Grid className="w-1/4 lg:w-1/5 mr-4 lg:mr-14">
          <AnimationImage
            src="/jiseki3.png"
            alt="実績1"
            width={1280}
            height={960}
            layout="responsive"
          />
        </Grid>
      </Grid>
    </>
  );
};

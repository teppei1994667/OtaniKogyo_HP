import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
      <Grid container className="mt-4 mr-4 item-bottom">
        <Grid className="mr-5">
          <h1 className="text-2xl md:text-5xl font-bold pl-10 primary-color">
            施工実績
          </h1>
        </Grid>
        <Grid className="mr-5">
          <Link
            href=""
            className="text-2xl md:text-5xl font-thin text-gray-400 hover:text-gray-50 transition-colors duration-300"
          >{`>>`}</Link>
        </Grid>
      </Grid>
      <div className="absolute w-5/6 h-28 sm:h-36 md:h-48 lg:h-52 xl:h-60 mt-2 primary-bg-color opacity-20"></div>
      <Grid
        container
        className="relative justify-between top-10 lg:top-20 lg:ml-12 h-36"
      >
        <Grid className="w-1/4 lg:w-1/5 ml-12 lg:ml-48">
          <Image
            src="/jiseki1.png"
            alt="実績1"
            width={1280}
            height={960}
            layout="responsive"
          />
        </Grid>
        <Grid className="w-1/4 lg:w-1/5">
          <Image
            src="/jiseki2.png"
            alt="実績1"
            width={1280}
            height={960}
            layout="responsive"
          />
        </Grid>
        <Grid className="w-1/4 lg:w-1/5 mr-4 lg:mr-14">
          <Image
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

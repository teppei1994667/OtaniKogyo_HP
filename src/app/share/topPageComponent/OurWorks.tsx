import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Title } from "../component/Title";
import { ImageCarousel } from "../component/ImageCarousel";

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
            href="/OurWorks"
            className="text-2xl md:text-5xl font-thin text-gray-400 hover:text-gray-50 transition-colors duration-300"
          >{`>>`}</Link>
        </Grid>
      </Grid>
      <div className="absolute w-5/6 h-28 sm:h-36 md:h-48 lg:h-52 xl:h-60 mt-2 bg-blue-100 opacity-20"></div>
      <Grid
        container
        className="relative justify-between top-10 lg:top-20 lg:ml-12 h-60 lg:h-72 xl:h-96"
      >
        <Grid>
          <ImageCarousel />
        </Grid>
      </Grid>
    </>
  );
};

import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Title } from "../component/Title";
import { AnimationImage } from "../component/AnimationImage";
import { AnimationMessage } from "../component/AnimationMessage";
import { AnimationSubTitle } from "../component/AnimationSubTitle";

export const OurService = () => {
  return (
    <>
      <Image
        src="/our_service.png"
        alt="our service"
        width={1512}
        height={216}
        layout="responsive"
      />
      <Grid container className="mt-2 sm:mt-4 justify-end">
        <Grid className="mr-2 sm:mr-5">
          <Title
            title="事業内容"
            childClassName="text-2xl md:text-5xl font-bold pl-10"
          />
        </Grid>
        <Grid className="mr-2 md:mr-8">
          <Link
            href=""
            className="text-2xl md:text-5xl font-thin text-gray-400 hover:text-gray-50 transition-colors duration-300"
          >{`>>`}</Link>
        </Grid>
      </Grid>
      <Grid
        container
        className="-mt-2 item-bottom justify-end"
        alignItems="center"
      >
        <Grid className="w-2/5">
          <AnimationMessage
            message={`いいいいいいいいいいいいいい\nいいいいいいいいいいい\nいいいいいいいいいいいいいいいいい\nいいいいいいいいいいいいいいい\nいいいいいいいいいいいいいいい\nいいいいいいいいいいいいいいいい\nいいいいいいいいいいいいい`}
          />
        </Grid>
        <Grid className="w-9/12 sm:w-3/5">
          <AnimationImage
            src="/asbestos1.png"
            alt="アスベスト事業"
            width={1651}
            height={1242}
            layout="responsive"
          />
        </Grid>
      </Grid>
      <Grid container className="-mt-8 bg-blue-100 md:py-6">
        <Grid className="ml-3 sm:ml-24 md:ml-36 lg:ml-48 xl:ml-60">
          <AnimationSubTitle subTitle={`Asbestos\nconstruction work`} />
        </Grid>
      </Grid>
      <Grid container className="mt-2 item-bottom" alignItems="center">
        <Grid className="w-9/12 sm:w-3/5">
          <AnimationImage
            src="/dioxin1.png"
            alt="ダイオキシン事業"
            width={1633}
            height={1288}
            layout="responsive"
          />
        </Grid>
        <Grid className="w-2/5">
          <AnimationMessage
            message={`うううううううううううううう\nううううううううううううううううううう\nううううううううううううううう\nううううううううううううううううううう\nうううううううううううううううううう\nううううううううううううううう\nううううううううううううう`}
          />
        </Grid>
      </Grid>
      <Grid container className="-mt-8 justify-end bg-blue-100 md:py-6">
        <Grid className="mr-6 sm:mr-24 md:mr-36 lg:mr-48 xl:mr-60">
          <AnimationSubTitle
            subTitle={`Dioxin\ncountermeasure\nconstruction`}
            childClassName="text-right"
          />
        </Grid>
      </Grid>
      <Grid
        container
        className="mt-2 item-bottom justify-end"
        alignItems="center"
      >
        <Grid className="w-2/5">
          <AnimationMessage
            message={`ええええええええええええええええええ\nえええええええええええええええええ\nええええええええええええええええええ\nええええええええええええええええええ\nえええええええええええ\nええええええええええええええええええ\nえええええええええええええええ`}
          />
        </Grid>
        <Grid className="w-9/12 sm:w-3/5">
          <AnimationImage
            src="/kaitai1.png"
            alt="解体・仮説足場・外構工事事業"
            width={1633}
            height={1255}
            layout="responsive"
          />
        </Grid>
      </Grid>
      <Grid container className="-mt-8 bg-blue-100 md:py-6">
        <Grid className="ml-1 sm:ml-24 md:ml-36 lg:ml-48 xl:ml-60">
          <AnimationSubTitle
            subTitle={`Demolition\ntemporary scaffolding\nexterior construction`}
          />
        </Grid>
      </Grid>
    </>
  );
};

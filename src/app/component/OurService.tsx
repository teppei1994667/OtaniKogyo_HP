import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const OurService = () => {
  return (
    <>
      <Image
        src="/our_service.png"
        alt="事業内容"
        width={1512}
        height={216}
        layout="responsive"
      />
      <Grid container className="mt-4 item-bottom justify-end">
        <Grid className="mr-5">
          <h1 className="text-2xl md:text-5xl font-bold pl-10 primary-color">
            事業内容
          </h1>
        </Grid>
        <Grid className="mr-5">
          <Link
            href=""
            className="text-2xl md:text-5xl font-thin text-gray-400 hover:text-gray-50 transition-colors duration-300"
          >{`>>`}</Link>
        </Grid>
      </Grid>
      <Grid container className="-mt-2 item-bottom justify-end">
        <Grid className="w-3/5">
          <Image
            src="/asbestos1.png"
            alt="アスベスト事業"
            width={1651}
            height={1242}
            layout="responsive"
          />
        </Grid>
      </Grid>
      <Grid container className="-mt-8">
        <Grid className="ml-12 sm:ml-24 md:ml-36 lg:ml-48 xl:ml-60">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold primary-color whitespace-pre-line">
            {`Asbestos\nconstruction work`}
          </h1>
        </Grid>
      </Grid>
      <Grid container className="mt-2 item-bottom">
        <Grid className="w-3/5">
          <Image
            src="/dioxin1.png"
            alt="ダイオキシン事業"
            width={1633}
            height={1288}
            layout="responsive"
          />
        </Grid>
      </Grid>
      <Grid container className="-mt-8 justify-end">
        <Grid className="mr-16 sm:mr-24 md:mr-36 lg:mr-48 xl:mr-60">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold primary-color whitespace-pre-line text-right">
            {`Dioxin\ncountermeasure\nconstruction`}
          </h1>
        </Grid>
      </Grid>
      <Grid container className="mt-2 item-bottom justify-end">
        <Grid className="w-3/5">
          <Image
            src="/kaitai1.png"
            alt="解体・仮説足場・外構工事事業"
            width={1633}
            height={1255}
            layout="responsive"
          />
        </Grid>
      </Grid>
      <Grid container className="-mt-8">
        <Grid className="ml-12 sm:ml-24 md:ml-36 lg:ml-48 xl:ml-60">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold primary-color whitespace-pre-line">
            {`Demolition\ntemporary scaffolding\nexterior construction`}
          </h1>
        </Grid>
      </Grid>
    </>
  );
};

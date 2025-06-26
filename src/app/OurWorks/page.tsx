"use client";

import { Grid } from "@mui/material";
import Image from "next/image";
import { WorkListTable } from "./component/WorkListTabel";
import { OurWorksList } from "./OurWorksList";
import { Contact } from "../share/topPageComponent/Contact";
import { ImageCarousel } from "./component/ImageCarousel";

export default function OurWorks() {
  const asbestosHeaderList = ["現場名", "場所", "施工内容"];

  return (
    <>
      <div className="relative mt-10 sm:mt-0">
        <Image
          src="/image/OurWorks/works_header.png"
          alt="our service"
          width={1512}
          height={216}
          layout="fixed"
        />
      </div>
      <Grid
        container
        className="md:-mt-20 h-36 xl:h-48 w-full justify-center z-10 relative"
      >
        <Grid className="w-11/12 lg:w-240 bg-white text-center pt-6 sm:pt-8">
          <h1 className="font-bold text-3xl">施工実績</h1>
          <h1 className="text-base text-blue-400">our works</h1>
        </Grid>
      </Grid>
      <Grid container className="justify-center">
        <Grid className="w-11/12 lg:w-4/5 xl:w-2/3">
          <ImageCarousel />
        </Grid>
      </Grid>
      <WorkListTable
        title="実績一覧"
        tabelHeaderList={asbestosHeaderList}
        workListData={OurWorksList}
      />
      <Contact />
    </>
  );
}

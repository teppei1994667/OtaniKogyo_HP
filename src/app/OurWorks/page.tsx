"use client";

import { Grid } from "@mui/material";
import Image from "next/image";
import { AnimationImage } from "../component/share/AnimationImage";
import { WorkListTable } from "./component/WorkListTabel";
import {
  AsbestosWorksList,
  DemolitionWorksList,
  DioxinWorksList,
} from "./OurWorksList";
import { Contact } from "../component/Top/Contact";

export default function OurWorks() {
  const asbestosHeaderList = ["現場名", "場所", "Lv", "数量"];
  const dioxinHeaderList = ["現場名", "場所", "管理区域", "焼却能力"];
  const demolitionHeaderList = ["現場名", "場所", "規模"];
  return (
    <>
      <div className="relative ">
        <Image
          src="/our_works_top.png"
          alt="our service"
          width={1512}
          height={216}
          layout="fixed"
          className="w-4/5"
        />
        <AnimationImage
          src="/our_works.png"
          alt="our service"
          width={1512}
          height={245}
          layout="fixed"
          className="absolute -bottom-10 right-0 w-1/2 bg-white p-2"
        />
      </div>
      <div className="bg-gray-300 py-10 mt-20">
        <Grid container className="justify-center">
          <Grid>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
              施工実績
            </h1>
          </Grid>
        </Grid>
        <Grid container className="justify-center">
          <Grid>
            <h1 className="text-base text-blue-400">our works</h1>
          </Grid>
        </Grid>
      </div>
      <WorkListTable
        title="アスベスト除去工事"
        tabelHeaderList={asbestosHeaderList}
        bgPosition="left"
        workListData={AsbestosWorksList}
      />
      <WorkListTable
        title="ダイオキシン類対策工事"
        tabelHeaderList={dioxinHeaderList}
        bgPosition="right"
        workListData={DioxinWorksList}
      />
      <WorkListTable
        title="解体・仮設足場・外構工事"
        tabelHeaderList={demolitionHeaderList}
        bgPosition="left"
        workListData={DemolitionWorksList}
      />
      <Contact />
    </>
  );
}

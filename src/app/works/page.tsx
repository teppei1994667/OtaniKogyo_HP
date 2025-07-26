import { Grid } from "@mui/material";
import Image from "next/image";
import { WorkListTable } from "./component/WorkListTabel";
import { OurWorksList } from "./OurWorksList";
import { Contact } from "../share/topPageComponent/Contact";
import { ImageCarousel } from "../share/component/ImageCarousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "実績",
  description:
    "株式会社大谷工業の実績ページでは、アスベスト除去工事やダイオキシン対策工事を含む過去の施工事例をご紹介しています。安全・安心を提供する高品質な工事の実績をご覧ください。",
};

export default function Works() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Work",
    name: "施工実績",
    description:
      "株式会社大谷工業の実績ページでは、アスベスト除去工事やダイオキシン対策工事を含む過去の施工事例をご紹介しています。安全・安心を提供する高品質な工事の実績をご覧ください。",
    creator: {
      "@type": "Organization",
      name: "株式会社大谷工業",
    },
    dateCreated: "2022-10-31",
  };

  // 施工実績のヘッダーリスト
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
        <Grid>
          <ImageCarousel />
        </Grid>
      </Grid>
      <WorkListTable
        title="実績一覧"
        tabelHeaderList={asbestosHeaderList}
        workListData={OurWorksList}
      />
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

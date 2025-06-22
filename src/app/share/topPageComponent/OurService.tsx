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
            message={`大谷工業は、アスベストの\n工事・調査・分析を一貫して対応しています。\n豊富な経験と高度な専門技術、最新の設備を活かし、\n現場ごとに最適な方法で安全、確実に作業を実施。\n調査・分析では高精度な測定機器を用い、\n正確な現状把握と的確な対策を提案します。\nお客様と地域社会の安心・安全な環境づくりを\n全力でサポートします。`}
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
            message={`大谷工業は、ダイオキシン類対策工事において、\n法令遵守と環境保全を最優先に取り組んでいます。\n排ガス処理設備や焼却施設など、\nさまざまな現場での豊富な経験を活かし、\n最新の技術と厳格な安全管理体制で作業を実施します。`}
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
            message={`大谷工業は、解体工事・仮設足場・外構工事を\nトータルでサポートします。\n建物の安全な解体はもちろん、\n現場に最適な足場の設置や、\n景観・機能性を考慮した外構工事まで、\n豊富な経験と確かな技術で対応。\nお客様のご要望に合わせた柔軟な提案と、\n安心・安全な施工をお約束します。`}
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

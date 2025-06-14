import { Grid } from "@mui/material";
import Image from "next/image";
import { JobInformation } from "./component/JobInformation";

export default function RecruitmentInformation() {
  return (
    <>
      <div className="w-full">
        <Image
          src="/recruitment_infomation_top.png"
          alt="our service"
          width={1284}
          height={466}
          layout="responsive"
        />
      </div>
      <Grid container className="-mt-20 h-60 w-full justify-center">
        <Grid className="w-3/5 bg-white text-center pt-8">
          <h1 className="font-bold text-3xl">採用情報</h1>
          <h1 className="font-bold text-xl mt-4">
            未来を築く仲間を募集しています
          </h1>
          <p className="mt-6 text-lg whitespace-pre-line leading-normal">
            {`私たち大谷工業は、アスベスト解体工事を通じて安全で快適な環境を提供することを使命としています。\n環境保全に貢献しながら、地域社会の未来を支える仲間を募集しています。\n未経験者でも安心して働ける教育体制を整えていますので、ぜひご応募ください。`}
          </p>
        </Grid>
      </Grid>
      <Grid container className="mt-8 justify-center">
        <Grid className="w-4/12">
          <Image
            src="/recruitment_image.jpg"
            alt="our service"
            width={5472}
            height={3648}
            layout="responsive"
          />
        </Grid>
        <Grid className="w-2/5">
          <p className="mt-10 text-center font-bold text-xl">社会貢献</p>
          <p className="mt-6 text-lg text-center whitespace-pre-line leading-normal">
            {`私たち大谷工業は、アスベスト解体工事を通じて\n地域社会の安全と環境保全に貢献しています。\n有害物質の除去を通じて、\n未来の世代が安心して暮らせる環境を築くことを目指しています。\nこの使命に共感し、社会に貢献したいという\n熱意を持つ方をお待ちしています。`}
          </p>
        </Grid>
      </Grid>
      <Grid container className="mt-8 justify-center">
        <Grid className="w-2/5">
          <p className="mt-10 text-center font-bold text-xl">アットホーム</p>
          <p className="mt-6 text-lg text-center whitespace-pre-line leading-normal">
            {`大谷工業では、社員同士が支え合い、\n笑顔で働けるアットホームな職場環境を大切にしています。\n未経験者でも安心して働けるよう、\n丁寧な教育体制とサポートを整えています。\n家族のような温かい雰囲気の中で、\nあなたの成長を全力で応援します。`}
          </p>
        </Grid>
        <Grid className="w-4/12">
          <Image
            src="/recruitment_image2.jpg"
            alt="our service"
            width={5472}
            height={3648}
            layout="responsive"
          />
        </Grid>
      </Grid>
      <JobInformation />
    </>
  );
}

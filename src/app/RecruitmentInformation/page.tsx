import { Grid } from "@mui/material";
import Image from "next/image";
import { JobInformation } from "./component/JobInformation";

export default function RecruitmentInformation() {
  return (
    <>
      <div className="w-full mt-20">
        <Image
          src="/recruitment_infomation_top.png"
          alt="our service"
          width={1284}
          height={466}
          layout="responsive"
        />
      </div>
      <Grid container className="md:-mt-20 xl:h-60 w-full justify-center">
        <Grid className="w-11/12 lg:w-240 bg-white text-center pt-6 sm:pt-8">
          <h1 className="font-bold text-3xl">採用情報</h1>
          <h1 className="font-bold text-xl mt-4">
            未来を築く仲間を募集しています
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg whitespace-pre-line lg:whitespace-normal leading-snug sm:leading-normal">
            {`私たち大谷工業は、\nアスベスト解体工事を通じて安全で快適な環境を\n提供することを使命としています。`}
          </p>
          <p className="text-base sm:text-lg whitespace-pre-line lg:whitespace-normal leading-snug sm:leading-normal">
            {`環境保全に貢献しながら、\n地域社会の未来を支える仲間を募集しています。`}
          </p>
          <p className="text-base sm:text-lg whitespace-pre-line lg:whitespace-normal leading-snug sm:leading-normal">
            {`未経験者でも安心して働ける\n教育体制を整えていますので、ぜひご応募ください。`}
          </p>
        </Grid>
      </Grid>
      <Grid container className="mt-8 justify-center">
        <Grid className="w-120">
          <Image
            src="/recruitment_image.jpg"
            alt="our service"
            width={5472}
            height={3648}
            layout="responsive"
          />
        </Grid>
        <Grid className="w-132">
          <p className="mt-4 lg:mt-10 text-center font-bold text-xl">
            社会貢献
          </p>
          <p className="mt-6 text-base sm:text-lg text-center">
            {`私たち大谷工業は、アスベスト解体工事を通じて`}
          </p>
          <p className="text-base sm:text-lg text-center">
            {`地域社会の安全と環境保全に貢献しています。`}
          </p>
          <p className="text-base sm:text-lg text-center">
            {`有害物質の除去を通じて、`}
          </p>
          <p className="text-base sm:text-lg text-center">
            {`未来の世代が安心して暮らせる環境を`}
          </p>
          <p className="text-base sm:text-lg text-center">
            {`築くことを目指しています。`}
          </p>
          <p className="text-base sm:text-lg text-center">
            {`この使命に共感し、社会に貢献したいという`}
          </p>
          <p className="text-base sm:text-lg text-center">
            {`熱意を持つ方をお待ちしています。`}
          </p>
        </Grid>
      </Grid>
      <Grid container className="mt-8 justify-center">
        <Grid className="w-132 order-last lg:order-none">
          <p className="mt-10 text-center font-bold text-xl">アットホーム</p>
          <p className="mt-6 text-lg text-center">
            {`大谷工業では、社員同士が支え合い、`}
          </p>
          <p className="text-lg text-center  whitespace-pre-line leading-normal">
            {`笑顔で働けるアットホームな職場環境を\n大切にしています。`}
          </p>
          <p className="text-lg text-center">
            {`未経験者でも安心して働けるよう、`}
          </p>
          <p className="text-lg text-center">
            {`丁寧な教育体制とサポートを整えています。`}
          </p>
          <p className="text-lg text-center">
            {`家族のような温かい雰囲気の中で、`}
          </p>
          <p className="text-lg text-center">
            {`あなたの成長を全力で応援します。`}
          </p>
        </Grid>
        <Grid className="w-120 order-first lg:order-none">
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

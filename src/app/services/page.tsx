import { Grid } from "@mui/material";
import Image from "next/image";
import { Contact } from "../share/topPageComponent/Contact";
import { AnimationImage } from "../share/component/AnimationImage";

export default function OurService() {
  return (
    <>
      <div className="w-full mt-16">
        <Image
          src="/our_service_header.png"
          alt="our service"
          width={793}
          height={273}
          layout="responsive"
        />
      </div>
      <Grid container className="md:-mt-20 xl:h-80 w-full justify-center">
        <Grid className="w-11/12 lg:w-240 bg-white text-center pt-6 sm:pt-8">
          <h1 className="font-bold text-3xl">事業内容</h1>
          <h1 className="text-base text-blue-400">our services</h1>
          <h1 className="font-bold text-xl mt-4">
            安全・安心な環境づくりへの挑戦
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg whitespace-pre-line lg:whitespace-normal leading-snug sm:leading-normal">
            {`大谷工業は、アスベスト除去、\nダイオキシン対策、解体工事を通じて、`}
          </p>
          <p className="text-base sm:text-lg whitespace-pre-line lg:whitespace-normal leading-snug sm:leading-normal">
            {`危険物を安全に管理し、\n未来を担う環境の整備に取り組んでいます。`}
          </p>
          <p className="text-base sm:text-lg whitespace-pre-line lg:whitespace-normal leading-snug sm:leading-normal">
            {`最新の技術と\n厳格な安全基準に基づいた施工で、\nお客様と地域社会に\n安心と信頼をお届けします。`}
          </p>
          <p className="text-base sm:text-lg whitespace-pre-line lg:whitespace-normal leading-snug sm:leading-normal">
            {`環境保全と社会貢献を第一に、\n安全で快適な空間作りを目指し、`}
          </p>
          <p className="text-base sm:text-lg whitespace-pre-line lg:whitespace-normal leading-snug sm:leading-normal">
            {`未来の世代に繋がる確かな基盤を\n築いています。`}
          </p>
        </Grid>
      </Grid>
      <Grid container className="mt-8 justify-center lg:justify-between">
        <Grid className="w-11/12 lg:w-1/2">
          <div className="bg-gray-200 w-11/12 sm:w-4/5 lg:w-132 xl:w-160 h-60 pt-4 pr-2 lg:pr-10">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-700 text-end">
              アスベスト除去工事
            </h1>
            <h1 className="text-base text-blue-400 text-end">Asbestos</h1>
          </div>
          <div className="2xl:w-192 -mt-40 sm:-mt-36 ml-2 sm:ml-28">
            <AnimationImage
              src="/our_service_image.png"
              alt="Asbestos Removal"
              width={796}
              height={597}
              layout="responsive"
            />
          </div>
        </Grid>
        <Grid className="justify-center items-center flex mt-8 lg:mt-0 lg:mr-12 xl:mr-32 px-2 sm:px-0">
          <div className="flex-col">
            <div className="bg-blue-200 p-2">
              <p className="text-xl font-bold text-center">【POINT】</p>
            </div>
            <div className="mt-6 lg:mt-12">
              <p className="text-xl font-bold text-center">
                高度な専門技術と豊富な実績
              </p>
              <p className="text-base text-center mt-2 whitespace-pre-line">
                {`長年の経験と研ぎ澄まされた技術により、`}
              </p>
              <p className="text-base text-center whitespace-pre-line sm:whitespace-normal">
                {`各種現場で安全かつ確実な工事を\n実施しています。`}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-xl font-bold text-center">
                徹底した安全管理体制
              </p>
              <p className="text-base text-center mt-2 whitespace-pre-line">
                {`最新の安全基準と管理システムを適用し、\n作業者・現場周辺の安全確保に努めています。`}
              </p>
            </div>
            <div>
              <p className="mt-4 text-xl font-bold text-center">
                精度の高い調査・分析能力
              </p>
              <p className="text-base text-center mt-2 whitespace-pre-line sm:whitespace-normal">
                {`高性能な測定機器と確かな技術による\n詳細な調査・分析で、`}
              </p>
              <p className="text-base text-center whitespace-pre-line">
                {`正確な現状把握と最適な対応策を提案できます。`}
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className="mt-14 justify-center">
        <Grid>
          <h1 className="text-xl font-bold">アスベストとは</h1>
        </Grid>
      </Grid>
      <Grid container className="mt-6 justify-center items-center">
        <Grid className="w-120">
          <AnimationImage
            src="/about_asbestos.JPG"
            alt="our service"
            width={2000}
            height={1333}
            layout="responsive"
          />
        </Grid>
        <Grid className="w-132 lg:ml-10">
          <p className="mt-6 text-base sm:text-lg text-center whitespace-pre-line sm:whitespace-normal">
            {`アスベスト（石綿）とは、\n天然に産出する繊維状の鉱物で`}
          </p>
          <p className="text-base sm:text-lg text-center">
            {`耐熱性や耐薬品性、絶縁性に優れていることから、`}
          </p>
          <p className="text-base sm:text-lg text-center whitespace-pre-line sm:whitespace-normal">
            {`かつては建材や断熱材など幅広い用途で\n使用されてきました。`}
          </p>
          <p className="text-base sm:text-lg text-center">
            {`しかし、アスベストを吸い込むことで`}
          </p>
          <p className="text-base sm:text-lg text-center whitespace-pre-line sm:whitespace-normal">
            {`健康被害（肺がんや中皮腫など）を\n引き起こすことが`}
          </p>
          <p className="text-base sm:text-lg text-center whitespace-pre-line sm:whitespace-normal">
            {`明らかになり、現在はその使用が\n禁止されています。`}
          </p>
        </Grid>
      </Grid>
      <Grid container className="mt-12 justify-center lg:justify-between">
        <Grid className="w-11/12 lg:w-1/2">
          <div className="bg-gray-200 w-11/12 sm:w-4/5 lg:w-132 xl:w-160 h-60 pt-4 pr-2 lg:pr-10">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-700 text-end">
              ダイオキシン類対策工事
            </h1>
            <h1 className="text-base text-blue-400 text-end">Dioxin</h1>
          </div>
          <div className="2xl:w-192 -mt-40 sm:-mt-36 ml-2 sm:ml-28">
            <AnimationImage
              src="/our_service_image2.jpg"
              alt="Asbestos Removal"
              width={796}
              height={597}
              layout="responsive"
            />
          </div>
        </Grid>
        <Grid className="justify-center items-center flex mt-8 lg:mt-0 lg:mr-12 xl:mr-32 px-2 sm:px-0">
          <div className="flex-col">
            <div className="bg-blue-200 p-2">
              <p className="text-xl font-bold text-center">【POINT】</p>
            </div>
            <div className="mt-6 lg:mt-12">
              <p className="text-xl font-bold text-center">
                徹底した安全対策とリスク管理
              </p>
              <p className="text-base text-center mt-2 whitespace-pre-line sm:whitespace-normal">
                {`作業員の健康と周辺環境への影響を\n最小限に抑えるため`}
              </p>
              <p className="text-base text-center">
                {`最新の防護装備と安全手順を採用。`}
              </p>
              <p className="text-base text-center">
                {`法令に準拠した厳格なリスク管理体制で、`}
              </p>
              <p className="text-base text-center">
                {`安心して工事をお任せいただけます。`}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-xl font-bold text-center">
                高精度な調査・分析技術
              </p>
              <p className="text-base text-center mt-2 whitespace-pre-line sm:whitespace-normal">
                {`着工前に専門機器を用いた\n詳細な調査・分析を実施。`}
              </p>
              <p className="text-base text-center">
                {`汚染状況を正確に把握し、`}
              </p>
              <p className="text-base text-center">
                {`最適な除去・封じ込め方法を設計することで、`}
              </p>
              <p className="text-base text-center">
                {`無駄のない効率的な工事を可能にします。`}
              </p>
            </div>
            <div>
              <p className="mt-4 text-xl font-bold text-center">
                豊富な実績と専門スタッフ
              </p>
              <p className="text-base text-center mt-2 whitespace-pre-line sm:whitespace-normal">
                {`多数の現場経験を持つ有資格者が在籍。\n大規模施設での実績も豊富で、\n高度な専門性が求められる現場でも\n高品質な対応を実現します。`}
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className="mt-12 justify-center lg:justify-between">
        <Grid className="w-11/12 lg:w-1/2">
          <div className="bg-gray-200 w-11/12 sm:w-4/5 lg:w-132 xl:w-160 h-60 pt-4 pr-2 lg:pr-10">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-700 text-end">
              解体・仮説足場・外交工事
            </h1>
            <h1 className="text-base text-blue-400 text-end">
              Other Construction Work
            </h1>
          </div>
          <div className="2xl:w-192 -mt-40 sm:-mt-36 ml-2 sm:ml-28">
            <AnimationImage
              src="/our_service_image3.jpg"
              alt="Asbestos Removal"
              width={796}
              height={597}
              layout="responsive"
            />
          </div>
        </Grid>
        <Grid className="justify-center items-center flex mt-8 lg:mt-0 lg:mr-12 xl:mr-32 px-2 sm:px-0">
          <div className="flex-col">
            <div className="bg-blue-200 p-2">
              <p className="text-xl font-bold text-center">【POINT】</p>
            </div>
            <div className="mt-6 lg:mt-12">
              <p className="text-xl font-bold text-center">解体工事</p>
              <p className="text-base text-center whitespace-pre-line sm:whitespace-normal mt-2">
                {`綿密な事前調査と豊富な実績に基づき、\n周辺環境や`}
              </p>
              <p className="text-base text-center whitespace-pre-line sm:whitespace-normal">
                {`騒音・粉じん対策に配慮した、\n安全で迅速な解体工事を実施。`}
              </p>
              <p className="text-base text-center whitespace-pre-line">
                {`木造からRC造まで幅広く対応可能です。`}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-xl font-bold text-center">仮設足場工事</p>
              <p className="text-base text-center mt-2 whitespace-pre-line">
                {`作業効率と安全性を両立した足場を提供。\n現場ごとの構造や作業内容に応じた最適設計で、\n職人が安心して作業できる環境を整えます。\n安全基準も徹底順守。`}
              </p>
            </div>
            <div>
              <p className="mt-4 text-xl font-bold text-center">外構工事</p>
              <p className="text-base text-center mt-2">
                {`門扉・フェンス・駐車場・植栽など、`}
              </p>
              <p className="text-base text-center">
                {`使いやすさと美観を両立した外構プランを提案。`}
              </p>
              <p className="text-base text-center whitespace-pre-line sm:whitespace-normal">
                {`戸建てから施設・店舗まで、\n用途に合わせた高品質な`}
              </p>
              <p className="text-base text-center">
                {`仕上がりを実現します。`}
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
      <Contact />
    </>
  );
}

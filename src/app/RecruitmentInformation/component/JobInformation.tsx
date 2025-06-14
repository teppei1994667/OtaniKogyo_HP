import { Grid } from "@mui/material";
import { BaseBorder } from "./BaseBorder";
import { Contact } from "@/app/component/Top/Contact";

export const JobInformation = () => {
  return (
    <>
      <Grid container className="mt-16 justify-center">
        <Grid className="text-center w-full">
          <h1 className="font-bold text-3xl">求人情報</h1>
          <div className="mt-6 mx-auto w-2/3 border-b border-gray-400"></div>
        </Grid>
      </Grid>
      <Grid container className="mt-4 justify-center">
        <Grid className="text-center w-2/5">
          <p className="text-base">職種</p>
        </Grid>
        <Grid className="w-2/5">
          <p className="text-base">現場管理者候補 / 作業員</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-4 justify-center">
        <Grid className="text-center w-2/5">
          <p className="text-base">勤務時間・曜日</p>
        </Grid>
        <Grid className="w-2/5">
          <p className="text-base">8：00～17：00</p>
          <p className="text-base mt-4">・基本的に残業なし</p>
          <p className="text-base">・こまめな休憩、水分補給時間あり</p>
          <p className="text-base">・現場直行OK</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-4 justify-center">
        <Grid className="text-center w-2/5">
          <p className="text-base">勤務形態</p>
        </Grid>
        <Grid className="w-2/5">
          <p className="text-base">固定時間制</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-4 justify-center">
        <Grid className="text-center w-2/5">
          <p className="text-base">休暇・休日</p>
        </Grid>
        <Grid className="w-2/5">
          <p className="text-base">土曜日、日曜日、祝日</p>
          <p className="text-base mt-4">・土日祝休推奨</p>
          <p className="text-base">・GW休暇</p>
          <p className="text-base">・お盆休暇</p>
          <p className="text-base">・年末年始休暇</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-4 justify-center">
        <Grid className="text-center w-2/5">
          <p className="text-base">勤務地所在地</p>
        </Grid>
        <Grid className="w-2/5">
          <p className="text-base">大阪府大阪市住吉区沢之町1-1-13</p>
          <p className="text-base mt-4">
            ※現場は天王寺、阿倍野、平尾、生野、堺など多数あります。
          </p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-4 justify-center">
        <Grid className="text-center w-2/5">
          <p className="text-base">アクセス</p>
        </Grid>
        <Grid className="w-2/5">
          <p className="text-base">XXXXXXXXXXXXX</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-4 justify-center">
        <Grid className="text-center w-2/5">
          <p className="text-base">給与</p>
        </Grid>
        <Grid className="w-2/5">
          <p className="text-base">XXXXXXXXXXXXX</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-4 justify-center">
        <Grid className="text-center w-2/5">
          <p className="text-base">試用期間</p>
        </Grid>
        <Grid className="w-2/5">
          <p className="text-base">試用期間あり</p>
          <p className="text-base">試用期間：3か月</p>
          <p className="text-base">試用期間中の労働条件：同条件</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-4 justify-center">
        <Grid className="text-center w-2/5">
          <p className="text-base">待遇・福利厚生</p>
        </Grid>
        <Grid className="w-2/5">
          <p className="text-base">XXXXXXXXXXXXX</p>
          <p className="text-base mt-4">XXXXXXXXXXXXX</p>
          <p className="text-base mt-4">XXXXXXXXXXXXX</p>
        </Grid>
      </Grid>
      <Grid container className="mt-12 justify-center">
        <Grid className="flex items-center">
          <p className="text-lg font-bold">
            お問い合わせ・応募については右記よりご連絡ください。
          </p>
        </Grid>
        <Grid className="ml-24">
          <button className="text-xs lg:text-base bg-white border border-black p-3 md:p-5 lg:p-6 hover:bg-gray-200 transition-colors duration-300">
            {`お問い合わせフォーム  >`}
          </button>
        </Grid>
      </Grid>
      <Contact />
    </>
  );
};

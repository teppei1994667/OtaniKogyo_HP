import { Grid } from "@mui/material";
import { BaseBorder } from "./BaseBorder";
import { Contact } from "@/app/share/topPageComponent/Contact";
import { ContactFormButton } from "@/app/share/component/ContactFormButton";

export const JobInformation = () => {
  return (
    <>
      <Grid container className="mt-16 justify-center">
        <Grid className="text-center w-full">
          <h1 className="font-bold text-3xl">求人情報</h1>
          <div className="mt-6 mx-auto w-2/3 border-b border-gray-400 hidden sm:block"></div>
        </Grid>
      </Grid>
      <Grid container className="mt-2 justify-center">
        <Grid className="sm:text-center w-9/12 sm:w-2/5">
          <p className="text-base font-bold">職種</p>
        </Grid>
        <Grid className="w-8/12 sm:w-2/5 mt-4 sm:mt-0">
          <p className="text-base">現場管理者 / 現場作業員 / 営業職</p>
          <p className="text-base mt-4">未経験者歓迎◎</p>
          <p className="text-base">資格保有者優遇</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-2 justify-center">
        <Grid className="sm:text-center w-9/12 sm:w-2/5">
          <p className="text-base font-bold">勤務時間・曜日</p>
        </Grid>
        <Grid className="w-8/12 sm:w-2/5 mt-4 sm:mt-0">
          <p className="text-base">8：00～17：00</p>
          <p className="text-base mt-4">・こまめな休憩、水分補給時間あり</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-2 justify-center">
        <Grid className="sm:text-center w-9/12 sm:w-2/5">
          <p className="text-base font-bold">勤務形態</p>
        </Grid>
        <Grid className="w-8/12 sm:w-2/5 mt-4 sm:mt-0">
          <p className="text-base">固定時間制</p>
          <p className="text-base">出張あり</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-2 justify-center">
        <Grid className="sm:text-center w-9/12 sm:w-2/5">
          <p className="text-base font-bold">休暇・休日</p>
        </Grid>
        <Grid className="w-8/12 sm:w-2/5 mt-4 sm:mt-0">
          <p className="text-base">日曜日、祝日</p>
          <p className="text-base mt-4">・GW休暇</p>
          <p className="text-base">・お盆休暇</p>
          <p className="text-base">・年末年始休暇</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-2 justify-center">
        <Grid className="sm:text-center w-9/12 sm:w-2/5">
          <p className="text-base font-bold">勤務地所在地</p>
        </Grid>
        <Grid className="w-8/12 sm:w-2/5 mt-4 sm:mt-0">
          <p className="text-base">大阪市西成区鶴見橋3-2-17</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-2 justify-center">
        <Grid className="sm:text-center w-9/12 sm:w-2/5">
          <p className="text-base font-bold">アクセス</p>
        </Grid>
        <Grid className="w-8/12 sm:w-2/5 mt-4 sm:mt-0">
          <p className="text-base">地下鉄四ツ橋線花園町駅から徒歩8分</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-2 justify-center">
        <Grid className="sm:text-center w-9/12 sm:w-2/5">
          <p className="text-base font-bold">給与</p>
        </Grid>
        <Grid className="w-8/12 sm:w-2/5 mt-4 sm:mt-0">
          <p className="text-base">25万〜45万 ※昇給有り</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-2 justify-center">
        <Grid className="sm:text-center w-9/12 sm:w-2/5">
          <p className="text-base font-bold">試用期間</p>
        </Grid>
        <Grid className="w-8/12 sm:w-2/5 mt-4 sm:mt-0">
          <p className="text-base">３ヶ月</p>
        </Grid>
      </Grid>
      <BaseBorder />
      <Grid container className="mt-2 justify-center">
        <Grid className="sm:text-center w-9/12 sm:w-2/5">
          <p className="text-base font-bold">待遇・福利厚生</p>
        </Grid>
        <Grid className="w-8/12 sm:w-2/5 mt-4 sm:mt-0">
          <p className="text-base">社会保険・労働保険完備</p>
          <p className="text-base">健康診断</p>
          <p className="text-base">交通費支給</p>
          <p className="text-base">制服貸与</p>
        </Grid>
      </Grid>
      <Grid container className="mt-10 lg:justify-center ">
        <Grid className="flex items-center justify-center w-full lg:w-120 ">
          <p className="text-lg font-bold whitespace-pre-line sm:whitespace-normal text-center hidden sm:block">
            {`お問い合わせ・応募については\n右記よりご連絡ください。`}
          </p>
          <p className="text-lg font-bold whitespace-pre-line sm:whitespace-normal text-center block sm:hidden">
            {`お問い合わせ・応募については\n下記よりご連絡ください。`}
          </p>
        </Grid>
        <Grid className="lg:ml-24 mt-4 lg:mt-0 w-full lg:w-56 flex justify-center">
          <ContactFormButton />
        </Grid>
      </Grid>
      <Contact />
    </>
  );
};

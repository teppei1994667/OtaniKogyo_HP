import { Grid } from "@mui/material";

export const CompanyProfileDetail = () => {
  return (
    <>
      <Grid container className="justify-center mt-10">
        <Grid className="flex items-center bg-gray-400 h-12 w-5/6 sm:w-48 sm:justify-center pl-2 sm:pl-0">
          <p className="font-medium text-lg">会社名</p>
        </Grid>
        <Grid className="flex items-center bg-gray-200 h-12 w-5/6 sm:w-3/5 lg:w-144 sm:ml-4 pl-2">
          <p className="text-lg">株式会社大谷工業</p>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-2">
        <Grid className="flex items-center bg-gray-400 h-12 sm:h-24 w-5/6 sm:w-48 sm:justify-center pl-2 sm:pl-0">
          <p className="font-medium text-lg">所在地</p>
        </Grid>
        <Grid className="flex flex-col sm:justify-center bg-gray-200 h-32 sm:h-24 w-5/6 sm:w-3/5 lg:w-144 sm:ml-4 pt-4 sm:pt-0 pl-2">
          <p className="text-lg">【本社】</p>
          <p className="text-lg whitespace-pre-line md:whitespace-normal">
            {`〒557-0031\n大阪府大阪市西成区鶴見橋３丁目１−２４`}
          </p>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-2">
        <Grid className="flex items-center bg-gray-400 h-12 w-5/6 sm:w-48 sm:justify-center pl-2 sm:pl-0">
          <p className="text-lg">TEL</p>
        </Grid>
        <Grid className="flex items-center bg-gray-200 h-12 w-5/6 sm:w-3/5 lg:w-144 sm:ml-4 pl-2">
          <p className="text-lg">06-7654-9938</p>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-2">
        <Grid className="flex items-center bg-gray-400 h-12 w-5/6 sm:w-48 sm:justify-center pl-2 sm:pl-0">
          <p className="text-lg">資本金</p>
        </Grid>
        <Grid className="flex items-center bg-gray-200 h-12 w-5/6 sm:w-3/5 lg:w-144 sm:ml-4 pl-2">
          <p className="text-lg">200万円</p>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-2">
        <Grid className="flex items-center bg-gray-400 h-12 w-5/6 sm:w-48 sm:justify-center pl-2 sm:pl-0">
          <p className="text-lg">代表</p>
        </Grid>
        <Grid className="flex items-center bg-gray-200 h-12 w-5/6 sm:w-3/5 lg:w-144 sm:ml-4 pl-2">
          <p className="text-lg">代表取締役 谷 大介</p>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-2">
        <Grid className="flex items-center bg-gray-400 h-12 w-5/6 sm:w-48 sm:justify-center pl-2 sm:pl-0">
          <p className="text-lg">創業</p>
        </Grid>
        <Grid className="flex items-center bg-gray-200 h-12 w-5/6 sm:w-3/5 lg:w-144 sm:ml-4 pl-2">
          <p className="text-lg">2022年10月31日</p>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-2">
        <Grid className="flex items-center bg-gray-400 h-12 w-5/6 sm:w-48 sm:justify-center pl-2 sm:pl-0">
          <p className="text-lg">建築業許可番号</p>
        </Grid>
        <Grid className="flex items-center bg-gray-200 h-12 w-5/6 sm:w-3/5 lg:w-144 sm:ml-4 pl-2">
          <p className="text-lg">大阪府知事 許可(般 - 5)第161252号</p>
        </Grid>
      </Grid>
      <Grid container className="justify-center mt-2">
        <Grid className="flex items-center bg-gray-400 h-12 sm:h-36 w-5/6 sm:w-48 sm:justify-center pl-2 sm:pl-0">
          <p className="text-lg">業務内容</p>
        </Grid>
        <Grid className="flex flex-col justify-center bg-gray-200 h-32 sm:h-36 w-5/6 sm:w-3/5 lg:w-144 sm:ml-4 pl-2">
          <p className="text-lg">アスベスト除去工事</p>
          <p className="text-lg">ダイオキシン類対策工事</p>
          <p className="text-lg">解体・仮設足場・外構工事</p>
        </Grid>
      </Grid>
    </>
  );
};

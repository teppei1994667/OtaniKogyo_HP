import { Grid } from "@mui/material";

export const Contact = () => {
  return (
    <>
      <div className="bg-contact">
        <Grid container className="justify-center mt-10">
          <Grid className="mt-5">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              CONTACT
            </h1>
          </Grid>
        </Grid>
        <Grid container className="justify-center xl:mt-2">
          <Grid>
            <h1 className="text-xs md:text-base xl:text-xl primary-color">
              お問い合わせ
            </h1>
          </Grid>
        </Grid>
        <Grid container className="justify-center mt-4">
          <Grid>
            <h1 className="text-xs md:text-base xl:text-xl whitespace-pre-line sm:whitespace-normal text-center">
              {`施工のご相談、お見積りに関することなど、\nお気軽にお問い合わせください`}
            </h1>
          </Grid>
        </Grid>
        <Grid
          container
          className="justify-between items-center mt-4 mx-8 sm:mx-28 md:mx-48 lg:ml-64 xl:ml-72 2xl:ml-96 pb-4"
        >
          <Grid>
            <h1 className="text-sm md:text-xl xl:text-2xl whitespace-pre-line text-center">
              TEL 06-7654-9938
            </h1>
          </Grid>
          <Grid>
            <button className="text-xs lg:text-base bg-white border border-black p-3 md:p-5 lg:p-6 hover:bg-gray-200 transition-colors duration-300">
              {`お問い合わせフォーム  >`}
            </button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

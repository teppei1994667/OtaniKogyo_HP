import { Grid } from "@mui/material";

export type CpTitleProps = {
  title: string;
  marginTop: string;
};

export const CpTitle = (props: CpTitleProps) => {
  const { title, marginTop } = props;
  return (
    <>
      <Grid container className={`justify-center ${marginTop}`}>
        <Grid className="text-center w-full">
          <h1 className="font-bold text-3xl">{title}</h1>
          <div className="mt-2 mx-auto w-2/3 border-b border-gray-400"></div>
        </Grid>
      </Grid>
    </>
  );
};

import { Grid } from "@mui/material";

export const BaseBorder = () => {
  return (
    <Grid container className="justify-center">
      <Grid className="w-full">
        <div className="mt-2 mx-auto w-2/3 border-b border-gray-400"></div>
      </Grid>
    </Grid>
  );
};

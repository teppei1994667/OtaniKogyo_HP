import { Grid } from "@mui/material";

export const Access = () => {
  return (
    <>
      <Grid container className="justify-center mt-8">
        <Grid className="w-5/6 sm:w-3/4 h-120">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.32704151164!2d135.48648607725372!3d34.64644277293894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e77f3da17b79%3A0x88b31994a7eb7d2b!2z44CSNTU3LTAwMzEg5aSn6Ziq5bqc5aSn6Ziq5biC6KW_5oiQ5Yy66ba06KaL5qmL77yT5LiB55uu77yR4oiS77yS77yU!5e0!3m2!1sja!2sjp!4v1749825074732!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
};

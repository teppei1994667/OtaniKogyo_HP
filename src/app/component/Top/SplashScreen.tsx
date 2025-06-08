import { Grid } from "@mui/material";
import Image from "next/image";
import styles from "./top.module.css";

export const SplashScreen = () => {
  return (
    <div className={styles.splash_screen}>
      <div className={styles.splash_screen_logo_image}>
        <Grid container alignItems="center" direction="column">
          <Grid className="w-2/3">
            <Image src="/logo.png" alt="会社ロゴ" width={476} height={321} />
          </Grid>
          <Grid className="w-full text-center mt-2 lg:mt-4">
            <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">
              株式会社大谷工業
            </h1>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

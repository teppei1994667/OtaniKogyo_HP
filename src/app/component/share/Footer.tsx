import { Grid } from "@mui/material";
import Image from "next/image";
import { Menu } from "../Top/Menu";

export const Footer = () => {
  return (
    <footer className="bg-footer text-white py-4 pl-2 md:pl-8 lg:pl-14">
      <Grid container className="ml-5 xl:ml-6">
        <Grid className="w-14 lg:w-20">
          <Image src="/logo.png" alt="会社ロゴ" width={476} height={321} />
        </Grid>
      </Grid>
      <Grid container className="mt-2">
        <Grid>
          <h1 className="text-xs lg:text-base font-bold">株式会社大谷工業</h1>
        </Grid>
      </Grid>
      <Grid container>
        <Grid className="mt-2 xl:mt-3">
          <h1 className="text-xs lg:text-sm font-bold">〒557-0031</h1>
        </Grid>
      </Grid>
      <Grid container>
        <Grid>
          <h1 className="text-xs lg:text-base font-bold">
            大阪府大阪市西成区鶴見橋３丁目１−２４
          </h1>
        </Grid>
      </Grid>
      <Grid container className="justify-end">
        <Grid>
          <Menu drowerMenuVisible={false} />
        </Grid>
      </Grid>
      <Grid container className="justify-end mt-4">
        <Grid className="mr-1">
          <h1 className="text-xs xl:text-sm">
            Copyrights © 2024 All Rights Reserved by OTANI Inc.
          </h1>
        </Grid>
      </Grid>
    </footer>
  );
};

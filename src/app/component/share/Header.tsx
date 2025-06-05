"use client";

import { Grid } from "@mui/material";
import Image from "next/image";
import { Menu } from "../Top/Menu";

export const Header = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="fixed top-0 left-0 w-full z-50 bg-white p-4 shadow-md"
      >
        <Grid>
          <Grid container alignItems="center">
            <Grid>
              <Image
                src="/logo.png"
                alt="会社ロゴ"
                width={47.6}
                height={32.1}
              />
            </Grid>
            <Grid className="ml-4">
              <h2 className="font-black text-lg">株式会社 大谷工業</h2>
            </Grid>
          </Grid>
        </Grid>
        <Menu />
      </Grid>
    </>
  );
};

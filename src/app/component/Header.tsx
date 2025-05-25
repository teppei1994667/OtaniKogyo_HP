import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="bg-white p-4 shadow-md"
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
        <Grid container>
          <Grid>
            <Link href="">Home</Link>
          </Grid>
          <Grid className="ml-10">
            <Link href="">事業内容</Link>
          </Grid>
          <Grid className="ml-10">
            <Link href="">実績</Link>
          </Grid>
          <Grid className="ml-10">
            <Link href="">会社概要</Link>
          </Grid>
          <Grid className="ml-10">
            <Link href="">採用情報</Link>
          </Grid>
          <Grid className="ml-10 mr-10">
            <Link href="">お問い合わせ</Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

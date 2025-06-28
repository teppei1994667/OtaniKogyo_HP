"use client";

import { Box, Drawer, Grid, ListItemButton } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DrowerMenuButton } from "./DrowerMenuButton";

export const Menu = ({
  drowerMenuVisible = true,
}: {
  drowerMenuVisible?: boolean;
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isDrawerOpend, setIsDrawerOpend] = useState<boolean>(false);

  const handleMenuButtonOnClick = () => {
    setIsDrawerOpend(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpend(false);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const drawerList = (
    <Box
      sx={{ width: "250px", paddingTop: "25px" }}
      onClick={handleDrawerClose}
    >
      <ListItemButton className="w-full">
        <Link href="/" className="text-2xl w-full text-center">
          Home
        </Link>
      </ListItemButton>
      <ListItemButton className="w-full">
        <Link href="/services" className="text-2xl w-full text-center">
          事業内容
        </Link>
      </ListItemButton>
      <ListItemButton className="w-full">
        <Link href="/works" className="text-2xl w-full text-center">
          実績
        </Link>
      </ListItemButton>
      <ListItemButton className="w-full">
        <Link href="/company" className="text-2xl w-full text-center">
          会社概要
        </Link>
      </ListItemButton>
      <ListItemButton className="w-full">
        <Link href="/recruit" className="text-2xl w-full text-center">
          採用情報
        </Link>
      </ListItemButton>
      <ListItemButton className="w-full">
        <Link href="/contact" className="text-2xl w-full text-center">
          お問い合わせ
        </Link>
      </ListItemButton>
    </Box>
  );

  return (
    <>
      {windowWidth > 1024 ? (
        <Grid container>
          <Grid>
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>
          </Grid>
          <Grid className="ml-10 hover:text-blue-300">
            <Link href="/services">事業内容</Link>
          </Grid>
          <Grid className="ml-10 hover:text-blue-300">
            <Link href="/works">実績</Link>
          </Grid>
          <Grid className="ml-10 hover:text-blue-300">
            <Link href="/company">会社概要</Link>
          </Grid>
          <Grid className="ml-10 hover:text-blue-300">
            <Link href="/recruit">採用情報</Link>
          </Grid>
          <Grid className="mx-10 hover:text-blue-300">
            <Link href="/contact">お問い合わせ</Link>
          </Grid>
        </Grid>
      ) : drowerMenuVisible ? (
        <>
          <DrowerMenuButton handleMenuButtonOnClick={handleMenuButtonOnClick} />
          <Drawer
            className="text-center"
            anchor="right"
            open={isDrawerOpend}
            onClose={handleDrawerClose}
          >
            {drawerList}
          </Drawer>
        </>
      ) : null}
    </>
  );
};

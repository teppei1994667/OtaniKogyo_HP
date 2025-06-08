"use client";

import {
  Box,
  Drawer,
  Grid,
  IconButton,
  ListItemButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles/MenuButton.module.css";

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
    <Box sx={{ width: "250px", paddingTop: "25px" }}>
      <ListItemButton className="text-center justify-center">
        <Typography variant="h6">Home</Typography>
      </ListItemButton>
      <ListItemButton className="text-center justify-center">
        <Typography variant="h6">事業内容</Typography>
      </ListItemButton>
      <ListItemButton className="text-center justify-center">
        <Typography variant="h6">実績</Typography>
      </ListItemButton>
      <ListItemButton className="text-center justify-center">
        <Typography variant="h6">会社概要</Typography>
      </ListItemButton>
      <ListItemButton className="text-center justify-center">
        <Typography variant="h6">採用情報</Typography>
      </ListItemButton>
      <ListItemButton className="text-center justify-center">
        <Typography variant="h6">お問い合わせ</Typography>
      </ListItemButton>
    </Box>
  );

  return (
    <>
      {windowWidth > 1024 ? (
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
      ) : drowerMenuVisible ? (
        <>
          <IconButton
            className={styles.hamburger}
            onClick={handleMenuButtonOnClick}
          >
            <span className={styles.hamburger__line}></span>
            <span className={styles.hamburger__line}></span>
            <span className={styles.hamburger__line}></span>
          </IconButton>
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

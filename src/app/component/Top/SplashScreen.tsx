"use client";

import { Grid } from "@mui/material";
import Image from "next/image";
import styles from "./top.module.css";
import { motion } from "framer-motion";

export const SplashScreen = () => {
  return (
    <motion.div
      className={styles.splash_screen}
      initial={{ opacity: 1 }} // 初期状態
      animate={{ opacity: 0 }} // フェードアウトしながら左に移動>
      transition={{
        opacity: { duration: 3, delay: 2.5 }, // フェードインの時間と遅延
        duration: 4, // アニメーションの時間
        ease: "easeInOut", // スムーズな動き
      }}
    >
      <motion.div
        className={styles.splash_screen_logo_image}
        initial={{ opacity: 0, y: 50 }} // 初期状態: 透明で少し下に位置
        animate={{ opacity: 1, y: 0, x: -500 }} // フワッと表示して元の位置に移動
        exit={{ opacity: 0, x: -500 }} // フェードアウトしながら左に移動
        transition={{
          opacity: { duration: 1, delay: 0.5 }, // フェードインの時間と遅延
          y: { duration: 1 }, // 上に移動するアニメーションの時間と遅延
          x: { duration: 2, delay: 2 }, // 左に移動するアニメーションの時間と遅延
          ease: "easeInOut", // スムーズな動き
        }}
      >
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
      </motion.div>
    </motion.div>
  );
};

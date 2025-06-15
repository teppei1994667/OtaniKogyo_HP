"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const MainImage = () => {
  const [isShowMainText, setIsShowMainText] = useState(false);

  const images = ["/main_image1.jpg", "/main_image2.png", "/main_image3.jpg"]; // 切り替える画像のパスを配列で定義
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // フェードアウト開始
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // 次の画像に切り替え
        setIsFading(false); // フェードイン開始
      }, 1000); // フェードアウトの時間（1秒）
    }, 7000); // 7秒ごとに画像を切り替え

    return () => clearInterval(interval); // クリーンアップ
  }, [images.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowMainText(true);
    }, 2200); // 2.2秒後に表示

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{
          duration: 7, // アニメーションの時間（秒）
          repeat: Infinity, // 無限ループ
          repeatType: "reverse", // アニメーションを逆再生
          ease: "easeInOut", // スムーズな動き
        }}
        className={`inset-0 transition-opacity duration-1000 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative w-full h-screen">
          <Image
            src={images[currentIndex]}
            alt="メインイメージ"
            layout="fill"
            objectFit="cover" // 画像をコンテナにフィットさせる
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className={`text-white text-2xl md:text-6xl font-bold text-center p-4 rounded transition-opacity duration-1000 ${
              isShowMainText ? "opacity-100" : "opacity-0"
            }`}
          >
            I Make Beautiful Feature
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

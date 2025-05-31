"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export const MainImage = () => {
  const [isShowMainText, setIsShowMainText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowMainText(true);
    }, 500); // 0.5秒後に表示

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="relative">
      <Image
        src="/メインイメージサンプル.webp"
        alt="会社ロゴ"
        width={728}
        height={484}
        layout="responsive"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className={`text-white text-2xl md:text-6xl font-bold text-center p-4 rounded transition-opacity duration-1000 ${
            isShowMainText ? "opacity-100" : "opacity-0"
          }`}
        >
          I Make Beautiful Feature
        </h1>
      </div>
    </div>
  );
};

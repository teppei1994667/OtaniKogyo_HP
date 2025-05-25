import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          src="/メインイメージサンプル.webp"
          alt="会社ロゴ"
          width={728}
          height={484}
          layout="responsive"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-black p-4`">
            I Make Beautiful Feature
          </h1>
        </div>
      </div>
    </>
  );
}

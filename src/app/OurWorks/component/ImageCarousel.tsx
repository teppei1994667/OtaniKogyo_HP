import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export const ImageCarousel = () => {
  const images = [
    "/image/OurWorks/slide1.png",
    "/image/OurWorks/slide2.png",
    "/image/OurWorks/slide3.png",
    "/image/OurWorks/slide4.png",
    "/image/OurWorks/slide5.jpg",
    "/image/OurWorks/slide6.jpg",
    "/image/OurWorks/slide7.jpg",
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000, // 2秒ごとに自動スライド
        disableOnInteraction: false, // ユーザー操作後も自動再開
      }}
      slidesPerView={3}
      loop={true}
      speed={700}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        860: {
          slidesPerView: 3,
        },
      }}
    >
      {images.map((src, idx) => (
        <SwiperSlide
          key={idx}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{ position: "relative", width: "250px", height: "180px" }}
          >
            <Image src={src} alt={`slide画像${idx + 1}`} fill />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

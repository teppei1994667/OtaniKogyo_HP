"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type AnimationImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: "responsive" | "fixed" | "intrinsic" | "fill";
  className?: string;
};

export const AnimationImage = (props: AnimationImageProps) => {
  const { src, alt, width, height, layout, className } = props;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout || "responsive"}
        className={className}
      />
    </motion.div>
  );
};

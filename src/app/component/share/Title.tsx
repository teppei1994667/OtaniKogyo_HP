"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type TitleProps = {
  title: string;
  parentClassName?: string;
  childClassName?: string;
};

export const Title = (props: TitleProps) => {
  const { title, parentClassName, childClassName } = props;
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
      className={`${parentClassName ? parentClassName : ""}`}
    >
      <h1
        className={`font-bold primary-color ${
          childClassName ? childClassName : ""
        }`}
      >
        {title}
      </h1>
    </motion.div>
  );
};

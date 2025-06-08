"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type AnimationMessageProps = {
  message: string;
  absolutelyShow?: boolean;
  parentClassName?: string;
  childClassName?: string;
};

export const AnimationMessage = (props: AnimationMessageProps) => {
  const { message, absolutelyShow, parentClassName, childClassName } = props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth >= 640 || absolutelyShow ? (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5 }}
      className={`${parentClassName ? parentClassName : ""}`}
    >
      <p
        className={`text-xxs sm:text-sm md:text-base lg:text-xl whitespace-pre-line text-center leading-tight font-semibold ${
          childClassName ? childClassName : ""
        }`}
      >
        {message}
      </p>
    </motion.div>
  ) : null; // This line is not needed, as it does not return anything.
};

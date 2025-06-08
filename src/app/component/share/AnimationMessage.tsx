"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimationMessageProps = {
  message: string;
  parentClassName?: string;
  childClassName?: string;
};

export const AnimationMessage = (props: AnimationMessageProps) => {
  const { message, parentClassName, childClassName } = props;
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
      <p className={`${childClassName ? childClassName : ""}`}>{message}</p>
    </motion.div>
  );
};

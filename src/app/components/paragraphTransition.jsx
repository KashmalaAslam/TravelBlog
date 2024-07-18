"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const FadeInFromLeftParagraph = ({ text }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {text}
    </motion.p>
  );
};
export default FadeInFromLeftParagraph;

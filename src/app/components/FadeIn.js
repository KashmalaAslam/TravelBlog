"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const FadeInFromLeftParagraph = ({ text }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="text-lg font-medium text-gray-900"
    >
      {text}
    </motion.p>
  );
};
export default FadeInFromLeftParagraph;

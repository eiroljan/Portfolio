"use client";

// Imports
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeInAnimation = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      from="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;

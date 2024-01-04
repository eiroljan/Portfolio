"use client";

// Imports
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInLeftAnimation = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 }, // Adjust the x value for the slide distance
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInLeftAnimation;

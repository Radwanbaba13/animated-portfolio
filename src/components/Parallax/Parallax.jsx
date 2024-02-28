import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Text Transformation
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.1]);

  // Constant rotation animation for backgrounds
  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 10,
      ease: "linear",
    },
  };

  // Constant vertical motion for side text
  const verticalSlideAnimation = {
    x: ["-100%", "100%"],
    transition: {
      repeat: Infinity,
      duration: 10,
      ease: "linear",
    },
  };

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0c0c1d, #111132)",
      }}
    >
      <motion.div className="sideText" animate={verticalSlideAnimation}>
        Work
      </motion.div>
      <motion.h1 style={{ y: yText, opacity: textOpacity, scale: textScale }}>
        My Work
      </motion.h1>
      <motion.div className="circles" animate={rotateAnimation}></motion.div>
      <motion.div
        className="triangles"
        animate={{ ...rotateAnimation, rotate: [0, -360] }}
      ></motion.div>
    </div>
  );
};

export default Parallax;

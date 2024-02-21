import "./About.scss";
import { useState } from "react";
import {
  languages,
  frameworks,
  databases,
  machineLearning,
  testingFrameworks,
  tools,
} from "../../Assets/Technologies";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Technology = ({ categoryName, techArray }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hovered, setHovered] = useState("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="category"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div className="tech-list">
        <span className="category-name">{categoryName}</span>
        {techArray.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="tech-item"
            variants={itemVariants}
            onHoverStart={() => setHovered(categoryName)}
            onHoverEnd={() => setHovered("")}
          >
            <img src={tech.logo} alt={tech.name} className="tech-logo" />
            <span className="tech-name">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const textVariants = {
    hidden: { x: 5000, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.5,
      },
    },
  };

  const textVariants2 = {
    hidden: { x: -500, y: 0, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div className="about" ref={ref}>
      <motion.div
        className="content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1 variants={textVariants2}>About Me</motion.h1>
        <motion.p variants={textVariants2}>
          As an enthusiast for crafting the future of technology, I approach
          software engineering with a blend of analytical prowess and creative
          innovation. Harnessing my skills as a full-stack developer, I delve
          into each layer of development with precision and creativity. My
          journey is fueled by an unwavering commitment to excellence and a
          quest for the next breakthrough in technology. My goal? To build
          seamless, end-to-end experiences that push the boundaries of
          what&rsquo;s possible on the web.
        </motion.p>
        <motion.div
          className="technologies"
          variants={textVariants}
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h1 variants={textVariants}>Skills</motion.h1>
          <Technology categoryName={"Languages"} techArray={languages} />
          <Technology categoryName={"Frameworks"} techArray={frameworks} />
          <Technology categoryName={"Databases"} techArray={databases} />
          <Technology categoryName={"AI/ML"} techArray={machineLearning} />
          <Technology categoryName={"Testing"} techArray={testingFrameworks} />
          <Technology categoryName={"Tools"} techArray={tools} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;

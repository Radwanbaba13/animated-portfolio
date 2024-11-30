import { useRef } from "react";
import "./portfolio.scss";

import * as svgs from "../../Assets/Logos/index";
import GXAI from "../../Assets/Images/GXAI.png";
import movie from "../../Assets/Images/movie.png";
import Awaazo from "../../Assets/Images/Awaazo.png";
import UI_Kit from "../../Assets/Images/UI_Kit.png";
import { isMobile } from "react-device-detect";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "GXAI Concierge",
    img: GXAI,
    desc: "Led the development of an AI-powered chatbot designed to transform frontline service at airports by integrating real-time passenger data, SOPs, protocols, and operational insights. Built with React and Node.js, the application incorporates Qdrant as a vector database and MySQL for data management.",
    techStack: [
      { name: "React", logo: svgs.react },
      { name: "Node.js", logo: svgs.nodejs },
      { name: "Qdrant", logo: svgs.qdrant },
      { name: "MySQL", logo: svgs.mysql },
      { name: "Kotlin", logo: svgs.kotlin },
      { name: "Swift", logo: svgs.swift },
      { name: "Docker", logo: svgs.docker },
    ],
  },
  {
    id: 2,
    title: "Awaazo",
    img: Awaazo,
    desc: "Led the frontend team in developing 'Awaazo', an innovative AI-powered podcasting platform, utilizing Next.js and React. Oversaw task management, enhanced team coordination, and ensured effective communication. Focused on guiding the team in creating an engaging user interface while maintaining high coding standards.",
    link: { text: "https://github.com/Radwanbaba13/awaazo", message: "Visit Github Repo" },
    techStack: [
      { name: "Next.js", logo: svgs.nextjs },
      { name: "React", logo: svgs.react },
      { name: "TypeScript", logo: svgs.typescript },
      { name: "Python", logo: svgs.python },
      { name: "Docker", logo: svgs.docker },
    ],
  },
  {
    id: 3,
    title: "Movie Recommender System",
    img: movie,
    desc: "Developed a movie recommendation system by analyzing a dataset of 45,000 movies and over 26 million user ratings. Implemented collaborative and content-based filtering models using matrix factorization and TF-IDF algorithms. Conducted model comparisons with evaluation metrics such as RMSE, precision, and F1-score to determine optimal performance.",
    link: { text: "https://github.com/Radwanbaba13/MovieRecommenderSystem", message: "Visit Github Repo" },
    techStack: [
      { name: "Python", logo: svgs.python },
      { name: "TensorFlow", logo: svgs.tensorflow },
    ],
  },
  {
    id: 4,
    title: "React UI Kit",
    img: UI_Kit,
    desc: "The 'React_UI_Kit' repository is an extensive library of React components and widgets, crafted to facilitate the development of modern and responsive user interfaces. This collection leverages the full potential of React and JavaScript, complemented by Storybook for component visualization and CSS for styling, offering a versatile toolkit for UI development.",
    link: {
      text: "https://github.com/Radwanbaba13/React_UI_Kit",
      message: "Visit Github Repo",
    },
    techStack: [
      { name: "React", logo: svgs.react },
      { name: "JavaScript", logo: svgs.javascript },
      { name: "Storybook", logo: svgs.storybook },
      { name: "CSS", logo: svgs.css },
    ],
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

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

  // Determine if the item's ID is odd or even
  const isItemOdd = isMobile ? true : item.id % 2 !== 0;

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          {isItemOdd ? (
            <>
              <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
              </div>
              <motion.div className="textContainer" style={{ y }}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                {item.link != null && <button onClick={() => window.open(item.link.text, "_blank")}>{item.link.message}</button>}
                <div className="tech-list">
                  {item.techStack.map((tech) => (
                    <motion.div key={tech.name} className="tech-item" variants={itemVariants}>
                      <img src={tech.logo} alt={tech.name} className="tech-logo" />
                      <span className="tech-name">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div className="textContainer" style={{ y }}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                {item.link != null && <button onClick={() => window.open(item.link.text, "_blank")}>{item.link.message}</button>}
                <div className="tech-list">
                  {item.techStack.map((tech) => (
                    <motion.div key={tech.name} className="tech-item" variants={itemVariants}>
                      <img src={tech.logo} alt={tech.name} className="tech-logo" />
                      <span className="tech-name">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;

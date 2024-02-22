import { useRef } from "react";
import "./portfolio.scss";

import * as svgs from "../../Assets/Logos/index";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Awaazo",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: { text: "https://alpha.awaazo.com", message: "Visit Website" },
    techStack: [
      { name: "Next.js", logo: svgs.nextjs },
      { name: "React", logo: svgs.react },
      { name: "TypeScript", logo: svgs.typescript },
      { name: "ASP.NET", logo: svgs.dotnetcore },
      { name: "C#", logo: svgs.csharp },
    ],
  },
  {
    id: 2,
    title: "Business Operations Dashboard",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    link: null,
    techStack: [
      { name: "Electron.js", logo: svgs.electron },
      { name: "React", logo: svgs.react },
      { name: "TypeScript", logo: svgs.typescript },
      { name: "Node.js", logo: svgs.nodejs },
      { name: "MongoDB", logo: svgs.mongodb },
    ],
  },
  {
    id: 3,
    title: "React UI Kit",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
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
  const isItemOdd = item.id % 2 !== 0;

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
                {item.link != null && (
                  <button onClick={() => window.open(item.link.text, "_blank")}>
                    {item.link.message}
                  </button>
                )}
                <div className="tech-list">
                  {item.techStack.map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="tech-item"
                      variants={itemVariants}
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="tech-logo"
                      />
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
                {item.link != null && (
                  <button onClick={() => window.open(item.link.text, "_blank")}>
                    {item.link.message}
                  </button>
                )}
                <div className="tech-list">
                  {item.techStack.map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="tech-item"
                      variants={itemVariants}
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="tech-logo"
                      />
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

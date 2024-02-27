import { useRef } from "react";
import "./portfolio.scss";

import * as svgs from "../../Assets/Logos/index";
import BOD from "../../Assets/Images/BOD.png";
import Awaazo from "../../Assets/Images/Awaazo.png";
import UI_Kit from "../../Assets/Images/UI_Kit.png";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Awaazo",
    img: Awaazo,
    desc: "Led the frontend team in developing 'Awaazo', an innovative AI-powered podcasting platform, utilizing Next.js and React. Oversaw task management, enhanced team coordination, and ensured effective communication. Focused on guiding the team in creating an engaging user interface while maintaining high coding standards.",
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
    img: BOD,
    desc: "Developed a business management application for TreeKeepers Inc., an outdoor service company based in Montréal, utilizing Electron.js, React.js, and Node.js. Focused on creating client management tools, calendar and task functionalities, and an automated quotation process significantly improving the efficiency of generating quotes, boosting it by 400%.",
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

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

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
  const isItemOdd = isMobile() ? true : item.id % 2 !== 0;

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

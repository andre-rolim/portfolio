import React from "react";
import styles from "/styles/Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.mainSkills}>
      <h2 className="h2Titulo">Minhas Skills</h2>
      <ul className={styles.skills}>
        <li>
          <img
            src="https://www.datocms-assets.com/56146/1634160090-vector.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://www.datocms-assets.com/56146/1634160117-vectorcss.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://www.datocms-assets.com/56146/1634160142-vectorjs.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://www.datocms-assets.com/56146/1634160161-vectortw.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://www.datocms-assets.com/56146/1634160184-groupreact.png"
            alt=""
          />
        </li>
        <li>
          <img
            src="https://www.datocms-assets.com/56146/1634160206-logosnextjs.png"
            alt=""
          />
        </li>
      </ul>
    </section>
  );
};

export default Skills;

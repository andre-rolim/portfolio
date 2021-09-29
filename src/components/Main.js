import React from "react";
import styles from "/styles/Main.module.css";

const Main = () => {
  return (
    <section className={styles.main}>
      <div className={styles.descricao}>
        <h2>Olá, eu sou o André Rolim</h2>
        <span>Desenvolvedor Front-End</span>
        <button className={styles.cv}>
          <a href="">Download CV</a>
        </button>
        <button className={styles.contato}>
          <a href="">Entrar em contato</a>
        </button>
      </div>
      <div className={styles.img}>
        <img className={styles.imgConfig} alt="" />
      </div>
    </section>
  );
};

export default Main;

import React from "react";
import styles from "/styles/Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <p>Portfólio</p>
      <ul>
        <li>
          <a href="#">Sobre mim</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Minhas skills</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

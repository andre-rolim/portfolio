import React from "react";
import styles from "/styles/Servicos.module.css";

const Servicos = () => {
  return (
    <section className={styles.main}>
      <h2 className="h2Titulo">Serviços</h2>
      <ul className={styles.servicos}>
        <li>
          <img
            src="https://www.datocms-assets.com/56146/1634158502-codesites.png"
            alt=""
          />
          <p>Criação de Sites</p>
        </li>
        <li>
          <img
            src="https://www.datocms-assets.com/56146/1634158563-figmauidesign.png"
            alt=""
          />
          <p>UI Designer</p>
        </li>
        <li>
          <img
            src="https://www.datocms-assets.com/56146/1634158603-smartphoneresponsivo.png"
            alt=""
          />
          <p>Sites responsivos</p>
        </li>
      </ul>
    </section>
  );
};

export default Servicos;

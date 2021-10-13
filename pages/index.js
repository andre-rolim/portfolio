import Infos from "../src/components/Infos";
import Main from "../src/components/Main";
import Menu from "../src/components/Menu";
import styles from "../styles/Home.module.css";
import React from "react";
import Projetos from "../src/components/Projetos";
import Skills from "../src/components/Skills";
import Servicos from "../src/components/Servicos";
import Footer from "../src/components/Footer";

export default function Home() {
  //const [portfolio, setPortfolio] = React.useState([]);

  return (
    <section className={styles.container}>
      <Menu />
      <Main />
      <Infos />
      <Projetos />
      <Servicos />
      <Skills />
      <Footer />
    </section>
  );
}

import Infos from "../src/components/Infos";
import Main from "../src/components/Main";
import Menu from "../src/components/Menu";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className={styles.container}>
      <Menu />
      <Main />
      <Infos />
    </section>
  );
}

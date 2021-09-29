import React from "react";
import styles from "/styles/Infos.module.css";

const Infos = () => {
  return (
    <>
      <div className={styles.infos}>
        <h2 className={styles.h2}>Sobre mim</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident
        </p>
      </div>
      <div className={styles.contato}>
        <ul>
          <li>
            <img src="../../public/svg/smile.svg" />
            <h3>Menu Nome</h3>
            <span>André Rolim</span>
          </li>
          <li>
            <img src="../../public/svg/mail.svg" />
            <h3>E-mail</h3>
            <span>andrel.rolimj@gmail.com</span>
          </li>
          <li>
            <img src="../../public/svg/instagram.svg" />
            <h3>Instagram</h3>
            <span>@andrelrj</span>
          </li>
          <li>
            <img src="../../public/svg/phone.svg" />
            <h3>Telefone</h3>
            <span>(11) 99999-9999</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Infos;

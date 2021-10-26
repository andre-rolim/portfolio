import React from "react";
import styles from "/styles/Infos.module.css";

export default function Infos(props) {
  return (
    <>
      <div className={styles.infos}>
        <h2 className="h2Titulo">Sobre mim</h2>
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
            <img src="https://www.datocms-assets.com/56146/1633041980-smile.svg" />
            <h3>Meu Nome</h3>
            <span>André Rolim</span>
          </li>
          <li>
            <img src="https://www.datocms-assets.com/56146/1633041907-mail.svg" />
            <h3>E-mail</h3>
            <p>andrel.rolimj@gmail.com</p>
          </li>
          <li>
            <img src="https://www.datocms-assets.com/56146/1633041863-instagram.svg" />
            <h3>Instagram</h3>
            <span>@andrelrj</span>
          </li>
          <li>
            <img src="https://www.datocms-assets.com/56146/1633041943-phone.svg" />
            <h3>Telefone</h3>
            <span>(11) 99999-9999</span>
          </li>
        </ul>
      </div>
    </>
  );
}

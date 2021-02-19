import React from "react";
import { ReactComponent as Whatsapp } from "../../../assets/img/whatsapp.svg";
import { ReactComponent as Telegram } from "../../../assets/img/telegram.svg";
import { ReactComponent as Viber } from "../../../assets/img/viber.svg";
import { swg } from "../../../assets";

import styles from "./styles.module.css";

function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.icons}>
            <Whatsapp className={styles.icon} />
            <Telegram className={styles.icon} />
            <Viber className={styles.icon} />
          </div>
          <div className={styles.teacherInfo}>
            <p>Анастасия Анатольевна</p>
            <p>+ 375 (25) 533-11-15</p>
            <p>10:00 - 20:00</p>
          </div>
        </div>
        <div className={styles.devInfo}>
          <div className={styles.devInfoContainer}>
            <p>This website made width by</p>
            <img className={styles.devLogo} src={swg} alt="" />
          </div>
          <div className={styles.security}>
            <p>Все права защищены</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

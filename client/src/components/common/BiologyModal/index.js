import React from "react";
import { ReactComponent as Close } from "../../../assets/img/close.svg";
import { chel, whatsap, telega, viber } from "../../../assets/";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { toggleBioModal } from "../../../store/auth/actions";

function BiologyModal() {
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    if (e.target.className === styles.modal) {
      dispatch(toggleBioModal());
    }
  };
  return (
    <div className={styles.modal} onClick={clickHandler}>
      <div className={styles.container}>
        <Close
          onClick={() => dispatch(toggleBioModal())}
          className={styles.closeIcon}
        />
        <div className={styles.authForm}>
          <h3 className={styles.authTitle}>
            Чтобы перейти в раздел Биологии, введите
            <br />
            Ваш логин и пароль:
          </h3>
          <img className={styles.authImg} src={chel} alt="" />
          <input className={styles.input} type="text" placeholder="Ваш Логин" />
          <input
            className={styles.input}
            type="text"
            placeholder="Ваш Пароль"
          />
        </div>
        <div className={styles.otherInfo}>
          <button className={styles.authBtn}>Войти</button>

          <div className={styles.icons}>
            <img className={styles.icon} src={whatsap} alt="" />
            <img className={styles.icon} src={telega} alt="" />
            <img className={styles.icon} src={viber} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiologyModal;

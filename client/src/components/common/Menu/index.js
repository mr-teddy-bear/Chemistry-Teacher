import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Whatsapp } from "../../../assets/img/whatsapp.svg";
import { ReactComponent as Telegram } from "../../../assets/img/telegram.svg";
import { ReactComponent as Viber } from "../../../assets/img/viber.svg";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../../store/auth/actions";
import styles from "./styles.module.css";

function Menu() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div className={styles.menu}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h3>Logo</h3>
        </div>
        <div className={styles.links}>
          {!isAuth && (
            <Link className={styles.link} to="/">
              Главная
            </Link>
          )}

          {!isAuth && (
            <a className={styles.link} href="#test">
              Пробный тест
            </a>
          )}
          {!isAuth && (
            <a className={styles.link} href="#students">
              Ученикам
            </a>
          )}
          {isAuth && (
            <Link className={styles.link} to="/chemistry">
              Мои задания
            </Link>
          )}
          {isAuth && (
            <Link
              className={styles.link}
              onClick={() => dispatch(logOut())}
              to="/"
            >
              Выход
            </Link>
          )}
        </div>
        <div className={styles.icons}>
          <Link to="/">
            <Whatsapp className={styles.menuIcon} />
          </Link>
          <Link to="/">
            <Telegram className={styles.menuIcon} />
          </Link>
          <Link to="/">
            <Viber className={styles.menuIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;

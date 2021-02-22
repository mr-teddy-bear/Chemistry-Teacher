import React from "react";
import Menu from "../common/Menu";
import styles from "./styles.module.css";
import { ReactComponent as Lock } from "../../assets/img/lock.svg";
import { ReactComponent as Check } from "../../assets/img/check.svg";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomeWorkChemistry() {
  const homeworks = useSelector((state) => state.subjects.chemistry);
  return (
    <div className={styles.main}>
      <Menu />
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.textTitle}>
            Химия
            <br />
            Домашнее задание
          </h1>
        </div>
        <div className={styles.bloks}>
          {homeworks.map((homework) => {
            return (
              <Link
                key={homework.id}
                to={
                  homework.status === "active"
                    ? "/chemistryQuestion?test=" + homework.id + "&&id=1"
                    : "/chemistry"
                }
                className={[
                  styles.blok,
                  homework.status === "disabled"
                    ? styles.disabled
                    : homework.status === "waiting"
                    ? styles.waiting
                    : homework.status === "success"
                    ? styles.success
                    : "",
                ].join(" ")}
              >
                <h1 className={styles.blokTitle}>{homework.title}</h1>
                <h5 className={styles.miniTitle}>{homework.subtitle}</h5>
                {homework.status === "disabled" ||
                homework.status === "waiting" ? (
                  <Lock className={styles.lock} />
                ) : homework.status === "success" ? (
                  <Check className={styles.successIcon} />
                ) : (
                  ""
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeWorkChemistry;

import React from "react";
import styles from "./styles.module.css";
import { tick } from "../../assets";

function Question({ questionData }) {
  const { answers, descr, number } = questionData;

  return (
    <>
      <div className={styles.questionNumber}>
        <h1 className={styles.questionNumberTitle}>Вопрос №{number}</h1>
      </div>
      <p className={styles.questionDescr}>{descr}</p>
      <div className={styles.asnwersInfo}>
        <div className={styles.asnwers}>
          <h2 className={styles.answerTitle}>Варианты ответа:</h2>
          {answers.map((answer, idx) => {
            return (
              <p key={answer} className={styles.answser}>
                {" "}
                {idx + 1}. {answer}
              </p>
            );
          })}
        </div>

        <div className={styles.yourAnswer}>
          <h2 className={styles.answerTitle}>Ваш ответ:</h2>
          <div className={styles.yourAnswerForm}>
            <input
              className={styles.formInput}
              type="text"
              placeholder="Ваш ответ"
            />
            <button className={styles.formBtn}>
              <img className={styles.formBtnImg} src={tick} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;

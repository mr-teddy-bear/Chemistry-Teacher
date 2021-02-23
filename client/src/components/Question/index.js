import React, { useState } from "react";
import styles from "./styles.module.css";
import { tick } from "../../assets";
import history from "../../store/history";
import AlertDialog from "../common/AlertDialog";

function Question({ questionData, askValue, addAnswer, idx }) {
  const { answers, descr, number } = questionData;
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const clickHandler = () => {
    addAnswer(value);
    setValue("");
  };
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <AlertDialog
        showAlert={showAlert}
        closeAlert={() => setShowAlert(false)}
      />
      <div className={styles.questionNumber}>
        <h1 className={styles.questionNumberTitle}>Вопрос №{number}</h1>
        <button onClick={() => setShowAlert(true)} className={styles.backBtn}>
          Разделы
        </button>
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
              value={askValue || value}
              onChange={changeHandler}
            />
            <button onClick={clickHandler} className={styles.formBtn}>
              <img className={styles.formBtnImg} src={tick} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;

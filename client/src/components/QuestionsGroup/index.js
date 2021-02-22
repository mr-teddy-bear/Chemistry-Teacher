import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../common/Menu";
import { Link } from "react-router-dom";
import history from "../../store/history";
import Question from "../Question";
import styles from "./styles.module.css";
import { changeStatus } from "../../store/subjects/actions";

function QuestionsGroup() {
  const dispatch = useDispatch();
  const { test, id } = useSelector((state) => state.router.location.query);
  const questions = useSelector((state) => state.subjects.chemistry).filter(
    (chemTest) => chemTest.id === +test
  )[0].questions;
  const [askedQuestion, setAskQuestion] = useState([1, 2, 3, 4, 5]);
  const currentQuestion = questions[id - 1];
  useEffect(() => {
    if (askedQuestion.length === questions.length) {
      dispatch(changeStatus(+test));
      history.push("/chemistry");
    }
  });
  return (
    <div className={styles.main}>
      <Menu />
      <div className={styles.container}>
        <Question questionData={currentQuestion} />
        <div className={styles.questionNumbers}>
          {questions.map((question) => {
            return (
              <Link
                to={
                  "/chemistryQuestion?test=" + test + "&&id=" + question.number
                }
                key={question.number}
                className={[
                  styles.number,
                  question.number === +id
                    ? styles.active
                    : askedQuestion.includes(question.number)
                    ? styles.asked
                    : "",
                ].join(" ")}
              >
                <p className={styles.numberTitle}>{question.number}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuestionsGroup;

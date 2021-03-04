import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminMenu from "../common/AdminMenu";
import Button from "@material-ui/core/Button";
import { Formik, Field } from "formik";
import validationSchema from "./validationLoginSchema";
import CloseIcon from "@material-ui/icons/Close";
import SettingsIcon from "@material-ui/icons/Settings";
import styles from "./styles.module.css";
import {
  getClassInfo,
  getQuestion,
  getTest,
  addQuestion,
  changeMessage,
  deleteQuestion,
} from "../../store/admin/actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import SnackBar from "../common/SnackBar";

function AdminQuestions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestion());
    dispatch(getClassInfo());
    dispatch(getTest());
  }, [dispatch]);
  const isRequesting = useSelector((state) => state.admin.isRequesting);
  const dialogMessage = useSelector((state) => state.admin.message);

  const questions = useSelector((state) => state.admin.questions);
  const razdels = useSelector((state) => state.admin.razdels);
  const tests = useSelector((state) => state.admin.tests);

  const [selectRazdelId, setSelectRazdelId] = useState("");
  const [selectTestId, setSelectTestId] = useState("");

  let filtredQuestions = [];
  const filtredTests = tests.filter((test) => test.razdelId === selectRazdelId);
  if (selectRazdelId) {
    if (selectTestId) {
      filtredQuestions = questions.filter(
        (question) =>
          question.razdelId === selectRazdelId &&
          question.testId === selectTestId
      );
    } else {
      filtredQuestions = questions.filter(
        (question) => question.razdelId === selectRazdelId
      );
    }
  } else {
    filtredQuestions = [...questions];
  }
  // selectTestId
  //   ? (filtredTests = tests.filter((test) => test.razdelId === selectTestId))
  //   : (filtredTests = [...tests]);

  return (
    <div className={styles.main}>
      {isRequesting && (
        <div className={styles.preload}>
          <CircularProgress />
        </div>
      )}
      <AdminMenu text="Вопросы" />
      <div className={styles.mainContainer}>
        <div className={styles.infoBlock}>
          <div className={styles.infoBlockHeader}>
            <h2>Вопросы</h2>
            <div className={styles.filtres}>
              {selectRazdelId && (
                <select
                  onChange={(e) => setSelectTestId(e.target.value)}
                  className={styles.filtredSelect}
                  name=""
                  id=""
                >
                  <option selected value="">
                    Все тесты
                  </option>
                  {filtredTests.map((test) => {
                    return (
                      <option key={test.id} value={test.id}>
                        {test.title}
                      </option>
                    );
                  })}
                </select>
              )}
              <select
                onChange={(e) => setSelectRazdelId(e.target.value)}
                className={styles.filtredSelect}
                name=""
                id=""
              >
                <option selected value="">
                  Все разделы
                </option>
                {razdels.map((razdel) => {
                  return (
                    <option key={razdel.id} value={razdel.id}>
                      {razdel.title} {razdel.subtitle}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <table className={styles.razdelTable}>
            <thead>
              <tr>
                <td>№</td>
                <td>Вопрос</td>
                <td>Ответ</td>
                <td>Класс</td>
                <td>Раздел</td>
                <td>Удалить</td>
                <td>Подробнее</td>
              </tr>
            </thead>
            <tbody>
              {filtredQuestions.map((question) => {
                return (
                  <tr key={question.id}>
                    <td>{question.number}</td>
                    <td className={styles.questionDescr}>{question.descr}</td>
                    <td>{question.answer}</td>
                    <td>{question.testTitle}</td>
                    <td>{question.razdelTitle}</td>
                    <td>
                      <Button
                        onClick={() => dispatch(deleteQuestion(question.id))}
                        color="secondary"
                      >
                        <CloseIcon />
                      </Button>
                    </td>
                    <td>
                      <Button color="primary">
                        <SettingsIcon />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.addBlock}>
          <h2>Добавить вопрос</h2>
          <Formik
            initialValues={{ number: "", question: "", razdel: "", answer: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(addQuestion(values));
              resetForm({ values: "" });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                method="post"
                className={styles.addForm}
                onSubmit={handleSubmit}
              >
                <input
                  className={[
                    styles.formInput,
                    errors.number && touched.number ? styles.inputError : "",
                  ].join(" ")}
                  type="text"
                  name="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.number}
                  placeholder="Номер"
                />
                <input
                  className={[
                    styles.formInput,
                    errors.question && touched.question
                      ? styles.inputError
                      : "",
                  ].join(" ")}
                  type="text"
                  name="question"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.question}
                  placeholder="Вопрос"
                />
                <input
                  className={[
                    styles.formInput,
                    errors.answer && touched.answer ? styles.inputError : "",
                  ].join(" ")}
                  type="text"
                  name="answer"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.answer}
                  placeholder="Ответ"
                />
                <Field
                  className={[
                    styles.selectField,
                    errors.razdel && touched.razdel ? styles.selectError : "",
                  ].join(" ")}
                  as="select"
                  name="razdel"
                >
                  <option disabled selected value="">
                    Выберите тест
                  </option>
                  {tests.map((test) => {
                    return (
                      <option key={test.id} value={test.id}>
                        {test.title}
                      </option>
                    );
                  })}
                </Field>

                <Button
                  type="submit"
                  className={styles.btn}
                  variant="outlined"
                  color="primary"
                >
                  Добавить
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <SnackBar
        dialogMessage={dialogMessage}
        closeHandler={() => dispatch(changeMessage(""))}
      />
    </div>
  );
}

export default AdminQuestions;

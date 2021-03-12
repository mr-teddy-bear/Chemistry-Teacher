import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminMenu from "../common/AdminMenu";
import Button from "@material-ui/core/Button";
import { Formik, Field } from "formik";
import validationSchema from "./validationLoginSchema";
import CloseIcon from "@material-ui/icons/Close";
import styles from "./styles.module.css";
import {
  getClassInfo,
  getTest,
  addTest,
  changeMessage,
  deleteTest,
} from "../../store/admin/actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import SnackBar from "../common/SnackBar";

function AdminTests() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTest());
    dispatch(getClassInfo());
  }, [dispatch]);
  const isRequesting = useSelector((state) => state.admin.isRequesting);
  const dialogMessage = useSelector((state) => state.admin.message);

  const tests = useSelector((state) => state.admin.tests);
  const razdels = useSelector((state) => state.admin.razdels);

  const [selectTestId, setSelectTestId] = useState("");
  let filtredTests = [];
  selectTestId
    ? (filtredTests = tests.filter((test) => test.razdelId === selectTestId))
    : (filtredTests = [...tests]);

  return (
    <div className={styles.main}>
      {isRequesting && (
        <div className={styles.preload}>
          <CircularProgress />
        </div>
      )}
      <AdminMenu text="Тесты" />
      <div className={styles.mainContainer}>
        <div className={styles.infoBlock}>
          <div className={styles.infoBlockHeader}>
            <h2>Тесты</h2>
            <select
              onChange={(e) => setSelectTestId(e.target.value)}
              className={styles.filtredSelect}
              name=""
              id=""
            >
              <option selected value="">
                Все тесты
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
          <table className={styles.razdelTable}>
            <thead>
              <tr>
                <td>№</td>
                <td>Название</td>
                <td>Раздел</td>
                <td>Удалить</td>
              </tr>
            </thead>
            <tbody>
              {filtredTests.map((test) => {
                return (
                  <tr key={test.id}>
                    <td>{test.number}</td>
                    <td>{test.title}</td>
                    <td>{test.razdelTitle}</td>
                    <td>
                      <Button
                        onClick={() => dispatch(deleteTest(test.id))}
                        color="secondary"
                      >
                        <CloseIcon />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.addBlock}>
          <h2>Добавить тест</h2>
          <Formik
            initialValues={{ number: "", question: "", razdel: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(addTest(values));
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
                  placeholder="Название"
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
                    Выберите раздел
                  </option>
                  {razdels.map((razdel) => {
                    return (
                      <option value={razdel.id}>
                        {razdel.title} {razdel.subtitle}
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

export default AdminTests;

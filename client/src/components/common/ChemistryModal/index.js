import React from "react";
import { ReactComponent as Close } from "../../../assets/img/close.svg";
import { chel, whatsap, telega, viber } from "../../../assets/";
import styles from "./styles.module.css";
import { Formik } from "formik";
import validationSchema from "./validationLoginSchema";
import { useDispatch, useSelector } from "react-redux";
import { chemLogin, toggleChemModal } from "../../../store/auth/actions";
import CircularProgress from "@material-ui/core/CircularProgress";

function ChemistryModal() {
  const dispatch = useDispatch();
  const isRequesting = useSelector((state) => state.auth.isRequesting);

  const clickHandler = (e) => {
    if (e.target.className === styles.modal) {
      dispatch(toggleChemModal());
    }
  };
  return (
    <div className={styles.modal} onClick={clickHandler}>
      {isRequesting && (
        <div className={styles.preload}>
          <CircularProgress />
        </div>
      )}
      <div className={styles.container}>
        <Close
          onClick={() => dispatch(toggleChemModal())}
          className={styles.closeIcon}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(chemLogin(values));
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
            <form method="post" onSubmit={handleSubmit}>
              <div className={styles.authForm}>
                <h3 className={styles.authTitle}>
                  Чтобы перейти в раздел Химии, введите
                  <br />
                  Ваш логин и пароль:
                </h3>
                <img className={styles.authImg} src={chel} alt="" />
                <input
                  className={[
                    styles.formInput,
                    errors.email && touched.email ? styles.inputError : "",
                  ].join(" ")}
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <input
                  className={[
                    styles.formInput,
                    errors.password && touched.password
                      ? styles.inputError
                      : "",
                  ].join(" ")}
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
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
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ChemistryModal;

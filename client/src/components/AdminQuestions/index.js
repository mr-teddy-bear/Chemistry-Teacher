import React, { useState } from "react";
import AdminMenu from "../common/AdminMenu";
import styles from "./styles.module.css";

function AdminQuestions() {
  return (
    <div className={styles.main}>
      <AdminMenu text="Вопросы" />
      <div className={styles.mainContainer}>Вопросы</div>
    </div>
  );
}

export default AdminQuestions;

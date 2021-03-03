import React, { useState } from "react";
import AdminMenu from "../common/AdminMenu";
import styles from "./styles.module.css";

function AdminNewResults() {
  return (
    <div className={styles.main}>
      <AdminMenu text="Разделы" />
      <div className={styles.mainContainer}>Результаты новичков</div>
    </div>
  );
}

export default AdminNewResults;

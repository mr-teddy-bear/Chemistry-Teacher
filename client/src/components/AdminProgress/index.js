import React, { useState } from "react";
import AdminMenu from "../common/AdminMenu";
import styles from "./styles.module.css";

function AdminProgress() {
  return (
    <div className={styles.main}>
      <AdminMenu text="Прогресс" />
      <div className={styles.mainContainer}>Прогресс</div>
    </div>
  );
}

export default AdminProgress;

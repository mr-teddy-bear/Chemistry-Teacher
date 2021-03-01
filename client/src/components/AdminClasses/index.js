import React, { useState } from "react";
import AdminMenu from "../common/AdminMenu";
import styles from "./styles.module.css";

function AdminClasses() {
  return (
    <div className={styles.main}>
      <AdminMenu text="Разделы" />
      <div className={styles.mainContainer}>Разделы</div>
    </div>
  );
}

export default AdminClasses;

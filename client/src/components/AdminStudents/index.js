import React, { useState } from "react";
import AdminMenu from "../common/AdminMenu";
import UsersTable from "../common/UsersTable";
import styles from "./styles.module.css";

function AdminStudents() {
  return (
    <div className={styles.main}>
      <AdminMenu text="Ученики" />
      <div className={styles.mainContainer}>
        <UsersTable />
      </div>
    </div>
  );
}

export default AdminStudents;

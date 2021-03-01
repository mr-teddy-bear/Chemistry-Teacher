import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./styles.module.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(1, "Максим", "test@mail.ru", 6.0, "X"),
  createData(2, "Ваня", "test@mail.ru", 9.0, "X"),
  createData(3, "Настя", "test@mail.ru", 16.0, "X"),
  createData(4, "Стас", "test@mail.ru", 3.7, "X"),
  createData(5, "Артем", "test@mail.ru", 16.0, "X"),
];

export default function UsersTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={styles.table}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Имя</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Статус</TableCell>
            <TableCell>Подробнее</TableCell>
            <TableCell>Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

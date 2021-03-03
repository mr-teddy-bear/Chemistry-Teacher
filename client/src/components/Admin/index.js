import React, { useState } from "react";
import AdminMenu from "../common/AdminMenu";
import styles from "./styles.module.css";
import AdminCart from "../common/AdminCart";
import {
  adminstudents,
  razdels,
  progress,
  questions,
  results,
  test,
} from "../../assets/";

function Admin() {
  const [carts, setCarts] = useState([
    {
      img: razdels,
      title: "Разделы",
      descr:
        "Перейдите в раздел для получения подробной информации о ваших разделах. Так же вы можете добавить новый раздел.",
      link: "/admin/razdels",
    },
    {
      img: test,
      title: "Тесты",
      descr:
        "Перейдите в раздел для получения подробной информации о ваших тестах. Так же вы можете создать новый тест.",
      link: "/admin/test",
    },
    {
      img: questions,
      title: "Вопросы",
      descr:
        "Перейдите в раздел для получения подробной информации об уже созданных вопросах, либо создайте новый.",
      link: "/admin/questions",
    },
    {
      img: adminstudents,
      title: "Ученики",
      descr:
        "Перейдите в раздел для получения подробной информации о ваших учениках. Так же вы можете зарегистрировать нового ученика.",
      link: "/admin/students",
    },
    {
      img: progress,
      title: "Прогресс",
      descr:
        "Перейдите в раздел для получения подробной информации о прогрессе ваших учеников.",
      link: "/admin/progress",
    },
    {
      img: results,
      title: "Результаты новичков",
      descr:
        "Перейдите в раздел для получения подробной информации о результатах ваших новых учеников.",
      link: "/admin/new",
    },
  ]);
  return (
    <div className={styles.main}>
      <AdminMenu />
      <div className={styles.mainContainer}>
        {carts.map((cart) => {
          return (
            <AdminCart
              key={cart.title}
              title={cart.title}
              img={cart.img}
              descr={cart.descr}
              link={cart.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Admin;

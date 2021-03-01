import React, { useState } from "react";
import AdminMenu from "../common/AdminMenu";
import styles from "./styles.module.css";
import AdminCart from "../common/AdminCart";
import { adminstudents, razdels, progress, questions } from "../../assets/";

function Admin() {
  const [carts, setCarts] = useState([
    {
      img: adminstudents,
      title: "Ученики",
      descr:
        "Перейдите в раздел для получения подробной информации о ваших учениках. Так же вы можете зарегистрировать нового ученика.",
      link: "/admin/students",
    },
    {
      img: razdels,
      title: "Разделы",
      descr:
        "Перейдите в раздел для получения подробной информации о ваших разделах. Так же вы можете добавить новый раздел.",
      link: "/admin/classes",
    },
    {
      img: questions,
      title: "Вопросы",
      descr:
        "Перейдите в раздел для получения подробной информации об уже созданных вопросах, либо создайте новый.",
      link: "/admin/questions",
    },
    {
      img: progress,
      title: "Прогресс",
      descr:
        "Перейдите в раздел для получения подробной информации о прогрессе ваших учеников.",
      link: "/admin/progress",
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

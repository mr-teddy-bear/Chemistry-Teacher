import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "../common/Menu";
import { main, chem, bio, lent, script, travel, project } from "../../assets";
import styles from "./styles.module.css";
import Footer from "../common/Footer";
import ChemistryModal from "../common/ChemistryModal";
import BiologyModal from "../common/BiologyModal";
import { toggleBioModal, toggleChemModal } from "../../store/auth/actions";

function Home() {
  const dispatch = useDispatch();
  const chemModalOpen = useSelector((state) => state.auth.isChemModal);
  const bioModalOpen = useSelector((state) => state.auth.isBioModal);

  return (
    <div className={styles.main}>
      {chemModalOpen && <ChemistryModal />}
      {bioModalOpen && <BiologyModal />}
      <Menu />
      <div className={styles.welcome}>
        <div className={styles.welcomeContainer}>
          <div className={styles.mainText}>
            <h1 className={styles.welcomeTitle}>
              Добро
              <br />
              Пожаловать
            </h1>
            <p className={styles.welcomeDescr}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br />
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum{" "}
              <br />
              suspendisse ultrices gravida. Risus commodo viverra maecenas{" "}
              <br />
              accumsan lacus vel facilisis.
            </p>
          </div>
          <img className={styles.welcomeImg} src={main} alt="" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.test}>
          <h2 className={styles.testTitle}>Тест #1</h2>
          <p className={styles.testDescr}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            blanditiis consequatur deserunt ea eveniet facilis fugit ipsum
            laboriosam magnam natus quasi quibusdam quidem saepe, sed sint
            suscipit totam? Cumque, esse! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusantium aspernatur at atque
            blanditiis culpa ea enim fugit id illum impedit, magni nam nesciunt
            quaerat quis quisquam reprehenderit repudiandae voluptate? Nemo.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            consectetur culpa enim eum iusto nulla perferendis ratione. Aperiam
            atque blanditiis, enim eos, fuga harum iste libero quasi soluta
            suscipit tempora.
          </p>
          <button className={styles.testBtn}>Пройти тест</button>
        </div>
        <div className={styles.subjects}>
          <div className={styles.subject}>
            <h3 className={[styles.chemistry, styles.subjTitle].join(" ")}>
              Блок Химия
            </h3>
            <p className={styles.subjDescr}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              aut, consequuntur earum eos error explicabo illo nesciunt
              pariatur, perspiciatis!{" "}
            </p>
            <button
              onClick={() => dispatch(toggleChemModal())}
              className={[styles.chem, styles.subjBtn].join(" ")}
            >
              Перейти
            </button>
            <img className={styles.subjImg} src={chem} alt="" />
          </div>

          <div className={styles.subject}>
            <h3 className={[styles.biology, styles.subjTitle].join(" ")}>
              Блок Биология
            </h3>
            <p className={styles.subjDescr}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              aut, consequuntur earum eos error explicabo illo nesciunt
              pariatur, perspiciatis!{" "}
            </p>
            <button
              onClick={() => dispatch(toggleBioModal())}
              className={[styles.bio, styles.subjBtn].join(" ")}
            >
              Перейти
            </button>
            <img className={styles.subjImg} src={bio} alt="" />
          </div>
        </div>
        <div className={styles.advantages}>
          <h1 className={styles.advTitle}>Данный тест поможет Вам:</h1>
          <div className={styles.advBlocks}>
            <div className={styles.advBlock}>
              <img className={styles.advImg} src={lent} alt="" />
              <p className={styles.advDescr}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div className={styles.advBlock}>
              <img className={styles.advImg} src={script} alt="" />
              <p className={styles.advDescr}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div className={styles.advBlock}>
              <img className={styles.advImg} src={travel} alt="" />
              <p className={styles.advDescr}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
            <div className={styles.advBlock}>
              <img className={styles.advImg} src={project} alt="" />
              <p className={styles.advDescr}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.formInfo}>
            <h1 className={styles.formTitle}>
              Как пройти полное тестирование?
            </h1>
            <p className={styles.formInfoDescr}>
              Для того чтобы пройти тестирование нужно: заполнить форму заявки и
              нажать отправить. После чего для Вас придет Ваш логин и пароль от
              кабинета пользователя.
            </p>
          </div>
          <div className={styles.formTest}>
            <div>
              <p className={styles.inputText}>Ваше Имя:</p>
              <input
                className={styles.input}
                type="text"
                name=""
                placeholder="Name"
              />
              <p className={styles.inputText}>Ваш номер телефона</p>
              <input
                className={styles.input}
                type="text"
                name=""
                placeholder="Phone"
              />
              <p className={styles.inputText}>Ваш E-mail</p>
              <input
                className={styles.input}
                type="text"
                name=""
                placeholder="E-mail"
              />
            </div>
            <div>
              <button className={styles.inputBtn}>Отправить</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

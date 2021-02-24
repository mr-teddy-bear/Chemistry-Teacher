import { addClass, regUser, addUserInClass, addQuestion } from "./service.js";

const regUserController = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const newUser = await regUser(email, password, name);
    res.status(201).json({
      message: `Создан пользователь ${name} email: ${email} и паролем ${newUser.password}`,
    });
  } catch (e) {
    res.status(400).json({ message: e.message || "Bad request" });
  }
};

const addClassController = async (req, res) => {
  try {
    const { title, subtitle } = req.body;
    const classes = await addClass(title, subtitle);
    res.json({ classes });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const addUserInClassController = async (req, res) => {
  try {
    const { email, classId } = req.body;
    const clas = await addUserInClass(email, classId);
    res.status(201).json({
      message: `Пользователь ${email} добавлен в класс ${clas.title}`,
    });
  } catch (e) {
    res.status(400).json({ message: e.message || "Bad request" });
  }
};
const addQuestionController = async (req, res) => {
  try {
    const { number, descr, classId, answers } = req.body;
    const question = await addQuestion(number, descr, classId, answers);
    res.status(201).json({
      message: `Создан новый вопрос ${question}`,
    });
  } catch (e) {
    res.status(400).json({ message: e.message || "Bad request" });
  }
};
// const getTransactionsController = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const allTransactions = await getTransaction(userId);
//     res.json({
//       message: `Количество транзакций: ${allTransactions.length}`,
//       allTransactions,
//     });
//   } catch (e) {
//     res.status(500).json({ message: e.message });
//   }
// };

// const addTransactionController = async (req, res) => {
//   try {
//     const { title, type, sumOperation } = req.body;
//     const userId = req.user._id;
//     const newTransaction = await addTransaction(
//       title,
//       type,
//       sumOperation,
//       userId
//     );
//     res.json({
//       message: `Произведена транзакция ${title},  currentMoney: ${newTransaction.currentMoney}`,
//     });
//   } catch (e) {
//     res.status(400).json({ message: e.message || "Bad request..." });
//   }
// };

export {
  addClassController,
  regUserController,
  addUserInClassController,
  addQuestionController,
};

import { getInfoAboutClass, changeTestStatus } from "./service.js";

const getInfoAboutClassController = async (req, res) => {
  try {
    const userId = req.user._id;
    const classInfo = await getInfoAboutClass(userId);
    res.json(classInfo);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const changeTestStatusController = async (req, res) => {
  try {
    const userId = req.user._id;
    const { title, subtitle, status } = req.body;
    const classInfo = await changeTestStatus(userId, title, subtitle, status);
    res.json(classInfo);
  } catch (e) {
    res.status(500).json({ message: e.message });
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

export { getInfoAboutClassController, changeTestStatusController };

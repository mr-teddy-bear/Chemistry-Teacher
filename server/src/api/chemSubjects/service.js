import ChemUsers from "../../models/ChemUsers.js";
import ChemClasses from "../../models/ChemClasses.js";

const getInfoAboutClass = async (userId) => {
  const user = await ChemUsers.findOne({ _id: userId });
  const statuses = user.classStatus.map((stats, idx) => {
    return {
      id: idx + 1,
      title: stats.title,
      subtitle: stats.subtitle,
      status: stats.status,
    };
  });
  console.log(statuses);
  return statuses;
};

// const getTransaction = async (userId) => {
//   const allTransactions = await Transactions.find({ userId });
//   const transactions = allTransactions.map((transaction) => {
//     return {
//       id: transaction._id,
//       title: transaction.title,
//       sumOperation: parseInt(transaction.sumOperation),
//       type: transaction.type,
//       date: transaction.date,
//     };
//   });
//   return transactions;
// };

// const addTransaction = async (title, type, sumOperation, userId) => {
//   const finalTransaction = await Transactions.findOne({ userId }).sort({
//     _id: -1,
//   });

//   const finalMoney = !finalTransaction
//     ? 0
//     : parseInt(finalTransaction.currentMoney);
//   const currentMoney = finalMoney + sumOperation;
//   const transaction = await Transactions.create({
//     title,
//     currentMoney,
//     type,
//     sumOperation,
//     userId,
//   });
//   await transaction.save();

//   return transaction;
// };

export { getInfoAboutClass };

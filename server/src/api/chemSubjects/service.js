import ChemUsers from "../../models/ChemUsers.js";
import ChemClasses from "../../models/ChemClasses.js";
import ChemProgress from "../../models/ChemProgress.js";
import ChemQuestions from "../../models/ChemQuestions.js";

const getInfoAboutClass = async (userId) => {
  const progresses = await ChemProgress.find({ userId });

  const progress = progresses.map(async (prog, idx) => {
    const titles = await ChemClasses.findOne({
      _id: prog.classStatus.class,
    });
    return {
      id: idx + 1,
      title: titles.title,
      subtitle: titles.subtitle,
      status: prog.classStatus.status,
      questions: await ChemQuestions.find({ classId: prog.classStatus.class }),
    };
  });

  return await Promise.all(progress).then((res) => {
    return res;
  });
};

const changeTestStatus = async (userId, title, subtitle, status) => {
  const chemClass = await ChemClasses.findOne({ title, subtitle });
  const chemClassId = chemClass._id;

  await ChemProgress.findOneAndUpdate(
    {
      userId,
      "classStatus.class": chemClassId,
    },
    { "classStatus.status": status }
  );
  const classes = await getInfoAboutClass(userId);
  return classes;
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

export { getInfoAboutClass, changeTestStatus };

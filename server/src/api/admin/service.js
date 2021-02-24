import ChemUsers from "../../models/ChemUsers.js";
import ChemClasses from "../../models/ChemClasses.js";
import ChemQuestions from "../../models/ChemQuestions.js";
import ChemProgress from "../../models/ChemProgress.js";
import bcrypt from "bcrypt";

const regUser = async (email, password, name) => {
  const candidate = await ChemUsers.findOne({ email });
  if (candidate) {
    throw new Error("Пользователь уже существует");
  }
  const hashPassword = await bcrypt.hash(password, 12);

  const user = new ChemUsers({
    email,
    password: hashPassword,
    name,
  });
  await user.save();
  return user;
};

const addClass = async (title, subtitle) => {
  const candidate = await ChemClasses.findOne({ title, subtitle });
  if (candidate) {
    throw new Error("Такой раздел уже создан");
  }

  const newClass = new ChemClasses({
    title,
    subtitle,
  });
  await newClass.save();
  return newClass;
};

const addUserInClass = async (email, classId) => {
  const user = await ChemUsers.findOne({ email });
  const clas = await ChemClasses.findOneAndUpdate(
    { _id: classId },
    { $push: { userId: user._id } }
  );
  const newUserProgress = await new ChemProgress({
    userId: user._id,
    classStatus: {
      class: classId,
      status: "disabled",
    },
  });
  await newUserProgress.save();
  return clas;
};
const addQuestion = async (number, descr, classId, answers) => {
  const newQuestion = new ChemQuestions({
    number,
    descr,
    classId,
    answers,
  });
  await newQuestion.save();
  return newQuestion;
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

export { regUser, addClass, addUserInClass, addQuestion };

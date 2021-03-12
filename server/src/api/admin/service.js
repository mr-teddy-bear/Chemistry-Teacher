import ChemUsers from "../../models/ChemUsers.js";
import ChemThemes from "../../models/ChemThemes.js";
import ChemQuestions from "../../models/ChemQuestions.js";
import ChemProgress from "../../models/ChemProgress.js";
import ChemRazdels from "../../models/ChemRazdels.js";
import bcrypt from "bcrypt";

//---------RAZDEL START-------------
//---------RAZDEL START-------------
const addRazdel = async (title, subtitle) => {
  const candidate = await ChemRazdels.findOne({ title, subtitle });
  if (candidate) {
    throw new Error("Такой раздел уже создан");
  }

  const newRazdel = new ChemRazdels({
    title,
    subtitle,
  });
  await newRazdel.save();
  return getRazdel();
};

const deleteRazdel = async (id) => {
  const candidate = await ChemRazdels.deleteOne({ _id: id });
  return getRazdel();
};

const getRazdel = async () => {
  const razdels = await ChemRazdels.find();
  const filtredRazdels = razdels.map((razdel, idx) => {
    return {
      number: idx + 1,
      id: razdel._id,
      title: razdel.title,
      subtitle: razdel.subtitle,
    };
  });
  return filtredRazdels;
};
//---------RAZDEL END-------------
//---------RAZDEL END-------------

//---------TEST START-------------
//---------TEST START-------------
const addTest = async (number, question, razdel) => {
  const candidate = await ChemThemes.findOne({ number, title: question });
  if (candidate) {
    throw new Error("Такой тест уже создан");
  }

  const newTest = new ChemThemes({
    title: question,
    number,
    razdelId: razdel,
  });
  await newTest.save();
  return getTest();
};

const getTest = async () => {
  const tests = await ChemThemes.find().sort({ _id: "desc" });
  const filtredTests = tests.map(async (test, idx) => {
    const razdelInfo = await ChemRazdels.findOne({ _id: test.razdelId });
    return {
      number: test.number,
      id: test._id,
      title: test.title,
      razdelId: test.razdelId,
      razdelTitle: `${razdelInfo.title} ${razdelInfo.subtitle}`,
    };
  });

  return await Promise.all(filtredTests).then((res) => {
    return res;
  });
};

const deleteTest = async (id) => {
  const candidate = await ChemThemes.deleteOne({ _id: id });
  return getTest();
};
//---------TEST END-------------
//---------TEST END-------------

//---------QUESTION START-------------
//---------QUESTION START-------------
const addQuestion = async (number, descr, testId, answer) => {
  const newQuestion = new ChemQuestions({
    number,
    descr,
    testId,
    answer,
  });
  await newQuestion.save();
  return getQuestion();
};

const getQuestion = async () => {
  const questions = await ChemQuestions.find().sort({ _id: "desc" });
  const filtredQuestions = questions.map(async (question) => {
    const testInfo = await ChemThemes.findOne({ _id: question.testId });
    const razdelInfo = await ChemRazdels.findOne({ _id: testInfo.razdelId });
    return {
      number: question.number,
      id: question._id,
      descr: question.descr,
      answer: question.answer,
      testId: question.testId,
      testTitle: `${testInfo.number}. ${testInfo.title}`,
      razdelTitle: `${razdelInfo.title} ${razdelInfo.subtitle}`,
      razdelId: testInfo.razdelId,
    };
  });
  return await Promise.all(filtredQuestions).then((res) => {
    return res;
  });
};

const deleteQuestion = async (id) => {
  const candidate = await ChemQuestions.deleteOne({ _id: id });
  return getQuestion();
};
//---------QUESTION END-------------
//---------QUESTION END-------------

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
  await ChemRazdels.updateMany(
    {},
    { $push: { userInfo: { userId: user._id } } }
  );

  const test = await ChemThemes.find();

  test.map(async (test) => {
    let progress = new ChemProgress({
      userId: user._id,
      testStatus: {
        test: test._id,
        status: "disabled",
      },
    });
    await progress.save();
  });

  return user;
};

const addUserInTest = async (email, testId) => {
  const user = await ChemUsers.findOne({ email });
  const newUserProgress = await new ChemProgress({
    userId: user._id,
    testStatus: {
      test: testId,
      status: "disabled",
    },
  });
  await newUserProgress.save();
  return newUserProgress;
};

const getUsers = async () => {
  const users = await ChemUsers.find();
  const filtredUsers = users.map((user, idx) => {
    return {
      number: idx + 1,
      id: user._id,
      name: user.name,
      email: user.email,
    };
  });
  return filtredUsers;
};

const changeRazdelStatus = async (userId, title, subtitle, status) => {
  const chemRazdel = await ChemRazdels.findOneAndUpdate(
    { title, subtitle, "userInfo.userId": userId },
    {
      $set: {
        "userInfo.$.status": status,
      },
    }
  );
  return chemRazdel;
};

const changeTestStatus = async (userId, title, status) => {
  const chemTest = await ChemThemes.findOne({ title });
  const chemTestId = chemTest._id;

  const progress = await ChemProgress.findOneAndUpdate(
    {
      userId,
      "testStatus.test": chemTestId,
    },
    { "testStatus.status": status }
  );
  return progress;
};

export {
  addRazdel,
  regUser,
  addTest,
  addUserInTest,
  addQuestion,
  getUsers,
  changeRazdelStatus,
  changeTestStatus,
  getRazdel,
  deleteRazdel,
  getTest,
  deleteTest,
  getQuestion,
  deleteQuestion,
};

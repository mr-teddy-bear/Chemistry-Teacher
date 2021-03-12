import {
  addTest,
  regUser,
  addUserInTest,
  addQuestion,
  getQuestion,
  deleteQuestion,
  getUsers,
  addRazdel,
  changeRazdelStatus,
  changeTestStatus,
  getRazdel,
  deleteRazdel,
  getTest,
  deleteTest,
} from "./service.js";

//---------RAZDEL START-------------
//---------RAZDEL START-------------
const addRazdelController = async (req, res) => {
  try {
    const { title, subtitle } = req.body;
    const razdels = await addRazdel(title, subtitle);
    res.json(razdels);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const getRazdelController = async (req, res) => {
  try {
    const razdels = await getRazdel();
    res.status(201).json(razdels);
  } catch (e) {
    res.status(400).json({ message: e.message || "Bad request" });
  }
};
const deleteRazdelController = async (req, res) => {
  try {
    const { id } = req.body;
    const razdels = await deleteRazdel(id);
    res.json(razdels);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
//---------RAZDEL END-------------
//---------RAZDEL END-------------

//---------TEST START-------------
//---------TEST START-------------
const getTestController = async (req, res) => {
  try {
    const tests = await getTest();
    res.status(201).json(tests);
  } catch (e) {
    res.status(400).json({ message: e.message || "Bad request" });
  }
};
const addTestController = async (req, res) => {
  try {
    const { number, question, razdel } = req.body;
    const tests = await addTest(number, question, razdel);
    res.json(tests);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const deleteTestController = async (req, res) => {
  try {
    const { id } = req.body;
    const tests = await deleteTest(id);
    res.json(tests);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
//---------TEST END-------------
//---------TEST END-------------

//---------QUESTION START-------------
//---------QUESTION START-------------
const addQuestionController = async (req, res) => {
  try {
    const { number, descr, testId, answer } = req.body;
    const questions = await addQuestion(number, descr, testId, answer);
    res.status(201).json(questions);
  } catch (e) {
    res.status(400).json({ message: e.message || "Bad request" });
  }
};
const getQuestionController = async (req, res) => {
  try {
    const questions = await getQuestion();
    res.status(201).json(questions);
  } catch (e) {
    res.status(400).json({ message: e.message || "Bad request" });
  }
};
const deleteQuestionController = async (req, res) => {
  try {
    const { id } = req.body;
    const tests = await deleteQuestion(id);
    res.json(tests);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
//---------QUESTION END-------------
//---------QUESTION END-------------

const regUserController = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const newUser = await regUser(email, password, name);
    res.status(201).json({ newUser });
  } catch (e) {
    res.status(400).json({ message: e.message || "Bad request" });
  }
};
const addUserInTestController = async (req, res) => {
  try {
    const { email, testId } = req.body;
    const progress = await addUserInTest(email, testId);
    res.status(201).json({ progress });
  } catch (e) {
    res.status(400).json({ message: e.message || "Bad request" });
  }
};
const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(201).json(users);
  } catch (e) {
    res.status(400).json({ message: e.message || "Bad request" });
  }
};

const changeRazdelStatusController = async (req, res) => {
  try {
    const { userId, title, subtitle, status } = req.body;
    const razdel = await changeRazdelStatus(userId, title, subtitle, status);
    res.json(razdel);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const changeTestStatusController = async (req, res) => {
  try {
    const { userId, title, status } = req.body;
    const progress = await changeTestStatus(userId, title, status);
    res.json({ progress });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export {
  addTestController,
  regUserController,
  addUserInTestController,
  addQuestionController,
  getUsersController,
  addRazdelController,
  changeRazdelStatusController,
  changeTestStatusController,
  getRazdelController,
  deleteRazdelController,
  getTestController,
  deleteTestController,
  getQuestionController,
  deleteQuestionController,
};

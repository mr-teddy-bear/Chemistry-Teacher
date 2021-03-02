import {
  addTest,
  regUser,
  addUserInTest,
  addQuestion,
  getUsers,
  addRazdel,
  changeRazdelStatus,
  changeTestStatus,
} from "./service.js";

const addRazdelController = async (req, res) => {
  try {
    const { title, subtitle } = req.body;
    const razdel = await addRazdel(title, subtitle);
    res.json({ razdel });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const addTestController = async (req, res) => {
  try {
    const { title, number, razdelTitle, razdelSubtitle } = req.body;
    const test = await addTest(title, number, razdelTitle, razdelSubtitle);
    res.json({ test });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const addQuestionController = async (req, res) => {
  try {
    const { number, descr, testId, answer } = req.body;
    const question = await addQuestion(number, descr, testId, answer);
    res.status(201).json({
      message: `Создан новый вопрос ${question}`,
    });
  } catch (e) {
    res.status(400).json({ message: e.message || "Bad request" });
  }
};

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
};

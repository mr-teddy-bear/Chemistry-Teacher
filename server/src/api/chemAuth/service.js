import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ChemUsers from "../../models/ChemUsers.js";
import config from "../../config/environment.js";

const {
  app: { jwtSecret, jwtTimeToLive },
} = config;

const loginUser = async (email, password) => {
  const user = await ChemUsers.findOne({ email });
  if (!user) {
    throw new Error("Пользователь не найден");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Неверный пароль");
  }
  const token = jwt.sign(
    {
      userId: user._id,
    },
    jwtSecret,
    { expiresIn: jwtTimeToLive }
  );
  const resObj = {
    token,
    user: user.email,
    name: user.name,
  };
  return resObj;
};

const regUser = async (email, password, name) => {
  const candidate = await ChemUsers.findOne({ email });
  if (candidate) {
    throw new Error("Пользователь уже существует");
  }
  const hashPassword = await bcrypt.hash(password, 12);
  const classStatus = [
    { title: "7", subtitle: "класс", status: "active" },
    { title: "8", subtitle: "класс", status: "disabled" },
    { title: "9", subtitle: "класс", status: "disabled" },
    { title: "10", subtitle: "класс", status: "disabled" },
    { title: "11", subtitle: "класс", status: "disabled" },
    { title: "ЦТ", subtitle: "", status: "disabled" },
    { title: "", subtitle: "контрольные работы", status: "disabled" },
  ];
  const user = new ChemUsers({
    email,
    password: hashPassword,
    name,
    classStatus,
  });
  await user.save();
  return user;
};

export { loginUser, regUser };

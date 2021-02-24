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

export { loginUser };

import { loginUser } from "./service.js";

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const resObj = await loginUser(email, password);
    const { token, user, name } = resObj;
    res.status(200).json({
      message: `${name} выполнил вход ${user}. Создан токен ${token}`,
      token,
      user,
      name,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export { loginController };

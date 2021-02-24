import { Router } from "express";
import { loginController } from "./controller.js";
import passport from "../../config/passport.js";
//import validation from '../../midleware/validation';
//import regSchema from '../../midleware/validationLoginSchema';

const router = Router();

// login
router.post(
  "/",
  passport.authenticate("local", { session: false }),
  loginController
);

export default router;

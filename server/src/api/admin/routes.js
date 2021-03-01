import { Router } from "express";
import {
  addClassController,
  regUserController,
  addUserInClassController,
  addQuestionController,
  getUserController,
} from "./controller.js";
//import validation from '../../midleware/validation';
//import regSchema from '../../midleware/validationLoginSchema';

const router = Router();

// /admin
router.post("/regUser", regUserController);
router.get("/getUser", getUserController);
router.post("/addClass", addClassController);
router.post("/addUserInClass", addUserInClassController);
router.post("/addQuestion", addQuestionController);

// router.get('/', getTransactionsController)
// router.post('/', addTransactionController);

export default router;

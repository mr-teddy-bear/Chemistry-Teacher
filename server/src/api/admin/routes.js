import { Router } from "express";
import {
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
} from "./controller.js";
//import validation from '../../midleware/validation';
//import regSchema from '../../midleware/validationLoginSchema';

const router = Router();

// /admin
router.post("/razdels", addRazdelController);
router.get("/razdels", getRazdelController);
router.delete("/razdels", deleteRazdelController);

router.post("/test", addTestController);
router.get("/test", getTestController);
router.delete("/test", deleteTestController);

router.post("/question", addQuestionController);
router.get("/question", getQuestionController);
router.delete("/question", deleteQuestionController);

router.post("/regUser", regUserController);
router.get("/getUsers", getUsersController);

router.post("/addUserInTest", addUserInTestController);

router.post("/changeRazdelStatus", changeRazdelStatusController);
router.post("/changeTestStatus", changeTestStatusController);

// router.get('/', getTransactionsController)
// router.post('/', addTransactionController);

export default router;

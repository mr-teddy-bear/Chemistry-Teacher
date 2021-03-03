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

router.post("/addQuestion", addQuestionController);
router.post("/regUser", regUserController);
router.post("/addUserInTest", addUserInTestController);
router.get("/getUsers", getUsersController);
router.post("/changeRazdelStatus", changeRazdelStatusController);
router.post("/changeTestStatus", changeTestStatusController);

// router.get('/', getTransactionsController)
// router.post('/', addTransactionController);

export default router;

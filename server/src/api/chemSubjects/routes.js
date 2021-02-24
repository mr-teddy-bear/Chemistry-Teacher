import { Router } from "express";
import { getInfoAboutClassController } from "./controller.js";
//import validation from '../../midleware/validation';
//import regSchema from '../../midleware/validationLoginSchema';

const router = Router();

// /chemistry
router.get("/", getInfoAboutClassController);

// router.get('/', getTransactionsController)
// router.post('/', addTransactionController);

export default router;

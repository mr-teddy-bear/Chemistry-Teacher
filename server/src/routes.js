import { Router } from "express";
import chemAuthRouter from "./api/chemAuth/index.js";
import bioAuthRouter from "./api/bioAuth/index.js";
import adminRouter from "./api/admin/index.js";
import chemSubjRouter from "./api/chemSubjects/index.js";
import passport from "./config/passport.js";
// import { version } from '../package.json';

const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "API",
    data: {
      version: `1.0`,
    },
  });
});

router.use("/admin", adminRouter);
router.use("/chemlogin", chemAuthRouter);
router.use(
  "/chemistry",
  passport.authenticate("jwt", { session: false }),
  chemSubjRouter
);
router.use("/biologin", bioAuthRouter);

export default router;

import { Router } from "express";
import chemAuthRouter from "./api/chemAuth/index.js";
import bioAuthRouter from "./api/bioAuth/index.js";

//import transRouter from "./api/money/index.js";
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

router.use("/chemlogin", chemAuthRouter);
router.use("/biologin", bioAuthRouter);
// router.use('/transactions', passport.authenticate('jwt', { session: false }), transRouter)

export default router;

import { Router } from "express";
import router from "./products.router.js";
const router = Router();

router.use(router);

const mainRouter = router;
export default mainRouter;

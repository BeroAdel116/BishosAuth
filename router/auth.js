import Express from "express";
const router = Express.Router()
import login from "../controllers/auth.js";

router.route('/login').post(login)

export {router}

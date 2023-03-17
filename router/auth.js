import Express from "express";
const router = Express.Router()
import login from "../controllers/auth.js";

router.route('/login',login)

export {router}
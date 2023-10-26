import { Router } from "express";
import { register, login, logout, profile, verifyToken } from "../controllers/auto.controller.js";
import {requiredAuth} from "../middliewares/tokenValidation.js"
import {registerSchema, loginSchema} from "../schemas/auth.schema.js";
import {validateSchema} from "../middliewares/validator.middliewares.js"

const router = Router();

router.post('/register',validateSchema(registerSchema), register);
router.post('/login',validateSchema(loginSchema), login);
router.post('/logout',logout);
router.get('/verify',verifyToken);
router.get('/profile',requiredAuth, profile);
export default router;
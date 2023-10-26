import { Router } from "express";
import { getTask,getTasks,createTask,deleteTask,updateTask } from "../controllers/task.controller.js";
import { requiredAuth } from "../middliewares/tokenValidation.js";
import{createTaskSchema} from'../schemas/task.schema.js'
import { validateSchema } from "../middliewares/validator.middliewares.js";
const router = Router();

router.get('/tasks',requiredAuth, getTasks)
router.get('/task/:id',requiredAuth, getTask)
router.post('/task',requiredAuth,validateSchema(createTaskSchema), createTask)
router.put('/task/:id',requiredAuth,  updateTask)
router.delete('/task/:id',requiredAuth, deleteTask)

export default router;
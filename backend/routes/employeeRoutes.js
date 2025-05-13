import express from 'express';
import { getAllEmployees, addEmployee } from '../controllers/employeeController.js';

const router = express.Router();

router.get('/', getAllEmployees);
router.post('/', addEmployee);

export default router;

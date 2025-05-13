import Employee from '../models/Employee.js';

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch employees' });
  }
};

export const addEmployee = async (req, res) => {
  try {
    const newEmp = new Employee(req.body);
    await newEmp.save();
    res.status(201).json(newEmp);
  } catch (err) {
    res.status(400).json({ message: 'Error adding employee' });
  }
};

import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  position: String,
  email: String,
  hireDate: Date,
});

export default mongoose.model('Employee', employeeSchema);

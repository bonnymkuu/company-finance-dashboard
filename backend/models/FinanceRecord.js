import mongoose from 'mongoose';

const financeRecordSchema = new mongoose.Schema({
  type: { type: String, enum: ['income', 'expense'] },
  amount: Number,
  category: String,
  date: Date,
  notes: String,
});

export default mongoose.model('FinanceRecord', financeRecordSchema);

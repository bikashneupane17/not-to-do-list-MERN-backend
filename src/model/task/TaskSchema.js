import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  hour: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    default: "entry",
  },
});

export default mongoose.model("Task", taskSchema);

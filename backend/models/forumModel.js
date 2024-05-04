import mongoose from "mongoose";

const forumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  body: {
    type: String,
    required: true,
  },
});

const Forum = mongoose.model("Forum", forumSchema);

export default Forum;

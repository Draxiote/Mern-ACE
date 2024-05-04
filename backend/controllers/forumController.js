import asyncHandler from "express-async-handler";
import Forum from "../models/forumModel.js";

// @desc    Make a new forum
// @route   POST /api/forums
// @access  Public
const makeForum = asyncHandler(async (req, res) => {
  const { name, topic, body } = req.body;

  const forum = await Forum.create({
    name,
    topic,
    body,
  });

  console.log(forum);

  if (forum) {
    res.status(201).json({
      _id: forum._id,
      name: forum.name,
      topic: forum.topic,
      body: forum.body,
    });
  } else {
    res.status(400);
    throw new Error("Invalid forum data");
  }
});

export { makeForum };

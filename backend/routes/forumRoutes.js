import express from 'express';
import { makeForum } from '../controllers/forumController.js';

const router = express.Router();

router.post('/forums', makeForum);
router.get('/forum', async (req, res) => {
    try {
      const forums = await Forum.find();
      res.json(forums);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default router;
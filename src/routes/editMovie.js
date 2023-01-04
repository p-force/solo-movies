import express from 'express';
import { Movie } from '../db/models';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const movie = Movie.findOne({ where: { id } });
  const initState = { path: req.originalUrl, movie };
  res.layout(initState);
});

export default router;

import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.layout(initState);
});

export default router;

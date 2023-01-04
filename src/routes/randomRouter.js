import express from 'express';
import fs from 'fs/promises';

const router = express.Router();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

router.get('/random', async (req, res) => {
  const dir1 = __dirname.slice(0, __dirname.lastIndexOf('/')).concat('/movies.json');
  const moviesJson = await fs.readFile(dir1, 'utf-8');
  const movies = JSON.parse(moviesJson);

  const moviesCopy = [...movies];
  movies.map((el, i) => (el.status === true ? moviesCopy.splice(i, 1) : el));
  res.json(movies[getRandomInt(moviesCopy.length - 1)]);
});

export default router;

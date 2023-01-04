import express from 'express';
import { Movie } from '../db/models';

const router = express.Router();

router.get('/watched', async (req, res) => {
  const films = await Movie.findAll({
    where: { status: true },
  });
  const initState = { path: req.originalUrl, films };
  res.layout(initState);
});

router.get('/favourite', async (req, res) => {
  const films = (await Movie.findAll({
    order: [
      ['id', 'DESC']],
  })).filter((el) => parseFloat(el.mark) > 6);
  console.log(films);
  const initState = { path: req.originalUrl, films };
  res.layout(initState);
});

router.get('/lastAdd', async (req, res) => {
  const films = await Movie.findAll({
    order: [
      ['id', 'DESC']],
  });
  let a = 0;
  const initState = {
    path: req.originalUrl,
    films: films.map((el) => {
      if (a < 6) { a++; return el; }
      return null;
    }).filter((el) => el !== null),
  };
  res.layout(initState);
});

export default router;

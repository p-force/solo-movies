import express from 'express';
import { Movie, Data } from '../db/models';
import writeFilms from '../utils/writeInJson';

const router = express.Router();

router.get('/film', async (req, res) => {
  const films = await Movie.findAll({
    order: [
      ['id', 'ASC']],
  });
  console.log(films);
  res.json(films);
});

router.route('/watched')
  .get(async (req, res) => {
    const films = await Movie.findAll({
      where: { status: true },
    });
    res.json(films);
  });

router.route('/favourite')
  .get(async (req, res) => {
    const films = (await Movie.findAll({
      order: [
        ['id', 'DESC']],
    })).filter((el) => parseFloat(el.mark) > 6);
    res.json(films || []);
  });

router.route('/lastAdd')
  .get(async (req, res) => {
    const films = await Movie.findAll({
      order: [
        ['id', 'DESC']],
    });

    let a = 0;
    res.json({
      films: films.map((el) => {
        if (a < 6) { a++; return el; }
        return null;
      }).filter((el) => el !== null),
    });
  });

router.get('/path', (req, res) => {
  const path = req.url;
  console.log('url', path);
  res.json(path);
});

router.post('/newFilm', async (req, res) => {
  const {
    name, date, genre, time, img,
  } = req.body;
  await Movie.findOrCreate({
    where: { name },
    defaults: {
      name,
      date,
      genre,
      status: false,
      img,
      time,
    },
  });
  const movie = await Movie.findOne({ where: { name } });
  // await Data.findOrCreate({
  //   where: { movie_name: movie.id },
  //   defaults: {
  //     about: '',
  //     comment: '',
  //     movie_id: movie.id,
  //   },
  // });
  writeFilms({
    id: movie.id, name, date, genre, time, img,
  });
  res.sendStatus(200);
});

export default router;

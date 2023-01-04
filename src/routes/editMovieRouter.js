import express from 'express';
import { Movie, Data } from '../db/models';

const router = express.Router();

router.post('/movie/:id', async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findOne({ where: { id } });
  res.json(movie);
});
router.post('/movieSave/:id', async (req, res) => {
  const { id } = req.params;

  const { inputs, chBox, about } = req.body;
  await Movie.update({
    name: inputs.name,
    date: inputs.date,
    genre: inputs.genre,
    time: inputs.time,
    img: inputs.img,
    mark: inputs.mark,
    link: inputs.link,
    status: chBox.status,
  }, { where: { id } });
  // await Data.update({ about: about.about, comment: about.comment }, { where: { movie_id: id } });
  res.sendStatus(200);
});

router.get('/about/:id', async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findOne({ where: { id } });
  // const about = await Data.findOne({ where: { movie_id: movie.id } });
  res.json('about');
});

router.post('/status', async (req, res) => {
  const { id, status } = req.body;
  await Movie.update({ status }, { where: { id } });
  const films = await Movie.findAll(({
    order: [
      ['id', 'ASC']],
  }));
  res.json(films.slice(0, 5));
});

router.post('/mark', async (req, res) => {
  const { id, mark } = req.body;
  await Movie.update({ mark }, { where: { id } });
  const films = await Movie.findAll({
    order: [
      ['id', 'ASC']],
  });
  res.json(films);
});

router.post('/link', async (req, res) => {
  const { id, link } = req.body;
  await Movie.update({ link }, { where: { id } });
  const films = await Movie.findAll({
    order: [
      ['id', 'ASC']],
  });
  res.json(films);
});

router.post('/delete', async (req, res) => {
  const { id } = req.body;
  console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', id);
  // await Data.destroy({ where: { movie_id: id } });
  await Movie.destroy({ where: { id } });
  const films = await Movie.findAll({
    order: [
      ['id', 'ASC']],
  });
  // films.map((el) => (el.id === 124 ? console.log(el) : false));
  res.json(films);
  // res.sendStatus(200);
});

export default router;

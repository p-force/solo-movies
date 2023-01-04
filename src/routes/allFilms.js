import express from 'express';
import { promises as fs } from 'fs';
import checkFilms from '../utils/findOrCreateFilms';
// import writeFilms from '../utils/writeInJson';
import { Movie } from '../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const dir = __dirname.slice(0, __dirname.lastIndexOf('/')).concat('/movies.json');
  const moviesJson = await fs.readFile(dir, 'utf-8');
  const moviesObject = JSON.parse(moviesJson);
  for (let i = 0; i < moviesObject.length; i++) {
    checkFilms({
      name: moviesObject[i].name,
      date: moviesObject[i].date,
      genre: moviesObject[i].genre,
      status: moviesObject[i].status,
      mark: moviesObject[i].mark,
      img: moviesObject[i].img,
      time: moviesObject[i].time,
      link: moviesObject[i].link,
    });
  }
  const moviesReturn = (await Movie.findAll({
    order: [
      ['id', 'ASC']],
  })).map((el) => el.dataValues);
  const initState = { path: req.originalUrl, moviesObj: moviesReturn };
  res.layout(initState);
});

export default router;

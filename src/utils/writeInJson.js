// import fs from 'fs/promises';
import { promises as fs } from 'fs';
import { Movie } from '../db/models';

async function writeFilms({
  name, date, genre, time, img,
}) {
  const dir1 = __dirname.slice(0, __dirname.lastIndexOf('/')).concat('/movies.json');
  const movies = (await Movie.findAll({
    order: [
      ['id', 'ASC']],
  })).map((el) => el.dataValues);
  movies.push({
    name,
    date,
    genre,
    status: false,
    mark: null,
    img,
    time,
    link: null,
  });
  await fs.writeFile(dir1, JSON.stringify(movies));
}

export default writeFilms;

import { Movie, Data } from '../db/models';

async function checkFilms(newFilm) {
  await Movie.findOrCreate({
    where: { name: newFilm.name },
    defaults: {
      name: newFilm.name,
      date: newFilm.date,
      genre: newFilm.genre,
      status: newFilm.status,
      mark: newFilm.mark,
      img: newFilm.img,
      time: newFilm.time,
    },
  });
  const movie = await Movie.findOne({ where: { name: newFilm.name } });
  // await Data.findOrCreate({
  //   where: { movie_id: movie.id },
  //   defaults: {
  //     about: '',
  //     comment: '',
  //     movie_id: movie.id,
  //   },
  // });
}

export default checkFilms;

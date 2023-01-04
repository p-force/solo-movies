import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard';

export default function LastAdd({ films, setFilms }) {
  let a = 0;
  const [movies, setMovies] = useState(films.map((el) => {
    if (a < 6) { a++; return el; }
    return null;
  }).filter((el) => el !== null) || []);

  useEffect(() => {
    fetch('/api/v1/lastAdd')
      .then((res) => res.json())
      .then((data) => setMovies(data.films));
  }, [films]);

  return (
    <div className="row d-flex justify-content-center">
      {movies.length ? movies.map((el) => (
        <ShowCard
          key={el.id}
          movie={el}
          setFilms={setFilms}
          index={null}
        />
      )) : (
        <div className="row d-flex justify-content-center" style={{ width: '40rem', margin: '15px' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqCSqrFPxHFdoKWzwUv0m4XsW1AksLJdo4B3y5BTeMgpLFC76ZHE-FmJFH1omTcR5aqQ&usqp=CAU" alt="" />
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import ShowCard from './ShowCard';

export default function WatchedMovies({ films, setFilms }) {
  const [movies, setMovies] = useState(films.filter((el) => el.status === true) || []);

  useEffect(() => {
    fetch('/api/v1/watched')
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [films]);

  return (
    <div className="row d-flex justify-content-center">
      {movies.length ? movies.map((el, i) => (
        <ShowCard
          key={el.id}
          movie={el}
          setFilms={setFilms}
          index={i + 1}
        />
      )) : (
        <div className="row d-flex justify-content-center" style={{ width: '40rem', margin: '15px' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAqCSqrFPxHFdoKWzwUv0m4XsW1AksLJdo4B3y5BTeMgpLFC76ZHE-FmJFH1omTcR5aqQ&usqp=CAU" alt="" />
        </div>
      )}
    </div>
  );
}

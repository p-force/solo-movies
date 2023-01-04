import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import EditMovie from './EditMovie';
import Main from './Main';
import NavBar from './NavBar';
import NewMovie from './NewMovie';
import LastAdd from './LastAdd';
import RandomMovie from './RandomMovie';
import WatchedMovies from './WatchedMovies';
import Favourite from './Favourite';

export default function App({ moviesObj }) {
  const [films, setFilms] = useState(moviesObj || []);

  useEffect(() => {
    if (films === []) {
      fetch('/api/v1/allFilms')
        .then((res) => res.json())
        .then((data) => setFilms(data));
    }
  }, []);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/allFilms" element={<Main films={films} setFilms={setFilms} />} />
        <Route path="/newMovie" element={<NewMovie setFilms={setFilms} />} />
        <Route path="/randomMovie" element={<RandomMovie />} />
        <Route path="/editMovie/:id" element={<EditMovie setFilms={setFilms} />} />
        <Route path="/filter/watched" element={<WatchedMovies films={films} setFilms={setFilms} />} />
        <Route path="/filter/lastAdd" element={<LastAdd films={films} setFilms={setFilms} />} />
        <Route path="/filter/favourite" element={<Favourite films={films} setFilms={setFilms} />} />
      </Routes>
    </div>
  );
}

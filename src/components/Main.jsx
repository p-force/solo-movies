import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Card from './Card';
import ShowCard from './ShowCard';

export default function Main({ films, setFilms }) {
  const [movie, setMovie] = useState(films || []);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('/api/v1/film')
      .then((res) => res.json())
      .then((data) => setMovie(data));
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@');
  }, [films]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const filterMovies = movie.filter((el) => el.name.toLowerCase().includes(input.toLowerCase()));
  console.log(movie.filter((el) => el.name.toLowerCase().includes(input.toLowerCase())));
  return (
    <div style={{ backgroundColor: 'ButtonShadow' }}>
      <div className="d-flex justify-content-between" style={{ marginBottom: '10px' }}>
        <div className="d-flex collapse navbar-collapse dropdown" id="navbarSupportedContent" style={{ marginLeft: '15px', marginTop: '10px' }}>
          <Link to="/" className="dropdown-toggle btn btn-outline-primary" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="/filter/watched" className="dropdown-item">Watched</Link></li>
            <li><Link to="/filter/lastAdd" className="dropdown-item">Last add</Link></li>
            <li><Link to="/filter/favourite" className="dropdown-item">Favourite</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" href="/">Something else here</Link></li>
          </ul>
        </div>
        <div className="d-flex" style={{ margin: '10px 10px 0 0' }}>
          <form role="search" onSubmit={submitHandler}>
            <input onChange={changeHandler} style={{ width: '250px' }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </div>
      </div>
      <div className="row d-flex justify-content-center" style={{ margin: '15px 36px 15px 36px' }}>
        {filterMovies.length ? filterMovies.map((el, i) => (
          <ShowCard
            key={el.id}
            movie={el}
            setFilms={setFilms}
            index={i + 1}
          />
        )) : (
          <div className="row d-flex justify-content-center" style={{ width: '40rem' }}>
            <img src="https://us-tuna-sounds-images.voicemod.net/a3db7a76-3978-49ae-897e-23148a69534a-1659609223354.jpg" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

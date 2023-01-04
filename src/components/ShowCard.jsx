import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ShowCard({ movie, setFilms, index }) {
  const navigate = useNavigate();
  const clickHandlerDelete = (e) => {
    e.preventDefault();

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!1', 1);

    fetch('/api/v2/delete', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id: movie.id }),
    })
      .then((res) => res.json())
      .then((data) => setFilms(data));

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!2', 2);

    if (index === null) navigate('/allFilms');
  };
  return (
    <div
      className="container card text-center"
      style={{
        width: '17rem',
        margin: '27px',
        backgroundColor: 'ButtonShadow',
      }}
    >
      <img
        src={movie.img}
        height={370}
        style={{
          padding: '10px',
        }}
        className="card-img-top"
        alt="img"
      />
      <div
        className="card-body"
        style={{
          padding: '0 10px 0px 10px', margin: '0', height: '48px',
        }}
      >

        {index !== null ? (
          <span className="card-title" style={{}}>
            {index}
            .
            {' '}
            {movie.name}
          </span>
        ) : (<h5 className="card-title">{movie.name}</h5>)}

      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center" style={{ height: '80px' }}>
          <small>
            {movie.date}
            {', '}
            {movie.genre}
          </small>
          <br />
          <small>
            {movie.time}
          </small>
        </li>
        <li className="list-group-item">
          Статус:
          {' '}
          <small>
            {movie.status ? 'Просмотрено' : 'Не просмотрено'}
          </small>
          {' '}
        </li>
        <li className="list-group-item">
          Оценка:
          {' '}
          <small>
            {(Number(movie.mark)) ? `${movie.mark}⭐️` : 'Ждёт оценки'}
          </small>
        </li>
        <li className="list-group-item">
          Ссылка:
          {' '}
          <small>
            {
              movie.link !== null ? (
                <a href={movie.link}>
                  {movie.link}
                </a>
              ) : 'нет ссылки'
            }
          </small>
        </li>
        <div className="card-body" style={{ padding: '10px 0 5px 0' }}>
          <Link to={`/editMovie/${movie.id}`} className="btn btn-outline-secondary" style={{ width: '260px' }}><small>Редактировать фильм</small></Link>
          {/* <Link to={`/editMovie/${movie.id}`}
          className="btn btn-outline-dark"><small>Редактировать фильм</small></Link> */}
        </div>
        <div className="row card-body" style={{ padding: '10px 12px 10px 12px' }}>
          <button type="button" onClick={clickHandlerDelete} className="btn btn-outline-danger">Удалить фильм</button>
        </div>
      </ul>
    </div>
  );
}

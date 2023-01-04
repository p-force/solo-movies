import React, { useState } from 'react';

export default function Card({ movie, setFilms, index }) {
  const [status, setStatus] = useState(movie.status);
  const [mark, setMark] = useState('');
  const [linkFilm, setLink] = useState('');
  const [isActiveMark, setIsActiveMark] = useState(false);
  const [isActiveLink, setIsActiveLink] = useState(false);

  const changeHandlerMark = (e) => {
    setMark((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const changeHandlerLink = (e) => {
    setLink((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const clickHandlerDelete = (e) => {
    e.preventDefault();
    fetch('api/v2/delete', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id: movie.id }),
    })
      .then((res) => res.json())
      .then((data) => setFilms(data));
  };
  const clickHandlerStatus = (e) => {
    e.preventDefault();
    setStatus(!movie.status);
    fetch('api/v2/status', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id: movie.id, status: !movie.status }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFilms(data);
      });
  };

  const clickHandlerMark = (e) => {
    e.preventDefault();
    setIsActiveMark(!isActiveMark);
    if (isActiveMark && mark !== '') {
      fetch('api/v2/mark', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ id: movie.id, mark: mark.mark }),
      })
        .then((res) => res.json())
        .then((data) => { setFilms(data); setMark(''); });
    }
  };

  const clickHandlerLink = (e) => {
    e.preventDefault();
    setIsActiveLink(!isActiveLink);
    if (isActiveLink && linkFilm !== '') {
      fetch('api/v2/link', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ id: movie.id, link: linkFilm.linkF }),
      })
        .then((res) => res.json())
        .then((data) => setFilms(data));
    }
  };

  return (
    <div className="container card text-center" style={{ width: '18rem', margin: '15px' }}>
      <img src={movie.img} width="280px" height="380px" className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">
          {index}
          .
          {'  '}
          {movie.name}
        </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          {movie.date}
          {', '}
          {movie.genre}
          {', '}
          {movie.time}
        </li>
        <li className="list-group-item">
          Статус:
          {' '}
          {status ? 'Просмотрено' : 'Не просмотрено'}
          {' '}
          <button type="button" onClick={clickHandlerStatus} className="btn btn-light">{status ? 'Не просмотрено' : 'Просмотрено'}</button>
        </li>
        <li className="list-group-item">
          Оценка:
          {' '}
          {(Number(movie.mark)) ? `${movie.mark}⭐️` : 'Ждёт оценки'}
          {isActiveMark
            && (
              <input
                name="mark"
                value={mark.mark}
                onChange={changeHandlerMark}
                type="text"
                className="form-control"
              />
            )}
          <button type="button" onClick={clickHandlerMark} className="btn btn-light">Редактировать оценку</button>
        </li>
        <div className="list-group-item">
          Ссылка:
          {' '}
          {
            movie.link !== null ? (
              <a href={movie.link}>
                {movie.link}
              </a>
            ) : 'нет ссылки'
          }
          {isActiveLink
            && (
              <input
                name="linkF"
                value={linkFilm.linkF}
                onChange={changeHandlerLink}
                type="text"
                className="form-control"
              />
            )}
          <button type="button" onClick={clickHandlerLink} className="btn btn-link">Добавить ссылку для просмотра</button>
        </div>
        <div className="row card-body">
          <button type="button" onClick={clickHandlerDelete} className="btn btn-warning">Удалить фильм</button>
        </div>
      </ul>
    </div>
  );
}

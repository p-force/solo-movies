import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [main, setMain] = useState(false);
  const [chBox, setchBox] = useState({ status: false });
  const [about, setAbout] = useState({ about: '', comment: '' });
  const [inputs, setInputs] = useState({
    name: '', date: '', genre: '', time: '', img: '', mark: '', link: '',
  });

  const changeHandlerChBox = async (e) => {
    setchBox((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };
  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/allFilms');
  };
  useEffect(() => {
    fetch(`/api/v2/movie/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((data) => {
        setInputs({
          name: data.name,
          date: data.date,
          genre: data.genre,
          time: data.time,
          img: data.img,
          mark: data.mark,
          link: data.link,
          status: data.status,
        });
      });
  }, []);
  useEffect(() => {
    fetch(`/api/v2/about/${id}`)
      .then((res) => res.json())
      .then((data) => setAbout({ about: data.about, comment: data.comment }));
  }, []);

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const changeHandlerAbout = (e) => {
    setAbout((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/v2/movieSave/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ inputs, chBox, about }),
    });
    if (response.ok) { setMain(true); }
  };

  return (
    <div className="d-flex flex-wrap justify-content-md-between" style={{ backgroundColor: 'gainsboro' }}>
      <div
        style={{
          height: 590,
          width: 930,
          border: '15px dashed #f8f9fa',
          marginTop: '40px',
        }}
      >

        <div className="d-flex px-4 justify-content-md-between">
          <div className="mb-auto px-2 ">
            <img
              src={inputs.img}
              alt=""
              style={{
                height: 350,
                width: 250,
                margin: '30px 0px 0px 0px',
                padding: '2px',
                border: '3px dashed #f8f9fa',
              }}
              className="card-img-top"
            />
          </div>
          <div
            className="text-center px-2"
            style={{
              height: 350,
              width: 600,
              margin: '30px 0px 5px 0px',
              padding: '2px',
              border: '3px dashed #f8f9fa',
            }}
          >
            {about.about ? about.about : ''}
          </div>
        </div>
        <div
          style={{
            margin: '8px 0px 8px 32px',
            border: '3px dashed #f8f9fa',
            padding: '2px',
            width: 845,
          }}
          className="d-flex justify-content-center"
        >
          <form onSubmit={submitHandler}>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Comment
              <input
                name="comment"
                value={about.comment}
                onChange={changeHandlerAbout}
                type="text"
                className="form-control"
                style={{ width: '820px', height: '90px' }}
              />
            </label>
          </form>
        </div>
      </div>

      <div className="px-4">
        <form
          className="text-center"
          style={{
            height: 590,
            width: 450,
            border: '15px dashed #f8f9fa',
            paddingTop: '30px',
            maxWidth: '600px',
            marginTop: '40px',
          }}
          onSubmit={submitHandler}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <input
                placeholder="Название фильма"
                name="name"
                value={inputs.name}
                onChange={changeHandler}
                type="text"
                className="form-control"
                style={{ width: '300px', height: '33px' }}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <input
                placeholder="Год производства"
                name="date"
                value={inputs.date}
                onChange={changeHandler}
                type="text"
                className="form-control"
                style={{ width: '300px', height: '33px' }}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <input
                placeholder="Жанр"
                name="genre"
                value={inputs.genre}
                onChange={changeHandler}
                type="text"
                className="form-control"
                style={{ width: '300px', height: '33px' }}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <input
                placeholder="Продолжительность"
                name="time"
                value={inputs.time}
                onChange={changeHandler}
                type="text"
                className="form-control"
                style={{ width: '300px', height: '33px' }}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">
              <input
                placeholder="Ссылка на обложку"
                name="img"
                value={inputs.img}
                onChange={changeHandler}
                type="text"
                className="form-control"
                style={{ width: '300px', height: '33px' }}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">
              <input
                placeholder="Ссылка на фильм"
                name="link"
                value={inputs.link}
                onChange={changeHandler}
                type="text"
                className="form-control"
                style={{ width: '300px', height: '33px' }}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">
              <input
                placeholder="Оценка"
                name="mark"
                value={inputs.mark}
                onChange={changeHandler}
                type="text"
                className="form-control"
                style={{ width: '300px', height: '33px' }}
              />
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <input name="status" onChange={changeHandlerChBox} checked={chBox.status} className="form-check-input" type="checkbox" value={inputs.status} id="flexCheckDefault" />
              Просмотрено
            </label>
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '20px' }}>Добавить</button>
          <div>
            {main
              && <button type="submit" onClick={clickHandler} className="btn btn-primary">Перейти на главную</button>}
          </div>
        </form>
      </div>
    </div>
  );
}

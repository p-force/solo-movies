import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewMovie() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: '', date: '', genre: '', time: '', img: '',
  });
  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (inputs.name !== '' && inputs.img !== '' && inputs.date !== '') {
      const response = await fetch('/api/v1/newFilm', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
      if (response.ok) { navigate('/allFilms'); }
    }
  };
  return (
    // <div className="d-flex">
    //   <form
    //     className="text-center"
    //     style={{
    //       border: '20px dotted #ced4da',
    //       padding: '40px 80px 40px 80px', maxWidth: '450px', margin: '50px 0 0 50px',
    //     }}
    //     onSubmit={submitHandler}
    //   >
    //     <div className="mb-3">
    //       <label htmlFor="exampleInputEmail1" className="form-label">
    //         Название фильма
    //         <input
    //           name="name"
    //           value={inputs.name}
    //           onChange={changeHandler}
    //           type="text"
    //           className="form-control"
    //         />
    //       </label>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="exampleInputEmail1" className="form-label">
    //         Год производства
    //         <input
    //           name="date"
    //           value={inputs.date}
    //           onChange={changeHandler}
    //           type="text"
    //           className="form-control"
    //         />
    //       </label>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="exampleInputEmail1" className="form-label">
    //         Жанр
    //         <input
    //           name="genre"
    //           value={inputs.genre}
    //           onChange={changeHandler}
    //           type="text"
    //           className="form-control"
    //         />
    //       </label>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="exampleInputEmail1" className="form-label">
    //         Продолжительность
    //         <input
    //           name="time"
    //           value={inputs.time}
    //           onChange={changeHandler}
    //           type="text"
    //           className="form-control"
    //         />
    //       </label>
    //     </div>
    //     <div className="mb-3 ">
    //       <label htmlFor="exampleInputEmail3" className="form-label">
    //         Ссылка на обложку
    //         <input
    //           name="img"
    //           value={inputs.img}
    //           onChange={changeHandler}
    //           type="text"
    //           className="form-control"
    //         />
    //       </label>
    //     </div>
    //     <button type="submit" className="btn btn-primary">Добавить</button>
    //   </form>
    // </div>
    <div
      className="d-flex justify-content-md-around
    "
      style={{ backgroundColor: 'gainsboro' }}
    >
      <form
        className="row text-center justify-content-around"
        onSubmit={submitHandler}
      >
        <div
          className="col-1"
          style={{
            border: '5px dotted #f8f9fa',
            padding: '5px',
            width: '230px',
            margin: '30px 10px 10px 10px',
            height: '150px',
          }}
        >
          <label htmlFor="exampleInputEmail1" className="form-label">
            Название фильма
            <input
              name="name"
              value={inputs.name}
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </label>
        </div>
        <div
          className="col-2"
          style={{
            border: '5px dotted #f8f9fa',
            padding: '5px',
            width: '230px',
            margin: '30px 10px 10px 10px',
            height: '150px',
          }}
        >
          <label htmlFor="exampleInputEmail1" className="form-label">
            Год производства
            <input
              name="date"
              value={inputs.date}
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </label>
        </div>
        <div
          className="col-3"
          style={{
            border: '5px dotted #f8f9fa',
            padding: '5px',
            width: '230px',
            margin: '30px 10px 10px 10px',
            height: '150px',
          }}
        >
          <label htmlFor="exampleInputEmail1" className="form-label">
            Жанр
            <input
              name="genre"
              value={inputs.genre}
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </label>
        </div>
        <div
          className="col-4"
          style={{
            border: '5px dotted #f8f9fa',
            padding: '5px',
            width: '230px',
            margin: '30px 10px 10px 10px',
            height: '150px',
          }}
        >
          <label htmlFor="exampleInputEmail1" className="form-label">
            Продолжительность
            <input
              name="time"
              value={inputs.time}
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </label>
        </div>

        <div
          className="col-5 "
          style={{
            border: '5px dotted #f8f9fa',
            padding: '5px',
            width: '230px',
            margin: '30px 10px 10px 10px',
            height: '150px',
          }}
        >
          <label htmlFor="exampleInputEmail3" className="form-label">
            Ссылка на обложку
            <input
              name="img"
              value={inputs.img}
              onChange={changeHandler}
              type="text"
              className="form-control"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary row " style={{ maxWidth: '200px', marginTop: '0px' }}>Добавить</button>
      </form>
    </div>
  );
}

import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/indexRouter';
import layoutMW from './middleware/layoutMW';
import allFilms from './routes/allFilms';
import filter from './routes/filter';
import apiRouter from './routes/apiRouter';
import randomRouter from './routes/randomRouter';
import newMovie from './routes/newMovie';
import editMovie from './routes/editMovie';
import randomMovie from './routes/randomMovie';
import editMovieRouter from './routes/editMovieRouter';

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(layoutMW);

app.use('/randomMovie', randomMovie);
app.use('/allFilms', allFilms);
app.use('/newMovie', newMovie);
app.use('/editMovie', editMovie);
app.use('/api/v1', apiRouter);
app.use('/api/v2', editMovieRouter);
app.use('/api/v3', randomRouter);
app.use('/filter', filter);
app.use('/', indexRouter);

app.listen(PORT, () => console.log('Listening port: %d\n', PORT));

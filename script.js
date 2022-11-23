"use strict";

const numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Останній переглянутий фільм?', ''),
      b = prompt('Оцініть від 1 до 10', ''),
      c = prompt('Останній переглянутий фільм?', ''),
      d = prompt('Оцініть від 1 до 10', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

const q = prompt('Який ваш улюблений актор у фільмі ' + a + '?', ''),
      w = prompt('Який ваш улюблений актор у фільмі ' + c + '?', '');

personalMovieDB.actors[a] = q;
personalMovieDB.actors[c] = w;

personalMovieDB.genres.push(prompt('Який ваш улюблений жанр?', '') );


console.log(personalMovieDB);







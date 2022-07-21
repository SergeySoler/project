"use strict";

const numberOfFilms = +prompt("сколько фильмов вы посмотрели");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i <2 ; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На скольк о оцениваете его?", "");
    personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);
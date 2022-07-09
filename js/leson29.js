"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = prompt("сколько фильмов вы посмотрели");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("сколько фильмов вы посмотрели");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На скольк о оцениваете его?", "");
        if (a != null && b != null && a != '' && b != '' & a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('error!!!');
            i++;
        }
    }
}
//rememberMyFilm();

function detectPersonalLevel() {
    if (rememberMyFilm.count < 10) {
        console.log('Просмотрено очень мало фильмов');
    } else if (rememberMyFilm.count >= 10 && rememberMyFilm.count < 30) {
        console.log('Вы типичный пользователь');
    } else if (rememberMyFilm.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
//detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }

}
showMyDB(personalMovieDB.privat);

function writeYouGenres() {
    for (let i =1; i<=3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш лбимый жанр ${i}`);
    }
}

writeYouGenres();
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const advertising = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelectorAll('.promo__genre'),
        moviesList = document.querySelector('.promo__interactive-list'),
        inputFilm = document.querySelector('.promo__interactive .add input[type="text"]'),
        buttonAddFilms = document.querySelector('.promo__interactive .add button');

    advertising.forEach((item) => {
        item.remove();
    });
    genre[0].textContent = 'ДРАМА';
    poster.style.backgroundImage = 'url("img/bg.jpg")';

    moviesList.innerHTML = "";
    movieDB.movies.sort();

    movieDB.movies.forEach((item, i) => {

        moviesList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${item}
            <div class="delete"></div>
        </li>
        `;

    });


    buttonAddFilms.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(inputFilm.value);
        movieDB.movies.push(inputFilm.value);

        movieDB.movies.forEach((item, i) => {
            if (i + 1 === movieDB.movies.length) {
                moviesList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${item}
        <div class="delete"></div>
    </li>
    `;
            }
        });

    });
});
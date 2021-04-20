/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли 
confirm("Question");


*/
'use strict';

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""); //1 zadanie

const personalMovieDB = { //2 zadanie
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

const answers = [];
answers [0] = prompt("Один из последних просмотренных фильмов?","");
answers[1] = prompt("На сколько оцените его?","");
answers [2] = prompt("Один из последних просмотренных фильмов?","");
answers [3] = prompt("На сколько оцените его?","");
personalMovieDB.movies[answers[0]] = answers[1];
personalMovieDB.movies[answers[2]] = answers[3];



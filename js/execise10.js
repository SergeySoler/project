"use strict";

/* Задачи:
1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать 
строку с опытом.
Пример:
showExperience(personalPlanPeter) => '1 month'
P.S. желательно использовать деструктуризацию, но не обязательно */
/* 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в 
себя объект и возвращать строку в нужном виде.
Пример:
personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG' */

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let {
            name,
            age,
            skills
        } = plan;
        let {
            languages,
            programmingLangs,
            exp
        } = plan.skills;
        let [
            ru,
            eng
         ] = plan.skills.languages;
        let {
            js,
            php
        } = plan.skills.programmingLangs;
        return `Мне ${age} и я владею языками: ${ru.toLocaleUpperCase()} ${eng.toLocaleUpperCase()} `;
    }
};
//console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    let {
        name,
        age,
        skills
    } = plan;
    let {
        languages,
        programmingLangs,
        exp
    } = plan.skills;
    return exp;
}
//console.log(showExperience(personalPlanPeter));

/* 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и 
возвращать строку в нужном виде.
Пример:
showProgrammingLangs(personalPlanPeter)  =>
"Язык js изучен на 20% Язык php изучен на 10%"
Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается 
пустая строка.
P.S. Для переноса строки используется \n в конце строки. */
function showProgrammingLangs(plan) {
    let {
        name,
        age,
        skills
    } = plan;
    let {
        languages,
        programmingLangs,
        exp
    } = plan.skills;
    let [
        ru,
        eng
     ] = plan.skills.languages;
    let {
        js,
        php
    } = plan.skills.programmingLangs;
    let result = '';

    if (Object.keys(programmingLangs).length === 0) {
        return '';
    }
    for (let key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
        // result1 += result;
    }
    return result;
}
console.log(showProgrammingLangs(personalPlanPeter));

/* 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в 
себя объект и возвращать строку в нужном виде.
Пример:
personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG' */

/* const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); */
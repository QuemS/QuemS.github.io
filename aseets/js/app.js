import {arr} from './arr.js';

let inputStr = prompt();
let arrInputStr = inputStr
                        .toUpperCase()
                        .split('');
console.log("Массив с inputa", arrInputStr);
console.log('Масиив с базой',arr);

let arrResult = [];

arrInputStr
        .forEach(i => {
            arr.forEach( (j) => {
                if (i==j.simbol) {
                    return arrResult.push(j.icao);
                }
    });
});

let strResult = arrResult.join(" ");
alert(`Запрос: ${inputStr}.\n\nОтвет: ${strResult}`)














 


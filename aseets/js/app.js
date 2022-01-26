import {arrOne,arrTwo,arrThree,arrTen} from './arr.js';

let inputStr = prompt(`Введите число от 1 до 999`);
let arrInputStr = inputStr.split('').reverse();
console.log("Массив с inputa", arrInputStr, arrInputStr.length);

let arrResult = [];
let arrResultGRN = [];
arrResultGRN = inputStr.split('');


arrInputStr.forEach((arrNum, i) => {
    switch (i) {
        case 0:
            arrOne.forEach((item) => {
                if (arrNum == item.simbol) {
                    arrResult.push(item.num);
                }
            });
            break;
        case 1:
            if (arrNum == 1 && arrInputStr[0] != 0) {
                arrTen.forEach((item) => {
                    if (arrInputStr[0] == item.simbol) {
                        arrResult.shift();
                        return arrResult.push(item.num);
                    }
                });
            } else {
                arrTwo.forEach((item) => {
                    if (arrNum == item.simbol) {
                        return arrResult.push(item.num);
                    }
                });
            }
            break;
        case 2:
            arrThree.forEach((item) => {
                if (arrNum == item.simbol) {
                    return arrResult.push(item.num);
                }
            });
            break;
    }

});

let strResult = arrResult.reverse().join(" ");
let grn;

if (arrResultGRN.length == 3 && arrResultGRN[1] == 1) {
    grn = 'гривень';
} else if (arrResultGRN.length == 3 && arrResultGRN[1] == 0 && arrResultGRN[2] >= 2 && arrResultGRN[2] <= 4) {
    grn = 'гривні';
} else if (arrResultGRN.length == 2 && arrResultGRN[0] == 1) {
    grn = 'гривень';
} else if (arrResultGRN[arrResultGRN.length - 1] == 1) {
    grn = 'гривня';
} else if (arrResultGRN[arrResultGRN.length - 1] == 0) {
    grn = 'гривень';
}
else if (arrResultGRN[arrResultGRN.length - 1] >= 2 && arrResultGRN[arrResultGRN.length - 1] <= 4) {
    grn = 'гривні';
} else {
    grn = 'гривень';
}

alert(`Запрос: ${inputStr}.\n\nОтвет: ${strResult}` + ` ${grn}`);




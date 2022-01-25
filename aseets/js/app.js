import {arrOne,arrTwo,arrThree,arrTen} from './arr.js';

let inputStr = prompt(`Введите число от 1 до 999`);
let arrInputStr = inputStr.split('')
console.log("Массив с inputa", arrInputStr, arrInputStr.length);
//console.log('Масиив с базой',arr);


let arrResult = [];

arrInputStr.forEach(i => {
            if (arrInputStr.length == 1) {
                arrOne.forEach( (j) => {
                    if (i==j.simbol) {
                        return arrResult.push(j.icao);
                    }
                });
            }else if (arrInputStr.length == 2 && arrInputStr[0] == 1){
                arrInputStr.shift();
                console.log(arrInputStr);
                
                arrInputStr.forEach( (k) => {
                    arrTen.forEach( (j) => {
                        if (k==j.simbol) {
                            arrInputStr.pop();
                            console.log(arrInputStr);
                            return arrResult.push(j.icao);
                        }
                    });
                });

            }else if (arrInputStr.length == 2 ) {
                arrTwo.forEach( (j) => {
                    if ( i == j.simbol) {
                        arrResult.push(j.icao);
                        arrInputStr.shift();
                            console.log(arrInputStr);
                        
                            arrInputStr.forEach( (k) => {
                            if (arrInputStr.length == 1) {
                                arrOne.forEach( (j) => {
                                    if (k==j.simbol) {
                                        return arrResult.push(j.icao);
                                    }
                                });
                            }
                        });

                    }
                });
            }else if (arrInputStr.length == 3 && arrInputStr[1] == 0){
                arrThree.forEach( (j) => {
                    if ( i == j.simbol) {
                        arrResult.push(j.icao);
                        arrInputStr.shift();arrInputStr.shift();
                        console.log(arrInputStr);
                        
                        arrInputStr.forEach( (s) => {
                            arrOne.forEach( (l) => {
                                if (s == l.simbol) {
                                    return arrResult.push(l.icao);
                                    
                                }
                            });
                        });
                    }
                });
            }else if (arrInputStr.length == 3 ){
                arrThree.forEach( (j) => {
                    if ( i == j.simbol) {
                        arrResult.push(j.icao);
                        arrInputStr.shift();
                        
                             arrInputStr.forEach( (k) => {
                                if (arrInputStr.length == 2) {
                                    arrTwo.forEach( (l) => {
                                        if (k == l.simbol) {
                                            arrResult.push(l.icao);
                                            arrInputStr.shift();
                                            console.log(arrInputStr);
                                            arrInputStr.forEach( (s) => {
                                                arrOne.forEach( (l) => {
                                                    if (s == l.simbol) {
                                                        return arrResult.push(l.icao);
                                                        
                                                    }
                                                });
                                            });
                                        }
                                    });
                                }
                            });
                        }
                });
            }
           
});
let grn;

if (arrResult.length == 0) {
    grn = 'гривень';
}else if (arrInputStr[0] == 1) {
    grn = 'гривня';
}else if (arrInputStr[0] >= 2 && arrInputStr[0] <= 4) {
    grn = 'гривні';
}else {
    grn = 'гривень';
}
let strResult = arrResult.join(" ");
alert(`Запрос: ${inputStr}.\n\nОтвет: ${strResult}` + ` ${grn}`)














 


import {arrOne,arrTwo,arrThree,arrTen} from './arr.js';

let inputStr = +prompt(`Введите число от 1 до 999`);
let arrInputStr = inputStr.split('');
console.log("Массив с inputa", arrInputStr, arrInputStr.length);
//console.log('Масиив с базой',arr);


let arrResult = [];
let arrResultGRN = [];
    arrResultGRN = inputStr.split('');


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
            }else if (arrInputStr.length == 3 && arrInputStr[1] == 1){
                arrThree.forEach( (j) => {
                    if ( i == j.simbol) {
                        arrResult.push(j.icao);
                        arrInputStr.shift();arrInputStr.shift();
                        console.log(arrInputStr);
                        
                        arrInputStr.forEach( (s) => {
                            arrTen.forEach( (l) => {
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

console.log(arrResultGRN);
let grn;

if (arrResultGRN.length == 3 && arrResultGRN[1] == 1) {
    grn = 'гривень';
}else if (arrResultGRN.length == 3 && arrResultGRN[1] == 0 && arrResultGRN[2] >= 2 && arrResultGRN[2] <= 4){
    grn = 'гривні';
}else if(arrResultGRN.length == 2 && arrResultGRN[0] == 1){
    grn = 'гривень';
}else if (arrResultGRN[arrResultGRN.length - 1] == 1) {
    grn = 'гривня';
}else if (arrResultGRN[arrResultGRN.length - 1] == 0) {
    grn = 'гривень';
}
else if (arrResultGRN[arrResultGRN.length - 1] >= 2 && arrResultGRN[arrResultGRN.length - 1] <= 4) {
    grn = 'гривні';
}else{
    grn = 'гривень';
}
let strResult = arrResult.join(" ");
alert(`Запрос: ${inputStr}.\n\nОтвет: ${strResult}`+ ` ${grn}`);


















 


import { masterCardArr, maestroArr } from './module.js'

class Card{
    constructor(numberCard){
        this.card = numberCard;
    }
    convert(){
        let newArr = this.card.split('').reverse().map(i =>+i)
        return newArr;
    }
    numberTwo(){
        return this.convert().reverse().splice(0,2).join("");
    }
    numberFour(){
        return this.convert().reverse().splice(0,4).join("");
    }
    numberSix(){
        return this.convert().reverse().splice(0,6).join("");
    }
    isCorrect(){
        let sum = 0 ;
        this.convert().map( (item,i) =>{
            if (i % 2 == 0) {
                sum = sum + this.convert()[i];
            }else{
                let double = this.convert()[i] * 2;
                sum = sum + (double > 9 ? double - 9: double);
            }
            
        });
        return sum % 10 == 0;
    }
    visa(){
        return (this.convert().reverse()[0] == 4 && this.convert().length >=13 && this.convert().length <= 19? true : false);
    }
    maestro(){
        if (this.convert().length >= 12 && this.convert().length <= 19 ) {
            
            return (maestroArr.find( item =>  this.numberFour() == item)) ? true: false;
        }
    }
    masterCard() {
        if (this.convert().length == 16) {
            if (this.numberTwo() >= masterCardArr[0] && this.numberTwo() <= masterCardArr[1]) {
                return true;
            } else if (this.numberSix() >= masterCardArr[2] && this.numberSix() <= masterCardArr[3]) {
                return true
            }else{
                return false
            }
        }
    }
}


let inputCard = prompt('Введите номер карты');
let a = new Card(inputCard);


if (a.visa() && a.isCorrect()) {
    alert (`Карта: ${inputCard} VISA`)
}else if (a.maestro() && a.isCorrect()) {
    alert (`Карта: ${inputCard} MAESTRO`)
}else if (a.masterCard() && a.isCorrect()) {
    alert (`Карта: ${inputCard} MASTERCARD`)
}else if (a.isCorrect()) {
    alert (`Карта: ${inputCard} Другая`)
}else{
    alert (`Неверный ввод`)
}
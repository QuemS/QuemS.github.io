
import { options } from './module.js'

class IHH{
    constructor(numberIHH){
        this.index = numberIHH;
    }
    getArr(){
        return this.index.split('');
    }

    ifConnent() {
        let calc = (this.getArr()[0] * (-1) + this.getArr()[1] * 5 + this.getArr()[2] * 7 + this.getArr()[3] * 9 + this.getArr()[4] * 4 + this.getArr()[5] * 6 + this.getArr()[6] * 10 + this.getArr()[7] * 5 + this.getArr()[8] * 7);
        let corrent = calc % 11 == (this.getArr()[9] == 0 ? 10 : this.getArr()[9]);
        
        if (this.getArr().length == 10 && corrent) {
            return true;
        }else{
            return false;
        }

    }
    birth(){
        let dataUser = new Date(1900, 0, 31);
        dataUser.setDate(this.getArr().splice(0, 5).join(""));
        return dataUser;
         
    }
    howManyYears(){
        let dataNow = new Date();
        let deff = 0;
        deff = dataNow.getFullYear() - this.birth().getFullYear();
        if (dataNow.getMonth() < this.birth().getMonth()) {
            deff -= 1;
        }else if (dataNow.getMonth() == this.birth().getMonth()) {
            if (dataNow.getDate() < this.birth().getDate()) {
                deff -= 1;
            }
        }
        return deff;
    }
    gender(){
        return this.getArr()[8] % 2 == 0 ? 'Женщина': 'Мужчина';
    }
    result(){
        return alert(`Запрос ИНН: ${this.index} \n\n Пол: ${this.gender()} \n Родился : ${this.birth().toLocaleString("ru", options)} \n Возраст: ${this.howManyYears()} лет` )
    }
}

let showInfo = new IHH(prompt('Введите ИНН'));
if (showInfo.ifConnent()) {
    showInfo.result()
}else{
    alert('Неверный данные')
}



















let secret = Math.random();
secret = secret * 100;
secret = Math.floor(secret) + 1; 
let numberAttempts = 10;
let flag = false;

//console.log(`Secret =  ${secret}`);

function calc() {
    if (flag) {
        return;
    }
    
    let numberInput = +numberInputOne.value;
    let displayBlock = document.querySelector('.displayBlock');
    let resultText, resultText2;
    
    //console.log(`numberAttempts =  ${numberAttempts}`);

    if ((numberAttempts > 1) && (numberInput !=secret ) && (numberInput > secret)){
        numberAttempts--;
        resultText = `НЕ-А!! Число ${numberInput} больше задуманного`;
    }else if((numberAttempts > 1)  && (numberInput !=secret ) && (numberInput < secret)){
        numberAttempts--;
        resultText = `НЕ-А!! Число ${numberInput} меньше задуманного`;
    }else if( ((numberAttempts == 1)) || (numberAttempts == 0) ){
        numberAttempts = 0;
        flag = true;
        resultText = `Игра окончена!!! У вас закончились попытки`;
        
    }else if((numberAttempts >= 0) && (numberInput == secret )){
        resultText = `УРААА!!! Вы победил `;
        displayBlock.classList.remove('displayBlock');
        resultText2 = `Вы угадали число с ${10 - numberAttempts} раза.`;
        numberAttempts = " ";
        flag = true;
        
        
    }
    outputText.innerHTML = resultText;
    outputText2.innerHTML = resultText2;
    resultAttempts.innerHTML = numberAttempts;
    
}




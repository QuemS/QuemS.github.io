var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
};

let arrDate = [];
let dateStart = new Date(2021, 0, 0);
for (let i = 1; i < 366; i++) {
    
        let newDate = new Date(dateStart.setDate(dateStart.getDate() +1));
        newDate = newDate.toLocaleString("ru", options).split('.').reverse().join('');
        arrDate.push(newDate)
        
    
}
const delay = (ms) =>{
  return new Promise (r => setTimeout(() => r(),ms))
}

let getData = async() => {
    let arrPromise= [];
    for (let i = 0; i < arrDate.length; i++) {
        arrPromise.push(promiseOne(arrDate[i]))
        await delay(0);
    }

    Promise.all(arrPromise).then(arrResult => {
      awaitPromise.innerHTML = `
        <div class="alert alert-success d-flex align-items-center" role="alert">
          <div>
              <i class="fa-solid  fa-2x fa-check"></i>
              Готово
          </div>
        <div class="input-group mb-3 px-5 ">
            <span class="input-group-text" id="inputGroup-sizing-default"> Сумма в грн</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="10000" id="inputValue">
            <button type="button" class="btn btn-success mx-2" id="buttonStart">
                Поиск
            </button>
        </div>
        `
      let countSellDay = 0;
      let countBuyDay = 0;
      let max = arrResult[1] - arrResult[0];
      
      for(let buyDay = 0; buyDay < arrResult.length - 1; buyDay++){
          for (let sellDay = buyDay + 1 ; sellDay < arrResult.length; sellDay++) {
              let delta = arrResult[sellDay] - arrResult[buyDay];
              if (delta > max) {
                  max = delta;
                  countSellDay = sellDay;
                  countBuyDay = buyDay;
              }
          }
      }
      console.log( 'countBuyDay', countBuyDay);
      console.log('countSellDay',countSellDay);
      let resultBuy =  arrDate[countBuyDay];
    resultBuy = `${resultBuy.split('').splice(0,4).join("")}` +'-'+`${resultBuy.split('').splice(4,2).join("")}`+'-'+ `${resultBuy.split('').splice(6,2).join("")}`

    let resultSell =  arrDate[countSellDay];
    resultSell = `${resultSell.split('').splice(0,4).join("")}` +'-'+`${resultSell.split('').splice(4,2).join("")}` + '-' + `${resultSell.split('').splice(6,2).join("")}`

    buttonStart.onclick = async () => {
    let input = inputValue.value;

    console.log(`Нужно было покупать`, resultBuy + ' числа', input / arrResult[countSellDay],'$');
    console.log(`Нужно было продавать`, resultSell + ' числа', input / arrResult[countBuyDay],'$');

    let resulInputUA = Math.round(((input / arrResult[countBuyDay]) - (input / arrResult[countSellDay])) * arrResult[countBuyDay] *100) / 100;
    
    let newTag = document.createElement('div')
    newTag.innerHTML = `
    <div class="d-flex justify-content-center" id="addNewTag">
        <div class="alert alert-success w-75" role="alert">
            <div class='text-center'>
                <p>Нужно было покупать ${resultBuy} числа по курсу ${arrResult[countBuyDay]} грн.</p>
                <p class="border-bottom" >Результат конвертации: ${Math.round(input / arrResult[countBuyDay] *100) / 100} $</p>
                <p>Нужно было продавать ${resultSell} числа по курсу ${arrResult[countSellDay].toFixed(2)} грн.</p>
                <p>Результат конвертации: ${Math.round(input / arrResult[countSellDay] * 100) / 100} $</p>
                <p class="text-danger">Ваша прибыль составила без учета вычетов и налогов ${resulInputUA.toFixed(2)} грн.</p>
            </div>
        </div>
    
    </div>
   
    `
    awaitPromise.insertAdjacentElement('afterEnd' ,newTag)

    
  };

      
    })
  }

getData();

async function promiseOne(dates) {
   return new Promise((revolve,reject) =>{

       console.log(dates);
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=${
          dates
        }&json`)
        .then(data =>{
          data.json().then(item => revolve(item[0].rate))
        })
  })

}

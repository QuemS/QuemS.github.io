

let requestNbu = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    requestNbu = await requestNbu.json();

let requestCountry = await fetch('https://restcountries.com/v3.1/all')
    requestCountry = await requestCountry.json();

let getNewNbu = requestNbu.map(item => ({
        currency: item.txt,
        cc: item.cc,
        rate: item.rate,
        flags: [],
        name: []

    }));

let newArrCountry = requestCountry.map(item =>  ({
        name: item.translations.rus.common,
        currencies: item.currencies,
        flags: item.flags.png
    }) );


for (let i = 0; i < getNewNbu.length; i++) {
    for (let j = 0; j < newArrCountry.length; j++) {
        if (newArrCountry[j].currencies !== undefined && `${getNewNbu[i].cc}` in newArrCountry[j].currencies){
            getNewNbu[i].flags.push(`${newArrCountry[j].flags}`);
            getNewNbu[i].name.push(`${newArrCountry[j].name}`);
        } 
    }
}

let resultArr = [];
    resultArr = getNewNbu;

for (let j = 0; j < resultArr.length - 1; j++) {
    for (let i = 0; i < resultArr.length - 1 - j; i++) {
        
        if (resultArr[i].flags.length < resultArr[i + 1].flags.length ) {
            let temp = resultArr[i];
            resultArr[i] = resultArr[i + 1];
            resultArr[i + 1] = temp;
        }
    }
}
app.innerHTML = resultArr.map( (item,index)=>{
        let flags = '';
        for (let i = 0; i < item.flags.length; i++) {
            
            flags+= `<img src="${item.flags[i]}" alt="" class="mx-1" title="${item.name[i]}">`;
        }
        return `
        <tr>
        <th scope="row">${index + 1}</th>
            <td>${item.currency} ${item.cc} </td>
            <td>${item.rate.toFixed(2)}</td>
            <td class="text-start">
            ${flags}
            </td>
        </tr>`
        
    }).join('');


    console.log(requestCountry);


//<a href="https://www.google.com/maps/place/Bosnia+and+Herzegovina" target="_blank"><img src="${item.flags[i]}" alt="" class="mx-1" title="${item.name[i]}"></a>
  



         





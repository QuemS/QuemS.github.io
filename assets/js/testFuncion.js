class Request {
    constructor(dates,array){
        this.dates = dates;
        this.array= array;
    }

    async request(){
        let requestNbu = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=${this.dates}&json`);
        requestNbu = await requestNbu.json();
        return requestNbu[0].rate;
        
        
        
    }
}



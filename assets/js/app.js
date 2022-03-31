
let module = {
    data:[],
    position:[],
    distance:[],

    render(){
        console.log('Yes');
        let tagInfo = document.querySelector('.info');
        tagInfo.innerHTML = `Вашы кординаты ${this.position[0]}, ${this.position[1]}`;
        console.log(this.data);
        
        
    },
    myPosition(latitude,longitude){
        this.position.push(latitude,longitude);
        this.render();
    },
    async terminalPosition(){
        let url = './assets/infrastructure.json';
            let requst =  await fetch(url);
            this.data = await requst.json();
            this.distanceToYou();
            
    },
    distanceToYou(){
        
    },
    bubbleSort(){
        
        for (let j = 0; j < this.data.devices.length - 1; j++) {
            for (let i = 0; i < this.data.devices.length - 1 - j; i++) {
                if (this.data.devices[i].distanceToYou > this.data.devices[i + 1].distanceToYou) {
                    let temp = this.data.devices[i];
                    this.data.devices[i] = this.data.devices[i + 1];
                    this.data.devices[i + 1] = temp;
                }
            }
        }
        this.render();
    }
    
}
module.terminalPosition();

navigator.geolocation.getCurrentPosition(position =>{
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    module.myPosition(latitude,longitude);
    console.log(` latitude :${latitude}`);
    console.log(` longitude :${longitude}`);
    
    
},error=>{
    console.log('Geolocation error', error);
})

/*this.distance = this.data.devices.map((item, i)=>{
            let y = Math.acos(Math.sin(this.position[0])* Math.sin(+item.longitude) + Math.cos(this.position[0]) * Math.cos(+item.longitude) * Math.cos((+item.latitude - this.position[1])));

            let d = y * 111.1
            this.data.devices[i].distanceToYou = d;
        

            let r = 6372;

            let d2 = 2*r*Math.asin(Math.sqrt(Math.pow(Math.sin((item.longitude - this.position[0])/ 2) ,2) + Math.cos(this.position[0]) * Math.cos(item.longitude) * Math.pow(Math.sin((item.latitude  - this.position[1]) / 2) ,2)));
            //this.data.devices[i].distanceToYou = d2;*/










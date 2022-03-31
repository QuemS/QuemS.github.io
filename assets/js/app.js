import {openPage} from './page.js';
let module = {
    data:[],
    position:[],
    arrStreet:[],
    

    render(){
        let tagInfo = document.querySelector('.info');
        if (this.position) {
            this.data.devices.map((item , i)=>{
                let distance = this.distanceToYou(this.position[0], this.position[1], item.longitude, item.latitude);
                this.data.devices[i].distanceToYou = Math.round(distance *1)/1;
            })
            this.bubbleSort();
            
            
            for (let i = 0; i < 5; i++) {
                this.arrStreet = this.data.devices[i].fullAddressRu.split(',');
                console.log(this.arrStreet[this.arrStreet.length - 1]);
                let newTag = document.createElement('tr');
                //newTag.classList.add('')
                newTag.innerHTML = `
                <th scope="row">${i+1}</th>
                <td class="table-light">${this.arrStreet[this.arrStreet.length - 2]} ,${this.arrStreet[this.arrStreet.length - 1]}</td>
                <td class="table-light">${this.data.devices[i].distanceToYou}</td>
                `;
                tagInfo.insertAdjacentElement('beforebegin',newTag);
                console.log(this.data.devices[i]);
                
            }
            let img = document.querySelector('.imgMap');
            img.classList.add('text-center')
            img.innerHTML = `
            <img src="https://image.maps.api.here.com/mia/1.6/mapview?app_id=oZmMWRV4tAjQmgkxBvF0&app_code=x5pKHqifhw1mnS_zBTIFsA&z=15&w=600&h=600&c=${this.data.devices[0].longitude},${this.data.devices[0].latitude}" alt="">
            `;
            console.log(`render Ready!!!`);
        }
    },
    async myPosition(latitude,longitude){
        this.position.push(latitude,longitude);
        let url = './assets/infrastructure.json';
            let requst =  await fetch(url);
            this.data = await requst.json();
        this.render();
    },//myPosition() end;

    distanceToYou(lat1, lon1, lat2, lon2){
        let p = 0.017453292519943295; // Math.PI / 180
        let c = Math.cos;
        let a = 0.5 - c((lat2 - lat1) * p) / 2 + (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;
        return 12742000 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    },//distanceToYou() end;

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
    } //bubbleSort() end;

}
/******************************************/

navigator.geolocation.getCurrentPosition(position =>{
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    module.myPosition(latitude,longitude);
    console.log(` myLatitude :${latitude}`);
    console.log(` myLongitude :${longitude}`);
    
    
},error=>{
    console.log('Geolocation error', error);
})


terminal.addEventListener('click',function(){
    openPage('Home', this, 'LightSalmon');
  });
defaultOpen.addEventListener('click',function(){
    openPage('News', this, 'green');
  });
document.getElementById("defaultOpen").click();









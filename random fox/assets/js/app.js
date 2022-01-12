
let requestFox = new XMLHttpRequest;
let arrImg =['/assets/image/logo.png', 'https://randomfox.ca/images/106.jpg'];
let count = 1;

function arrPushImg (img){       //FUNCION PUSH ARRAY
    
    arrImg.push(img);
    count = 1;
    console.log(`Масиив: ${arrImg}`);
}


function arrBackImg(){            //FUNCION LAST IMG 
    count++;
    if((arrImg.length - (count)) >= 1 ){
        let backImg = arrImg[arrImg.length - (count)];

        console.log(`backImg: ${backImg}`);
        console.log(count);
        
        return resultImg(backImg);
    }else if(((arrImg.length - (count)) <= 0 )){
        let backImg = arrImg[0];
        return resultImg(backImg);

    }
}



function resultImg(item){               //FUNCION RESULT 
    let addImg = document.querySelector('div img');

    addImg.src = `${item}`;
    console.log(`resultImg ${addImg.src}`);

    //return arrPushImg (item);
    
}


function clickRequest(){                 //FUNCTION RAQUEST IMG 
    
    requestFox.open('GET', 'https://randomfox.ca/floof/', true);
    requestFox.send();
    requestFox.responseType = 'json';

    requestFox.onload = function(){
    let jsonObg = requestFox.response;
    let responseImg = jsonObg.image;
    console.log(`Загружено:response OK`);
     
    return resultImg(responseImg),arrPushImg (responseImg);
    }
    requestFox.onerror = function() { // ERRON REQUEST
    console.log(`Ошибка соединения`);
};

 

}



/*function download(dataurl = arrImg[arrImg.length - 1], filename = arrImg[arrImg.length - 1]) {
    const link = document.createElement("a");
    link.target = '_blank';
    link.href = dataurl;
    link.download = filename;
    link.click();
  }
  */










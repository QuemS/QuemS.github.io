

let result = document.getElementById('resultColor');
function calcColor(){
    let r,g,b;
    
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    
     return color = `${r}, ${g}, ${b}`;
}


function clickColor(){
    
    let element = document.querySelector('.body');
    element.style.background = `linear-gradient(to right, rgb(${calcColor()}), rgb(${calcColor()}))`;
    result.textContent = `${element.style.background}; `
    console.log(result);
}





let inputNickName; //input name;
let json,json2;
let wgRating = 0;
let idPerson = 0;



//XMLHttpRequest name;
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
        inputNickName = document.getElementById('nickName').value; //input name;
    
        let req = new XMLHttpRequest();
        req.open('GET',`https://api.worldoftanks.ru/wot/account/list/?application_id=fac0eed63820a6a6fb4783f27853df61&search=${inputNickName}+&limit=1`, true);
        req.send();
        req.onload = function(){
            json = JSON.parse(req.responseText);
            document.getElementsByClassName('message')[0].innerHTNL = JSON.stringify(json);
            idPerson = json.data[0].account_id;
                
            console.log(`Ваш id ${idPerson}`);


            let idPlayrs = new XMLHttpRequest();
            idPlayrs.open('GET',`https://api.worldoftanks.ru/wot/account/info/?application_id=fac0eed63820a6a6fb4783f27853df61&account_id=${idPerson}`, true);
            idPlayrs.send();
            idPlayrs.onload = function(){
                json2 = JSON.parse(idPlayrs.responseText);
                document.getElementsByClassName('message')[0].innerHTNL = JSON.stringify(json2);
                console.log(json2);
                wgRating = json2.data[`${idPerson}`].global_rating;
                console.log(wgRating);
                
                document.getElementById("p1").innerHTML = `Рейтинг WG = ${wgRating}`;

            };
            };

            
            
    };
    

    
});




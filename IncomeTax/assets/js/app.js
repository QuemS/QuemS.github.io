let arrSingle  =    [ [0,9950], [9951, 40525], [40526, 86375], [86375, 164925], [164925, 209425], [209425, 523600], [523601, Infinity]];
let arrFamily =     [ [0,19900], [19901, 81050], [81051, 172750], [172751, 329850], [329851, 418850], [418851, 628300], [628301, Infinity]];
let arrHouseholds = [ [0,14200], [14201, 54200], [54201, 86350], [86351, 164900], [164901, 209400], [209401, 523600], [523601, Infinity]];
                        //10        12              22                24                  32               35                 37            
let arrTaxeRate = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37 ];



let deductionSingle = 12550;
let deductionFamily = 25100;
let deductionHouseholds = 18800;




 function resusltCacl(arr,arrRate,status,tagId,){
    let inputNum = +inputNumber.value;
    let taxableSum = inputNum - status;
    let taxableStart = 0;
    let taxableResult = 0;

    
    console.log(`taxableSum: ${taxableSum}`);
    if(inputNum > status ){
        
        for (let i = 0; i < arr.length; i++) {
            let percentCount = arrRate[i];
            let num1 = arr[i][0];
            let num2 = arr[i][1];
            
    
            if (num2 > taxableSum) {
                let taxableLast = (taxableSum - num1)* percentCount;
                taxableResult = Math.round((taxableStart + taxableLast)* 100) / 100;
                break;
            }else{
                taxableStart += ( num2 - num1 ) * percentCount;
                
            }
    
            
            
        }
    }else if(taxableSum == 0){
        taxableResult = 0;
    }


    let item  = document.getElementById(`${tagId}`);
    item.innerHTML = `${taxableResult}`+' $', console.log(`Result : ${taxableResult}`);
    return;
    
}


function startFuncion() {
    resusltCacl(arrSingle, arrTaxeRate, deductionSingle, "single");
    resusltCacl(arrFamily, arrTaxeRate, deductionFamily, "family");
    resusltCacl(arrHouseholds, arrTaxeRate, deductionHouseholds,"households" );
    return

}













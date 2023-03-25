function convertArrToNumber(arr){
    var arrTemp = [];
    for(let i = 0; i < arr.length; i++){
        arrTemp[i] = parseInt(arr[i]);
    }
    return arrTemp;
}

function getPositiveNumbers(arr){
    let arrTemp = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>=0){
            arrTemp.push = arr[i];
        }
    }
    return arrTemp;
}
function getNegativeNumbers(arr){
    let arrTemp = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]<0){
            arrTemp.push = arr[i];
        }
    }
    return arrTemp;
}

function getSumArr(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+= arr[i];
    }
    return sum;
}

function getEvens(arr){
    let arrTemp = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2===0){
            arrTemp.push = arr[i];
        }
    }
    return arrTemp;
}

function sortIncrease(arr){
    let tempt = 0;
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]>arr[j]){
                tempt = arr[j];
                arr[j] = arr[i];
                arr[i] = arr[j];
            }
        }
    }
}
function sortDecrease(arr){
    let tempt = 0;
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]<arr[j]){
                tempt = arr[j];
                arr[j] = arr[i];
                arr[i] = arr[j];
            }
        }
    }
}
function convertArrToNumber(arr){
    var arrTemp = [];
    for(let i = 0; i < arr.length; i++){
        arrTemp.push(parseFloat(arr[i]));
    }
    return arrTemp;
}

function getPositiveNumbers(arr){
    var arrTemp = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>0){
            arrTemp.push(arr[i]);
        }
    }
    return arrTemp;
}
function getNegativeNumbers(arr){
    let arrTemp = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]<0){
            arrTemp.push(arr[i]);
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
            arrTemp.push(arr[i]);
        }
    }
    return arrTemp;
}

function sortIncrease(arr){
    let tempt = 0;
    var arrSort = arr;
    for (let i = 0; i < arrSort.length -1; i++) {
        for (let j = i+1; j < arrSort.length; j++) {
            if(arrSort[i]>arrSort[j]){
                tempt = arrSort[j];
                arrSort[j] = arrSort[i];
                arrSort[i] = tempt;
            }
        }
    }
    return arrSort;
}
function sortDecrease(arr){
    let tempt = 0;
    var arrSort = arr;
    for (let i = 0; i < arrSort.length -1; i++) {
        for (let j = i+1; j < arrSort.length; j++) {
            if(arrSort[i]<arrSort[j]){
                tempt = arrSort[j];
                arrSort[j] = arrSort[i];
                arr[i] = tempt;
            }
        }
    }
    return arrSort; 
}

function changeIndex(targetIndex, index, arr){
    if(targetIndex>=arr.length||index>=arr.length){
        console.log('error our of range');
        return -1;
    }
    let temp = 0;
    temp = arr[index];
    arr[index] = arr[targetIndex];
    arr[targetIndex] = temp;
    return arr;
}

function validateIntergerArray(arr){
    for (let i = 0; i < arr.length; i++) {
        if(!Number.isSafeInteger(arr[i])){
            return false;
        }
    }
    return true;
}

function getIntergerFrom(arr){
    var arrInter = [];
    for (let i = 0; i < arr.length; i++) {
        if(Number.isSafeInteger(arr[i])){
            arrInter.push(arr[i]);
        }
    }
    return arrInter;
}

function validateNumberArray(strArr){
    for (let i = 0; i < strArr.length; i++) {
        if(isNaN(strArr[i])){
            return false;
        }
        if((strArr[i]) === ''){
            return false;
        }
    }
    return true;
}

function getPrimeFrom(arr){
    var primes = [];
    for (let i = 0; i < arr.length; i++) {
        if(kiem_tra_snt(arr[i])){
            primes.push(arr[i]);
        }
    }
    return primes;
}

function kiem_tra_snt(n)
{
    // Biến cờ hiệu
    var flag = true;
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i < Math.sqrt(n); i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    return flag;
}
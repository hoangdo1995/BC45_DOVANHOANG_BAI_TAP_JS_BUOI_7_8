var arrayNumber = [];
document.getElementById('addNumber').onclick = function(){
    var str = document.getElementById('nhap-so').value;
    var arr = convertArrToNumber(str.split(" "));
    arrayNumber = arrayNumber.concat(arr);
    console.log(arrayNumber);
    displayArr(arrayNumber);
}



function displayArr(arr){
    document.getElementById('hien-thi-mang').innerHTML = arr.toString();
}




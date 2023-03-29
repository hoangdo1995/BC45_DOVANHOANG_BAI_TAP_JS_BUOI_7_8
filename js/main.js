
var arrayNumber = [];//mảng chưa mảng các giá trị số nguyên người dùng nhập vào
var arrSoThuc = []; //mảng chưa các giá trị số thực người dùng nhập vào

//lấy đối tượng chưa thông báo lỗi cho trường nhập liệu
var errorInput = document.querySelector('#error-input');

// xử lý xự kiện cho nút thêm giá trị vào mảng số nguyên
document.getElementById('addNumber').onclick = function(){
    //lấy giá trị
    var str = document.getElementById('nhap-so').value;
    var arr = convertArrToNumber(str.split(" "));
    //kiêm tra nhập liệu
    if(!validateIntergerArray(arr)){
        errorInput.style.display = 'block';
        return;
    }
    else{
        errorInput.style.display = 'none';

    }
    //thêm vào mảng số nguyên
    arrayNumber = arrayNumber.concat(arr);
    //hiểm thị
    displayArr(arrayNumber);
    document.querySelector('#nhap-so').value = '';
    analysisArr(arrayNumber);
}

//xử lý xự kiên cho nút reset
document.querySelector('#resetNumber').onclick =  function(){
    arrayNumber = [];
    document.querySelector('#addNumber').value = '';
    analysisArr(arrayNumber);
    displayArr(arrayNumber);
}

// xử lý sự kiện cho nút sắp xếp tăng dần
document.querySelector('#tang-dan').onclick = function(){
    arrayNumber = sortIncrease(arrayNumber);
    displayArr(arrayNumber);
    analysisArr(arrayNumber);
}
// xử lý sự kiện cho nút sắp xếp giãm dần
document.querySelector('#giam-dan').onclick = function(){
    arrayNumber = sortDecrease(arrayNumber);
    displayArr(arrayNumber);
    analysisArr(arrayNumber);
}
//xử lý sự kiện cho nút đổi vị trí
document.querySelector('#doiViTri').onclick = function(){
    let index1 = +document.querySelector('#vi-tri-1').value;
    let index2 = +document.querySelector('#vi-tri-2').value;
    arrayNumber = changeIndex(index1,index2,arrayNumber);
    displayArr(arrayNumber);
}

//xử lý xự kiện cho nút tìm số nguyên tố
document.querySelector('#tim-so-nguyen-to').onclick = function(){
    var soNguyenToDau = getPrimeFrom(arrayNumber)[0];
    document.querySelector("#so-nguyen-to-dau").innerHTML = soNguyenToDau;
}
//xử lý sự kiện cho nút thêm mảng số thực
document.querySelector('#them-mang-so-thuc').onclick = function(){
    //lấy giá trị
    var displaySoThuc = document.querySelector('#mang-so-thuc-output');
    var arrStrSoThuc = document.getElementById('mang-so-thuc').value.split(' ');
    var errorSoThuc = document.querySelector('#error-input-so-thuc');
    //kiêm tra nhập liệu
    if(!validateNumberArray(arrStrSoThuc)){
        errorSoThuc.style.display = 'block';
        return;
    }
    errorSoThuc.style.display = 'none';
    //thêm vào mảng sô thực
    var arrSoThucNew = convertArrToNumber(arrStrSoThuc);
    //hiển thị
    document.querySelector('#mang-so-thuc').value = '';
    arrSoThuc = arrSoThuc.concat(arrSoThucNew);
    displaySoThuc.innerHTML = arrSoThuc.toString();
}

//xử lý sự kiện cho nút đêm số nguyên
document.querySelector('#dem-so-nguyen').onclick = function(){
    var soSoNguyen = getIntergerFrom(arrSoThuc).length;
    document.querySelector('#so-so-nguyen').innerHTML = soSoNguyen;
}



/**
 * Hàm hiển thị mảng số nguyên ra màn hình
 * @param {*} arr 
 */
function displayArr(arr){
    document.getElementById('hien-thi-mang').innerHTML = arr.toString();
}

/**
 * Hàm xử lý và hiển thỉ các kết quả phân tích mảng số nguyên ra màn hình
 * @param {*} arr 
 */
function analysisArr(arr){
    //output
    let tongSoDuong = 0;
    let soMin = 0;
    let soDuongMin = 0;
    let soChanLast = -1;
    
    //tinh tổng các số dương 
    var arrSoDuong = getPositiveNumbers(arr);
    for (let i = 0; i < arrSoDuong.length; i++) {
        tongSoDuong += arrSoDuong[i];
    }
    //tìm số nhỏ nhất
    soMin = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(soMin>arr[i]){
            soMin = arr[i];
        }
    }
    //Tìm số dương nhỏ nhất
    soDuongMin = arrSoDuong[0];
    for (let i = 0; i < arrSoDuong.length; i++) {
        if(soDuongMin>arrSoDuong[i]){
            soDuongMin = arrSoDuong[i];
        }
    }
    // lấy số chẳn cuối cùng
    var soChan = getEvens(arr);
    console.log(soChan);
    if(soChan.length>0){
        soChanLast = soChan[soChan.length-1];
    }
    // xử lý so sánh số lượng số âm và dương
    var soDuong = getPositiveNumbers(arr).length;
    console.log(soDuong);
    var soAm = getNegativeNumbers(arr).length;
    console.log(soAm);

    var duongPerc = +Math.round((soDuong/(soAm+soDuong))*100);
    var amPerc = 100 - duongPerc;
    
    //hiển thi ra màn hình
    document.querySelector('#tong-so-duong').innerHTML = tongSoDuong;
    document.querySelector('#so-luong-so-duong').innerHTML = arrSoDuong.length;
    document.querySelector('#so-luong-so-duong').innerHTML = arrSoDuong.length;
    document.querySelector('#so-min').innerHTML = soMin;
    document.querySelector('#so-duong-min').innerHTML = soDuongMin;
    document.querySelector('#so-chan-last').innerHTML = soChanLast;

    //Hiên thị biểu đồ số âm dương
    var duongChar = document.querySelector('#charDuong');
    var amChar = document.querySelector('#charAm');
    duongChar.innerHTML = duongPerc + '%';
    amChar.innerHTML = amPerc + '%';
    duongChar.style.width = duongPerc*4 + 'px'; 
    amChar.style.width = amPerc*4 + 'px'; 
}









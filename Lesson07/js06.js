//  cấu trúc switch ...  case
// nhập vào một số từ 1-7 => in ra thứ tương ứng
// 1 => Chủ nhật
// 2 => Thứ hai

var thu = parseInt(prompt("Nhập một số:"));
document.write("<h2>");
switch(thu){
    case 1:
        document.write("Chủ nhật");
        console.log("Chủ nhật");
        break;
    case 2:
        document.write("Thú hai");
        console.log("Thú hai");
        break;
    case 3:
        document.write("Thú ba");
        console.log("Thú ba");
        break;
    case 4:
        document.write("Thú tư");
        console.log("Thú tư");
        break;
    case 5:
        document.write("Thú năm");
        console.log("Thú năm");
        break;
    case 6:
        document.write("Thú sáu");
        // console.log(Thu,"Thú sáu");
        thu="Thứ sáu" ;
        break;
    case 7:
        document.write("Thú bảy");
        console.log("Thú bảy");
        break;
    default:
        document.write("Bạn nhập sai");
        console.log("Bạn nhập sai");
        break;
}

// bài tập:
/*
    Bài 1:
        Nhập vào biến tháng, năm
        In ra số ngày trong tháng năm vừa nhập
        ví dụ:
        thang=11
        nam=2022
        => tháng 11 năm 2022 có 30 ngày!

    Bài 2:
        Nhập vào một số từ 0-9 => đọc thành lời việt
        0 -> không
        1 -> một
        ...
        9 -> chín
    Bài 3: 
        Nhập vào một số có 2 chữ số => đọc thành lời việt
        10 -> mười
        11 -> mười một
        
        15 -> mười lăm

        20 -> hai mươi

        25 -> hai mươi lăm

        99 -> chín mươi chín


        25 -> 
           dv=  25 % 10 = 5
           hc= 25/10 =5
*/
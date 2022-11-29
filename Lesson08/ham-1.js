// hàm không đối số, không trả về giá trị xác định
function display(){
    console.log("Welcome to....");
}
// gọi thực thi
display();
// hàm có đối số
function show(name,age){
    console.log("Welcome to, ", name, "Tuổi:", age);
}
show();
show("Devmaster",6);

// hàm có trả về giá trị
function tinhToan(a,b,phepTinh){
    let ketQua=0;
    // switch(phepTinh){
    //     case "*":
    //         ketQua=a*b;
    //         break;
    //     case "/":
    //         ketQua=a/b;
    //         break;
    //     case "+":
    //         ketQua=a+b;
    //         break;
    //     case "-":
    //         ketQua=a+b;
    //         break;
    //     case "%":
    //         ketQua=a%b;
    //         break;
    // }
    ketQua = eval(a+phepTinh+b);
    return ketQua;
}
// gọi thực hiện
var kq = tinhToan(10,15,"*");
console.log(kq);
kq = tinhToan(10,15,"/");
console.log(kq);
kq = tinhToan(10,15,"+");
console.log(kq);
kq = tinhToan(10,15,"-");
console.log(kq);
kq = tinhToan(10,15,"%");
console.log(kq);
//----------------------
//Hàm có tham số mặc định
function display(name, company="Devmaster"){
    console.log(name,company);
}
display("Chung");
display("Chung Trịnh","Devmaster Academy");
//
function display(name, company){
    company = company || "Devmaster";
    console.log(name,company);
}
display("Chung");
display("Chung Trịnh","Devmaster Academy");
display();

// Hàm có đối số không cố định
function add(a,b, ...other){
    console.log(a,b,...other);
    let tong = a+b;
    for (const i in other) {
        tong +=other[i];
    }
    console.log(tong);
}
add(1,2,3);
add(1,2,3,4,5,6);

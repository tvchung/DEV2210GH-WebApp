// đối tượng trong javascript
// khởi tạo đối tượng
var emp = new Object();
// Tạo các thuộc tính
emp.fullName="Chung Chung";
emp.address="25 Vũ Ngọc Phan";

// in 
console.log(emp);
// tạo phương thức
const display =(emp)=>{
    console.log("FullName:",emp.fullName);
    console.log("Address:",emp.address);
}
// gọi thực hiện phương thức
display(emp);

//2. sử dụng {}
var emp = {};
// tạo thuộc tính cho đối tượng
emp.fullName = "Devmaster";
emp.age = 50;
emp.gender='male';
// Tạo phương thức
emp.display = (par)=>{
    console.log(par.fullName);
    console.log(par.age);
    console.log(par.gender);
}
// gọi thực hiện phương thức
emp.display(emp);
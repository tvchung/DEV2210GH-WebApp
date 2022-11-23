// Các toán tử trong javascript
// Toán tử số học: *; / ; +; -; %; ++; --
var a=10;
var b=15;

// thực hiện các phép toán số học trên 2 biến a, b
c = a * b ;
console.log(a,"*",b,"=",c);
c = a / b ;
console.log(a,"/",b,"=",c);
c = a + b ;
console.log(a,"+",b,"=",c);
c = a - b ;
console.log(a,"-",b,"=",c);
c = a % b ;
console.log(a,"%",b,"=",c);
c=a++; // c=a=10; kết thúc lệnh a được tăng lệnh
console.log(a,"++",c);
c=++b;
console.log("++",b,"=",c);

// toán tử so sánh: >; >=; <; <=; ==; ===; !=; !==;

c = a==b;
console.log(a,"==",b,"=>" ,c);

c = a!=b;
console.log(a,"!=",b,"=>" ,c);

c = a>b;
console.log(a,">",b,"=>" ,c);
c = a<b;
console.log(a,"<",b,"=>" ,c);

a =10;
b ="10";


c = a==b;
console.log(a,"==",b,"=>" ,c);

c = a===b;
console.log(a,"===",b,"=>" ,c);
console.log(typeof(a));
console.log(typeof(b));


// toán tử logic: and (&&); or (||), not !

console.log(a<=b);
console.log(b>0);
c = (a<=b) && (b>0); 
console.log(c); 

a=10;
b=15;

console.log(a<b);
console.log(b>0);
c = (a<b) && (b>0); 
console.log(c); 

// toán tử gán 

a=10;
console.log("a=",a);
a +=10;
console.log("a +=",a);
a *=10;
console.log("a *=",a);

// toán tử đặc biệt
a=10;
res = (a%2==0)?"chẵn":"lẻ";
console.log(res);
a=11;
res = (a%2==0)?"chẵn":"lẻ";
console.log(res);
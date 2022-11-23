// Cấu trúc điều khiển if
// Dạng 1: if đơn
/*
    if(condition){
        statement
    }

    ex: cho giá trị của 1 biến a (a=?);
    nếu a>0 thì in ra a;
*/
a=10; // test a dương
if(a>0){
    console.log(a, " là số dương");
}
a=-10; // test
if(a>0){
    console.log(a, " là số dương");
}

/* Dạng 2: if đầy đủ
    if(condition){
        statement block -  condition=true
    }else{
        statement block -  condition=false
    }

    ex: kiểm tra số a là số chẵn hay số lẻ
*/
a=21;
if(a%2 == 0){ //21%2 = 1 
    console.log(a, " là số chẵn");
}else{
    console.log(a, " là số lẻ");
}

/* Dạng 3: if bậc thang 
    if(condition1){
        statement 1; //condition1=true
    }else if (condition2){
        statement 2; //condition2=true
    }.....

    }else{
        statement n+1; //  toàn bộ các điều kiện trên đều sai
    }

    //ex: kiểm tra số a là số dương, âm hay số 0
*/
a=0;
if(a>0){
    console.log(a, "la số dương");
}else if(a<0){
    console.log(a,' là số âm');
}else{
    console.log(a," là số 0");
}
/* Dạng 4: if lồng nhau
    là cấu trúc if đặt bên trong một cấu trúc if hoặc else 
*/
//  cho 2 hệ số a, b
// Giải phương trình bậc 1;  ax+b = 0 

//


// if(a!=0){
//     x=-b/a;
//     console.log("PT: ",a,".x + ",b,"=0 > nghiệm x=",x);
// }else{ // a==0
//     if(b==0){
//         console.log("PT: ",a,".x + ",b,"=0 > Vô số nghiệm");
//     }else{
//         console.log("PT: ",a,".x + ",b,"=0 > Vô nghiệm");
//     }
// }
function ptb1(a,b){
    if(a==0){
        if(b==0){
            console.log("PT: ",a,".x + ",b,"=0 > Vô số nghiệm");
        }else{
            console.log("PT: ",a,".x + ",b,"=0 > Vô nghiệm");
        }
    }else{ // a!=0
        x=-b/a;
        console.log("PT: ",a,".x + ",b,"=0 > nghiệm x=",x);
    }    
}
ptb1(0,0);
ptb1(0,10);
ptb1(10,20);


// bài tập: giải phương trình bậc 2

// arrow function
const display = ()=>{
    console.log("Welcome to ....");
}
display();

const show = (name)=>{
    console.log("Welcome to ....", name);
}
show("Chung chuung");

// 
var add = (a,b,pt)=>{
    return eval(a+pt+b);
}
console.log(add(10,20,"+"));

var add = (a,b,...other)=>{
    let t = a+b;
    other.forEach(x=>{
        t +=x;
    })

    return t;
}
console.log(add(10,20,30));
console.log(add(10,20,30,40,50));

add =(a,b,c)=>{
    return a+b+c;
}
console.log(add(1,2,4));

// let 

let sum = (a,b)=>{
    console.log(a+b);
}
sum(1,3);
/* error
let sum = (a,b,c)=>{
    console.log(a+b+c);
}
sum(1,3);
*/
sum = (a,b,c)=>{
    console.log(a+b+c);
}
sum(1,3,5);
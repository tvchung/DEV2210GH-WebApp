const arr = [12,3,5,7,9,0,20,15];
console.log(arr);
arr.forEach(element => {
    console.log(element);
});
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr.forEach((element,key) => {
    console.log(key,element);
});

let x = arr.filter(x=>x>0);
console.log(x);
x= arr.filter(x=>x%2==0);
console.log(x);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// // ----------
const result1 = words.map((element)=>{
    console.log(element);
});
const array1 = [1, 4, 9, 16, 5, 8, 3];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);

console.log(array1);
array1.sort();

console.log(array1);

array1.sort((x,y)=>x-y);
console.log(array1);
array1.sort((x,y)=>y-x);
console.log(array1);


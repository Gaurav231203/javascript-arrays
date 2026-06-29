//find return the first value from the array which mmeets the condition

let arr=[1 , 2 , 3, 3 , 4 , 5 , 6]
let newarr= arr.find(function( val){
     return 3===val;
});
console.log(newarr);
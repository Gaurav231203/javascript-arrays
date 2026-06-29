let arr=[1 ,10,11,50,3,6]
let newarr= arr.map(function(val){
    if(val >= 10 ) return val;
});
console.log(newarr);
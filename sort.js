//array ko ek ordr mai sort karna
let arr=[1,63,31,4,99,24,71,8,55]
console.log(arr);
let sr=arr.sort(function(a,b){
    return a-b;
});

console.log(sr);
let da=arr.sort(function(a,b){

    return b-a;
});
console.log(da);
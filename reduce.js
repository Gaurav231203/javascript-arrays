//reduce menas  ki pure array ka  kewal 1 ans hoga  mtlb array ko reduce krr kay 1 value bnai jyegi
let arr = [ 1 , 2, 3 , 4, 5 ,6];
let newarr=arr.reduce(function(accumellator,val){
    return accumellator-val;
} ,0 );
console.log(newarr)
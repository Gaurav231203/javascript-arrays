/*map() is use when we need new or have to make new  array on the basis of the old array 
map dikhte he mann mai ek blank array bana liya kro
abb isaky andr ka functiion jo jo return krega wo new array mai dalte raho
 
map() → return ki value se naya array banta hai.*/ 
/* jabb  bhi koi asa case dikh jaye jaha par eka rray sat naya array bnagea annd wo naya array kuch values ko 
rakhega tbb map banega*/
  
let marks=[20,40,90,60];
console.log(marks);
  let newmark=marks .map(function(val){
    return 12;
 })  ; 
 console.log (newmark);
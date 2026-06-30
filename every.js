//To every() ka matlab hai:

//"Kya saare elements condition satisfy karte hain?"
// agr ek bhi element conditon ko d=setisfy na kre to----> "false"

let arr = [ 20 , 40 , 60 , 80, 100 ,120]
 let evry= arr.every(function(val){
    return val % 2 === 0 ;

 })
 console.log(evry);
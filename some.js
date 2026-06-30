
/* some() kya karta hai?

Ye check karta hai ki

"Kya array mein ek bhi element meri condition ko satisfy karta hai?"

Agar ek bhi mil gaya → true

Agar ek bhi nahi mila → false*/ 


let arr = [ 10 , 50 , 60 , 30 , 80 ,90]
 let any= arr.some(function(val){
    return 85 > val;

 })
 console.log(any);
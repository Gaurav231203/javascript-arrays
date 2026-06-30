/*Spread Operator (...)

Spread ka matlab hai:

"Ek cheez ko khol dena (spread kar dena)."

Socho tumhare paas cards ka bundle hai.

[1,2,3]

Spread operator bolta hai:

1,2,3

Bundle khol diya. */
let arr=[1 , 2 , 3, 4, 5 ,6, 7]
let newarr=[...arr]
  newarr.push(9);
  console.log(arr);
    console.log(newarr);
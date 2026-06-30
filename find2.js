let arr=[ 
    {id:1, key:1},
  {id:2, key:2},
  {id:3, key:1}];
   
  let newarr= arr.find(function(val){
  return 1 === val.key ;
  });
  console.log(newarr);

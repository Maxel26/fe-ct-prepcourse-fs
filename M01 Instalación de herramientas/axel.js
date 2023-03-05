var num = 19

var esPrimo = true 
   for(var i = 2 ; i < num ; i++){
      if(num % i === 0){
         esPrimo = false ;
      }
   }
   if(esPrimo){
      return true ; 
    } else{
        return false ;
    };
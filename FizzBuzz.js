function FizzBuzz (x){
    
    for (let i = 1 ; i <= x ; i++){
        
        if (  i % 3 == 0  && i % 5 == 0){
            console.log("FizzBuzz");
        }else if (i % 5 == 0 ){
            console.log("Buzz");
        }else if (i % 3 == 0){
            console.log("Fizz");
        }else{
            console.log(i)
        }
    }
}
FizzBuzz (20);
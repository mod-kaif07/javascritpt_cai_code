// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


(function chai2(name ){
    // named IIFE
    console.log(`DB CONNECTED ${name}`);
})('kaif');

// we cant able to two write two IIFE , if we use then seuraly use ";" the it run  hence it give error 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');


(() => {
    console.log(`DB CONNECTED TWO`);
})();

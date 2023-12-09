// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB connected`);
// }
// chai()
// To avoid pollutiom from global scope and execute function immediately is equivalent to below
(function chai(){
    // Named IIFE
    console.log(`DB connected`)
})();        //DB connected

// Make sure to end above with semicolon to make sure to run next set of code
(() => {
    // Arrow function IIFE
    console.log(`DB connected two`)
})();

((name) => {
    // Parametered IIFE
    console.log(`DB connected three ${name}`)
})("Shikha");       //DB connected three Shikha
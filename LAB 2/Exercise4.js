function isNotNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n) && n>0;
}
function helloWorlds(num){

    if (isNaN(num)){
        
        console.log ('Goodbye World');
        return;

    }for (var i = 0; i < num; i++) {
        console.log('Hello World');
    }
    
    }
    //call function 

helloWorlds(5);
helloWorlds(true); // Goodbye
helloWorlds("hello"); // Goodbye
helloWorlds(null); // Goodbye
helloWorlds(undefined); // Goodbye
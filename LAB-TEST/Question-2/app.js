// rounds

//question 2

// import the events module 
var Emitter= require('events');
var emt= new Emitter(); 

let p = 1
// playing the rounds 
let round = setInterval(() => {
    console.log('Round' + p);
    emt.emit('Ping')
    emt.emit('Pong')

// clear log when final round is reached 

if (p >= num){
    clearInterval(round)

    console.log('Game is over...')
}
p++

},2000)

let playGame = function (){
    emt.emit('p');
};
// call function 
playGame(3);


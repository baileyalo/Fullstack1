function gretter(myArray, counter){
    let greetText = 'Hello';
    for (let index = 0; index<myArray.length; index++){
        console.log(greetText + myArray[index]);

    }
    
}gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
// question 1

// multiply numbers and throw error invalid input
function multiplyTwoNumbers(x,y){
    if (isNaN(x,y)){
        console.log('Invalid number');
        return;
    }else {
        result = x*y;
        return result;
    }


}
//double function and throw error 
function  evenDoubler(x){
    if (isNaN(x)){
        console.log('Invalid number');
        return;

    }else if (x%2==0){
        result = x*x;
        return result;
    }else {
        result= 0;
        return result;
    }

}

// export methods
module.exports.multiplyTwoNumbers = multiplyTwoNumbers;
module.exports.evenDoubler = evenDoubler;






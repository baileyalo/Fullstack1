function capitalizedColors(){

    const colors =['red', 'green', 'blue'];
    let result = colors.map(val => val[0].toUpperCase()
    + val.slice(1));    
    return result;  
    
    }
    
    console.log(capitalizedColors());

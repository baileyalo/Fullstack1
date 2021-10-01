let values = [1, 60, 34, 30, 20, 5];

function filterLessThan20(){    

   let result = values.filter(x => x<20);
		return result;
    }

console.log(filterLessThan20());
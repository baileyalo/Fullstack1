let array = [1, 2, 3, 4];
function calculateSum(){
	
let result = array.reduce(function(acc, val){
	return  acc+ val;
	
},0);

}
console.log(calculateSum());

function calculateProduct(){
let result = array.reduce(function(acc, val){
	  return acc * val;

	 
	  
},0); 
}
console.log(calculateProduct());
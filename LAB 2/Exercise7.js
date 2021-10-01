
function findFacts(cityobjects) {
   	return `${cityobjects.name} has a population of ${cityobjects.population} and located in ${cityobjects.continent}`;
}


findFacts({
    name: "Toronto",
    population: "6,197,000",
    continent: "North America"
  }) 
  
  //Output =>  "Toronto has a population of 6,197,000 and is located in North America"
  
  findFacts({
    name: "Venice",
    population: "261,905",
    continent: "Europe"
  }) //Output => "Venice has a population of 261,905 and is located in Europe"

  
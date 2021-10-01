

function getKeyValuePairs(objects) {
    var Val = [[],[]];
      for (var key in objects) {
      Val[0].push(key);
      Val[1].push(objects[key]);
    }
    return Val;
  }


  function getKeyValuePairs(objects) {
    const keys = Object.keys(objects)
    const values = Object.values(objects)
    return [
      keys,
      values
    ]
  }

getKeyValuePairs({ a: 5, b: 10, c: 16 })
//Output => [ [ 'a', 'b', 'c' ], [ 5, 10, 16 ] ]

getKeyValuePairs({ r: "React", a: "Angular", v: "Vue" })
// Output => [ [ 'r', 'a', 'v' ], [ 'React', 'Angular', 'Vue' ] ]

getKeyValuePairs({ k1: true, k2: false, k3: undefined })
// Output => [ [ 'k1', 'k2', 'k3' ], [ true, false, undefined ] ]




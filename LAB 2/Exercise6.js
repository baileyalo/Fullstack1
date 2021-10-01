
function emptyArray (myArray) {

    if(!Array.isArray(myArray)) {
      throw new Error("Not an existing array..")
    }
    while(myArray.length > 0) {
      myArray.pop();
  }
    return myArray;
}

emptyArray([1,2,3])

emptyArray(["egg","bacon","toast","coffee","random","juice"]);
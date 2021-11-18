const sorterPromise = (array) => new Promise((resolve, reject) => {
  if (array.every(item => typeof item === "string")) {
    const arr2 = array = array.sort();
    resolve(arr2)
  }
  else {    
    reject("Error: Not all elements are string type!");
  }
});

export default sorterPromise;

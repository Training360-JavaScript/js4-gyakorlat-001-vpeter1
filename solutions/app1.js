const converterPromise = (array) => new Promise((resolve, reject) => {
  if (array.every(item => typeof item === "string")) {
  const arr1 = array.map(item => item.toUpperCase());    
  resolve(arr1);
}
else {  
  reject("Error: Not all elements are string type!");
}
});

export default converterPromise;

const search = (array, element) => {

  for (let i = 0; i < array.length; i++) {
    
    if (array[i] === element) {
      return i;
    }
  }
}

console.log(search(['A', 'B', 'C', 'D', 'E', 'F'], 5));

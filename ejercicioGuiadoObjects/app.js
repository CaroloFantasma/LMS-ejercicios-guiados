// let dog = [['Breed', 'Schnauzer'], ['Name', 'Schnauzy'], ['Age', '7']];

// let arrayToObject = (arrayTwo) => {
//   let newObject = {};

//   for (let i = 0; i < arrayTwo.length; i++) {
//     newObject [arrayTwo[i] [0]] = arrayTwo[i] [1];
//   }
//   return newObject;
// }

// console.log(arrayToObject(dog));

//Object to array

let dog = {
  Breed: 'Schnauzer',
  Name: 'Schnauzy',
  Age : 7,
  Size: 'medium'
}

let objectToArray= (object) => {
  let arrayTwo= [];
  let properties= Object.keys(object);
  for (let i = 0; i < properties.length; i++) {
    arrayTwo.push([properties[i],object[properties[i]]])
  }
  return arrayTwo;
}

 console.log(objectToArray(dog));

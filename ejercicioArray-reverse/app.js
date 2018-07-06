//Reverse forma 1

let dogNames = ['Coffee', 'Papa frita', 'Luna' , 'Pimpi', 'Mono'];

  const reverse = (array) => {
  let newArr = [];
  let size = array.length;
  let lastPosition = size - 1;

  for (let i = lastPosition; i >= 0; i--) {
    newArr.push(array[i])
  }
  return newArr;
}
  console.log(dogNames);
  console.log(reverse (dogNames));

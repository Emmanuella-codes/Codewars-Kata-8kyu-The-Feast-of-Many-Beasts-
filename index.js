function feast(beast, dish) {
  let firstChar = beast[0];
  let lastChar = beast[beast.length - 1];
  return Boolean(dish[0] === firstChar && dish[dish.length - 1] === lastChar);
}
console.log(feast("great blue heron", "garlic naan")); // returns true
console.log(feast("brown bear", "bear claw"));      // returns false
console.log(feast("chickadee", "chocolate cake"))   // returns true

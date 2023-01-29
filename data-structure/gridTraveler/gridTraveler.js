// normal gird traveler
const gridTraveler = (m, n) => {
  if (n === 1 && m === 1) return 1;
  if (n === 0 || m === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));

// optimize gird traveler with memo

const optimizeGridTraveler = (m, n, memo={}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (n === 1 && m === 1) return 1;
  if (n === 0 || m === 0) return 0;
  memo[key] = optimizeGridTraveler(m - 1, n, memo) + optimizeGridTraveler(m, n - 1, memo);
  return memo[key];
};
console.log("After optimization with memo");
console.log(optimizeGridTraveler(1, 1));
console.log(optimizeGridTraveler(2, 3));
console.log(optimizeGridTraveler(3, 2));
console.log(optimizeGridTraveler(3, 3));
console.log(optimizeGridTraveler(18, 18));

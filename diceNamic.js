//jshint esversion: 7
/*let rollDie = function() {
  return Math.floor(Math.random() * 6 + 1);
};

//return the number of rolls to hit double n's
let rollDoubles = function(n) {
  let rollCount = 0,
    d1,
    d2;

  //roll until double n's
  do {
    d1 = rollDie();
    d2 = rollDie();
    ++rollCount;
  } while (!(d1 == n && d2 == n));

  return rollCount;
};

let n = prompt("enter n (1..6)");
alert(`Double ${n}'s in ${rollDoubles(n)} rolls.`);
console.log(`Double ${n}'s in ${rollDoubles(n)} rolls.`);*/

let rollDie1 = function() {
  return Math.floor(Math.random() * 6 + 1);
};

let rollDoubles1 = function(n) {
  let rollCount = 0,
    d1,
    d2;
  do {
    d1 = rollDie1();
    d2 = rollDie1();
    ++rollCount;
  } while (!(d1 == n && d2 == n));

  return rollCount;
};

let die = function() {
  return Math.floor(Math.random() * 6 + 1);
};

let roll = function(n) {
  let count = 0;
};

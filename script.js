// main variables
let waffles = 0;
let power = 1;

// waffle gain function
document.getElementById("Wafflemain").onclick = function clickWaffle() {
  waffles += power;
  console.log(waffles);
  document.getElementById("Wafflecount").textContent = waffles;
};

/* 
    reminder so you don't forget
    fucking loser

    order:
        1. parentheses
        2. exponents
        3. multiplication, division and then modulos/modulus
        4. addition and subtraction
        
    forgetful little shit
*/

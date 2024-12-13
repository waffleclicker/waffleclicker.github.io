// main variables
let waffles = 0;

// waffle gain function
document.getElementById("waffleMain").onclick = function () {
  waffles += 1;
  console.log(waffles);
  document.getElementById("waffleCount").textContent = waffles;
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

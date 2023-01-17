console.log("****** EXCERCISE 6 - Dices ******");
const buttonRollDice = document.querySelector('#rollDice');
buttonRollDice?.addEventListener('click', () => {
  console.log("****** EXCERCISE 6 - Dices ******");
  const min = 1;
  const max = 6;
  let dice_1: number | null;
  let dice_2: number | null;;

  function resetDice_1 () {
    dice_1 = null;
    return dice_1;
  }
  function resetDice_2 () {
    dice_2 = null;
    return dice_2;
  }

  function getRandom(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function rollDice_1(){
    dice_1 = getRandom(min, max);
    console.log("The result of dice 1 is: " + dice_1);
    return dice_1;
  }

  function rollDice_2(){
    dice_2 = getRandom(min, max);
    console.log("The result of dice 2 is: " + dice_2);
    return dice_2;
  }

  function prizeDoubleSix(){
    if(dice_1 === 6 && dice_2 === 6) {
      console.log("You have won a prize");
    }
  }

  rollDice_1();
  rollDice_2();
  prizeDoubleSix();
  resetDice_1();
  resetDice_2();
})

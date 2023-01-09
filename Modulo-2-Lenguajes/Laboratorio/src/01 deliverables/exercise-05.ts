console.log("************** DELIVERABLE 05 *********************");
console.log("************** Slot Machine *********************");

class SlotMachine {
  constructor(coins){
    this.coins = coins;
  }

  play(){
    this.coins = this.coins + 1;

    let randomBoolean1 = Math.random() >= 0.5;
    let randomBoolean2 = Math.random() >= 0.5;
    let randomBoolean3 = Math.random() >= 0.5;

    if(randomBoolean1 && randomBoolean2 && randomBoolean3) {
      console.log(`Congratulations!!! You won ${this.coins} coins!!`);
      this.coins = 0;
    }else{
      console.log("Good luck next time!");
    }

  }
}

const machine1 = new SlotMachine(1);
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play();

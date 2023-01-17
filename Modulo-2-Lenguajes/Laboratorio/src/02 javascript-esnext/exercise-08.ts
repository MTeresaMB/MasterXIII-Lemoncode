console.log("************** SLOTS MACHINE *********************");

class SlotMachineEsnext {
  coins: number;
  constructor(coins: number){
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

const machine2 = new SlotMachineEsnext(1);
machine2.play(); 
machine2.play(); 
machine2.play(); 
machine2.play(); 
machine2.play();

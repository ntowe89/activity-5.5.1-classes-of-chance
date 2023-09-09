class Casino{
    // Write code here
    constructor(name, isFakeCoin){
        this.name = name;
        this.isFakeCoin = isFakeCoin;
    }

    playGame(timesPlayed){
        for( let i=0 ; i < timesPlayed; i++){
            if(this.isFakeCoin == true){
                console.log(this.name + ' ' + 'wins')
            }
            else{
                let x = Math.random()
                if(x < .5){
                    console.log(this.name + ' ' + 'wins')
                }
                else{
                    console.log('The player wins!')
                }
            }
            
        }
         
    }
    rollDie(timesPlayed){
        for( let i=0 ; i < timesPlayed; i++){
            if(this.isFakeCoin == true){
                console.log(this.name + ' ' + 'wins')
            }
            if(this.isFakeCoin == false){
                console.log('Player wins!!')
            }
            else{
                let x = Math.random()
                if(x < .5){
                    console.log(this.name + ' ' + 'wins')
                }
                else{
                    console.log('The player wins!')
                }
            }
            
        }

    }
};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS

const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);


// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);


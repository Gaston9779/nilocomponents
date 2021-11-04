
export default class MorraLogic {
    constructor(
        choices = {
            paper: { lose: 'scissors', win: 'rock' },
            rock: { lose: 'paper', win: 'scissors' },
            scissors: { lose: 'rock', win: 'paper' }
        },
        points = {
            win: 10,
            lose: -10
        },
        message = {
            win: "You win!",
            lose: "You lose!",
            tie: "Tie"
        }
    ) {
        this.choices = choices
        this.win = points.win
        this.lose = points.lose
        this.message = message
    }

    game = (userChoice) => {
        let cpuChoice = (Object.keys(this.choices))[Math.floor(Math.random() * 3)]
        if (this.choices[userChoice].win === cpuChoice) return({message: this.message.win, user: userChoice, cpu: cpuChoice, points: this.win})
        if (this.choices[userChoice].lose === cpuChoice) return({message: this.message.lose, user: userChoice, cpu: cpuChoice, points: this.lose})
        return({message: this.message.tie, user: userChoice, cpu: cpuChoice, points: 0})
    };
}






// covid       novax   vaccino
// novax       vaccino covid
// vaccino     covid   novax


// carta       sasso   forbice
// forbice     carta   sasso
// sasso       forbice carta
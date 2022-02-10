function yesNo1 () {
    if (answer == "yes") {
    	
    } else if (answer == "no") {
        game.splash("You're good to go, then!")
        game.over(true, effects.confetti)
        game.splash("Would you like to create a savings plan?")
    } else {
        game.splash("Please input a proper response (ex: \"yes\", \"no\")")
        game.reset()
    }
}
let answer = ""
let yesNO = ["yes", "no"]
game.splash("Do you have 5-7 months worth of money in a secure, liquid place?")
answer = game.askForString("For this program, please respond in lowercase.")
let step = 0
yesNo1()

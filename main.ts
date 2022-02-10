function redo () {
    game.splash("Please input a proper response (ex: \"yes\", \"no\")")
    game.reset()
}
function answerSets () {
    if (answer == "yes") {
        game.splash("You're good to go, then!")
        game.over(true, effects.confetti)
    } else if (answer == "no") {
        answer = game.askForString("Would you like to create a savings plan?")
        if (answer == "no") {
            game.splash("You should think about your financial future.")
            game.over(false, effects.dissolve)
        } else if (answer == "yes") {
            game.splash("test")
        } else {
            redo()
        }
    } else {
        redo()
    }
}
let answer = ""
let yesNO = ["yes", "no"]
game.splash("Do you have 5-7 months worth of money in a secure, liquid place?")
answer = game.askForString("For this program, please respond in lowercase.")
answerSets()

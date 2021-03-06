function redo () {
    game.splash("Please input a proper response (ex: \"yes\", \"no\")")
    game.reset()
}
function moneyQ () {
    game.splash("What is your monthly income?")
    money = game.askForNumber("")
}
let money = 0
let moneyChoices = [
"It might be a good idea to put away some money every week",
"Chances are you could put some money away every other week or so.",
"Save money only when you're able to!",
"That is... not a lot at all. You should consider another career path or get an actual job."
]
game.splash("Do you have 5-7 months worth of living expenses in a secure, liquid place?")
let answer = game.askForString("Please respond in lowercase.")
if (answer == "yes") {
    game.splash("You're good to go, then!")
    game.over(true, effects.confetti)
} else if (answer == "no") {
    answer = game.askForString("Would you like to create a savings plan?")
    if (answer == "no") {
        game.splash("You should think about your financial future.")
        game.over(false, effects.dissolve)
    } else if (answer == "yes") {
        moneyQ()
    } else {
        redo()
    }
} else {
    redo()
}
while (money < 50) {
    game.splash("broke")
    moneyQ()
}

function redo () {
    game.splash("Please input a proper response (ex: \"yes\", \"no\")")
    game.reset()
}
function moneyQ () {
    game.splash("What is your monthly income after taxes?")
    money = game.askForNumber("")
}
let choice: string[] = []
let money = 0
let moneyChoices = [
"It might be a good idea to put away some money every week",
"Chances are you could put some money away every other week or so.",
"Save money only when you're able to!",
"Try to spend less on your wants, other than that, good job!",
"You're good to go, then!"
]
game.splash("Do you have 5-7 months worth of living expenses in a secure, liquid place?")
let answer = game.askForString("Please respond in lowercase.")
if (answer == "yes") {
    game.splash(moneyChoices[4])
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
if (money == 50) {
    game.splash(moneyChoices[3])
}
while (money > 50) {
    answer = game.askForString("Do you have a savings and retirement fund?")
    if (answer == "yes") {
        game.splash(moneyChoices[4])
        game.over(true, effects.confetti)
    } else if (answer == "no") {
        game.splash("Choose a percentage amount of your monthly income you'll deposit each month")
        answer = 0
        choice = [
        "5%",
        "8%",
        "10%",
        "20%"
        ]
    }
}

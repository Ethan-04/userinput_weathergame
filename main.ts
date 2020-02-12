let Weather_prediction = game.askForString("What is your weather prediction?")
game.splash("It is going to" + Weather_prediction)
let weather_man = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . 
. . . . . d d d d . . . . . . . 
. . . . . d d d d . . . . . . . 
. . . . . d d d d . . . . . . . 
. . . . . 1 2 2 1 . . . . . . . 
. . . 8 8 8 f 8 8 8 8 . . . . . 
. . . 8 8 8 8 f 8 8 8 . . . . . 
. . . 8 8 8 f 8 8 8 8 . . . . . 
. . . 8 8 8 8 f 8 8 8 . . . . . 
. . . d d 8 8 8 8 d d . . . . . 
. . . d d 8 8 8 8 d d . . . . . 
. . . . . f f f f . . . . . . . 
. . . . . 8 8 8 8 . . . . . . . 
. . . . . 8 8 8 8 . . . . . . . 
. . . . . 8 8 8 8 . . . . . . . 
`, SpriteKind.Player)
let weather_effects = Math.randomRange(0, 6)
if (weather_effects == 0) {
    effects.confetti.startScreenEffect()
    weather_man.say("Confetti!!")
} else if (weather_effects == 1) {
    effects.hearts.startScreenEffect()
    weather_man.say("Much Love")
} else if (weather_effects == 2) {
    effects.smiles.startScreenEffect()
    weather_man.say("NICE!!")
} else if (weather_effects == 3) {
    effects.blizzard.startScreenEffect()
    weather_man.say("COLD!")
} else if (weather_effects == 4) {
    effects.bubbles.startScreenEffect()
    weather_man.say("BUBBLES!!")
} else if (weather_effects == 5) {
    effects.starField.startScreenEffect()
    weather_man.say("NICE!!")
} else if (weather_effects == 6) {
    effects.clouds.startScreenEffect()
    weather_man.say("Boi")
}

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
    weather_effects.say("Confetti!!")
} else {
	
}

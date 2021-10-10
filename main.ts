radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    music.playMelody("A C5 A C5 A C5 A C5 ", 120)
})
radio.setGroup(2)
basic.forever(function () {
    if (input.soundLevel() >= 130) {
        radio.sendNumber(input.soundLevel())
    }
})

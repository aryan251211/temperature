input.onButtonPressed(Button.A, function () {
    basic.showString("" + (min_temperature))
})
input.onButtonPressed(Button.AB, function () {
    max_temperature = input.temperature()
    min_temperature = input.temperature()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (max_temperature))
})
let min_temperature = 0
let max_temperature = 0
max_temperature = input.temperature()
min_temperature = input.temperature()
basic.showNumber(input.temperature() * (1.8 + 32))
basic.forever(function () {
    if (input.temperature() < min_temperature) {
        min_temperature = input.temperature()
    }
    if (input.temperature() > max_temperature) {
        max_temperature = input.temperature()
    }
})

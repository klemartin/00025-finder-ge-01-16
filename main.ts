input.onButtonPressed(Button.A, function () {
    csatorna += 1
    radio.setGroup(csatorna)
    bingo = 0
})
input.onButtonPressed(Button.B, function () {
    csatorna += -1
    radio.setGroup(csatorna)
    bingo = 0
})
radio.onReceivedValue(function (name, value) {
    bingo = 1
})
let bingo = 0
let csatorna = 0
radio.setGroup(csatorna)
basic.forever(function () {
    basic.showNumber(csatorna)
    if (bingo == 1) {
        basic.showIcon(IconNames.Yes)
    }
})

radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    received = 1
})
let received = 0
radio.setGroup(0)
basic.forever(function () {
    if (received == 1) {
        received = 0
        led.toggle(2, 2)
    } else {
        led.toggle(4, 4)
    }
    basic.pause(500)
})

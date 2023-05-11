function L () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    100
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    150
    )
}
function Line () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0 && pins.digitalReadPin(DigitalPin.P12) == 0) {
        F()
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 0 && pins.digitalReadPin(DigitalPin.P12) == 1) {
        R()
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1 && pins.digitalReadPin(DigitalPin.P12) == 0) {
        L()
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1 && pins.digitalReadPin(DigitalPin.P12) == 1) {
        F()
        basic.pause(2000)
        S()
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        count = 0
    }
}
function F () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    100
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    100
    )
}
function R () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    150
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    100
    )
}
function S () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    0
    )
}
let count = 0
control.waitMicros(900)
count = 0
sensors.DDMmotor(
AnalogPin.P13,
0,
AnalogPin.P14,
0
)
sensors.DDMmotor(
AnalogPin.P15,
1,
AnalogPin.P16,
0
)
pins.digitalWritePin(DigitalPin.P20, 1)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P20) == 0) {
        F()
        basic.pause(1000)
        count += 1
    }
    while (count == 1) {
        Line()
    }
})

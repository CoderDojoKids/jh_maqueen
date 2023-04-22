let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
maqueen.motorStop(maqueen.Motors.All)
while (!(input.buttonIsPressed(Button.A))) {
    basic.showString("" + (maqueen.readPatrol(maqueen.Patrol.PatrolLeft)))
}
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 7) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
        basic.pause(500)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    }
})

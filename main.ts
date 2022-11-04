// It moves across the Screen saying iowa #1
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.clearScreen()
        images.createImage(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `).scrollImage(1, 300)
        basic.pause(500)
        basic.clearScreen()
        images.createImage(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `).scrollImage(1, 300)
        basic.pause(500)
        basic.clearScreen()
        images.createImage(`
            # . . . #
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `).scrollImage(1, 300)
        basic.pause(500)
        basic.clearScreen()
        images.createImage(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `).scrollImage(1, 300)
        basic.pause(500)
        basic.clearScreen()
        images.createImage(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `).scrollImage(1, 300)
        basic.pause(500)
        basic.clearScreen()
        images.createImage(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `).scrollImage(1, 300)
        basic.clearScreen()
        basic.pause(500)
        images.createBigImage(`
            . . . . . . . . . .
            . . . # . . # . . .
            . . . . . . . . . .
            . . # . . . . # . .
            . . . # # # # . . .
            `).scrollImage(1, 200)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        images.createImage(`
            # . # . .
            . # # # .
            . . # . #
            . # . # .
            . # . # .
            `).showImage(0, 300)
        images.createImage(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `).showImage(0, 300)
    }
    basic.clearScreen()
})

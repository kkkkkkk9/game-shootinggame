input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        子彈.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    子彈.set(LedSpriteProperty.X, 2)
    子彈.set(LedSpriteProperty.Y, 4)
})
let 子彈: game.LedSprite = null
子彈 = game.createSprite(2, 4)
let 靶 = game.createSprite(0, 0)
basic.forever(function () {
    if (子彈.isTouching(靶)) {
        game.addScore(1)
    }
})
basic.forever(function () {
    basic.pause(500)
    靶.change(LedSpriteProperty.X, 1)
    if (靶.get(LedSpriteProperty.X) == 4) {
        basic.pause(500)
        靶.set(LedSpriteProperty.X, 0)
    }
})

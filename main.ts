controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (talent == "swords") {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . b . . . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . . . . . b c b . . . . . . . 
            . . e e e e e e e e e e e . . . 
            . . e e e e e e e e e e e . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e e e . . . . . . . 
            . . . . . . e e e . . . . . . . 
            `, mySprite, randint(-50, 50), randint(-50, 50))
    } else if (talent == "teleportation") {
        pause(5000)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    scene.cameraShake(2, 100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
})
function choose_talent () {
    list = [
    "teleportation",
    "revealing",
    "shrinking",
    "swords",
    "none"
    ]
    return list._pickRandom()
}
let list: string[] = []
let projectile: Sprite = null
let talent = ""
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level5`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
info.setLife(3)
talent = choose_talent()

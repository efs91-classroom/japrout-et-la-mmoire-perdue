tiles.setCurrentTilemap(tilemap`niveau 1`)
let mySprite = sprites.create(assets.image`Moob_1`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)

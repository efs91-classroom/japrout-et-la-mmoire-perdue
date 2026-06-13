controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Hero.setImage(assets.image`Hero epée haute drotie`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setImage(assets.image`hero epee milieu droite`)
    pause(50)
    Hero.setImage(assets.image`Hero epee droite basse`)
})
let Hero: Sprite = null
let narateur = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
narateur.sayText("Vous êtes Japrout, lors de la guerre de Zamos vous vous êtes fait voler votre mémoire. Derkille LeFort (Le roi de Zamos) vous dépose Garuma une citée éloignée de toutes villes alentour. Il a séparé votre mémoire en petit fraguement qu' il a donner à des gardes royaux.", 20000, true)
tiles.setCurrentTilemap(tilemap`niveau 1`)
Hero = sprites.create(assets.image`Hero epée haute drotie`, SpriteKind.Player)
scene.cameraFollowSprite(Hero)
controller.moveSprite(Hero)

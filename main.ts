controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (jeuLance) {
        Hero.setImage(assets.image`Hero epée haute drotie`)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(jeuLance)) {
        choixMenu += 1
        if (choixMenu > 2) {
            choixMenu = 0
        }
        fleche.setPosition(35, 55 + choixMenu * 20)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(jeuLance)) {
        if (choixMenu == 0 || choixMenu == 1) {
            lancerJeu()
        }
    } else {
        Hero.setImage(assets.image`hero epee milieu droite`)
        pause(50)
        Hero.setImage(assets.image`Hero epee droite basse`)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(jeuLance)) {
        choixMenu += -1
        if (choixMenu < 0) {
            choixMenu = 2
        }
        fleche.setPosition(35, 55 + choixMenu * 20)
    }
})
function afficherMenu () {
    jeuLance = false
    scene.setBackgroundImage(assets.image`menu_fond`)
    boutonJouer = sprites.create(assets.image`bouton_jouer`, SpriteKind.Player)
    boutonContinuer = sprites.create(assets.image`bouton_continuer`, SpriteKind.Player)
    boutonCredits = sprites.create(assets.image`bouton_credits`, SpriteKind.Player)
    fleche = sprites.create(assets.image`fleche`, SpriteKind.Player)
    boutonJouer.setPosition(85, 55)
    boutonContinuer.setPosition(85, 75)
    boutonCredits.setPosition(85, 95)
    fleche.setPosition(35, 55)
    choixMenu = 0
}
function lancerJeu () {
    jeuLance = true
    boutonJouer.destroy()
    boutonContinuer.destroy()
    boutonCredits.destroy()
    fleche.destroy()
    scene.setBackgroundImage(null)
    game.showLongText("Je m'appelle...", DialogLayout.Center)
    game.showLongText("...", DialogLayout.Center)
    game.showLongText("Je ne m'en souviens plus.", DialogLayout.Center)
    game.showLongText("Je me rappelle d'une bataille.", DialogLayout.Center)
    game.showLongText("Du bruit. Du feu. De la peur.", DialogLayout.Center)
    game.showLongText("Puis plus rien.", DialogLayout.Center)
    game.showLongText("Que m'est-il arrivé ?", DialogLayout.Center)
    game.showLongText("Je dois retrouver ma mémoire.", DialogLayout.Center)
    tiles.setCurrentTilemap(tilemap`niveau 1`)
    Hero = sprites.create(assets.image`Hero epée haute drotie`, SpriteKind.Player)
    Hero.sayText("Mais ou suis-je ??", 2000, false)
    scene.cameraFollowSprite(Hero)
    controller.moveSprite(Hero)
}
let boutonCredits: Sprite = null
let boutonContinuer: Sprite = null
let boutonJouer: Sprite = null
let fleche: Sprite = null
let choixMenu = 0
let Hero: Sprite = null
let jeuLance = false
afficherMenu()

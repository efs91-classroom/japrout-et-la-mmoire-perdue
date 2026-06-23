controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (jeuLance) {
        if (directionHero == 1) {
            Hero.setImage(assets.image`Hero epée haute drotie`)
        } else {
            Hero.setImage(assets.image`hero épée haute gauche`)
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (jeuLance) {
        sprites.destroy(sprite)
        if (!(controller.B.isPressed())) {
            info.changeLifeBy(-1)
            Hero.x += -5 * directionHero
        }
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
    if (pageCredits) {
        pageCredits = false
        texteCredits.destroy()
        texteCredits2.destroy()
        texteCredits3.destroy()
        texteCredits4.destroy()
        texteCredits5.destroy()
        texteCredits6.destroy()
        texteCredits7.destroy()
        texteCredits8.destroy()
        afficherMenu()
    } else if (!(jeuLance)) {
        if (choixMenu == 0 || choixMenu == 1) {
            lancerJeu()
        } else if (choixMenu == 2) {
            pageCredits = true
            boutonJouer.destroy()
            boutonContinuer.destroy()
            boutonCredits.destroy()
            fleche.destroy()
            titre.destroy()
            titre2.destroy()
            afficherCredits()
        }
    } else {
        attaqueEnCours = true
        if (directionHero == 1) {
            Hero.setImage(assets.image`hero epee milieu droite`)
            pause(50)
            Hero.setImage(assets.image`Hero epee droite basse`)
            pause(100)
            Hero.setImage(assets.image`Hero epée haute drotie`)
        } else {
            Hero.setImage(assets.image`hero epee milieu gauche`)
            pause(50)
            Hero.setImage(assets.image`hero epee basse gauche`)
            pause(100)
            Hero.setImage(assets.image`hero épée haute gauche`)
        }
        attaqueEnCours = false
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
    titre = textsprite.create("Japrout", 0, 2)
    titre.setPosition(80, 15)
    titre2 = textsprite.create("et la memoire perdue", 0, 2)
    titre2.setPosition(80, 30)
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jeuLance) {
        if (directionHero == 1) {
            Hero.setImage(assets.image`Hero bouclier droite`)
        } else {
            Hero.setImage(assets.image`Hero bouclier gauche`)
        }
    }
})
function afficherCredits () {
    scene.setBackgroundImage(assets.image`fond_credits`)
    texteCredits = textsprite.create("EFS 91 DEV TEAM", 0, 2)
    texteCredits.setPosition(80, 15)
    texteCredits2 = textsprite.create("Design personnages", 0, 8)
    texteCredits2.setPosition(80, 35)
    texteCredits3 = textsprite.create("Abel (Link)", 0, 15)
    texteCredits3.setPosition(80, 47)
    texteCredits4 = textsprite.create("Codeurs :", 0, 8)
    texteCredits4.setPosition(80, 62)
    texteCredits5 = textsprite.create("Leyann (BigFlat)", 0, 15)
    texteCredits5.setPosition(80, 74)
    texteCredits6 = textsprite.create("Tristan (Vinci)", 0, 15)
    texteCredits6.setPosition(80, 86)
    texteCredits7 = textsprite.create("Design de la map", 0, 8)
    texteCredits7.setPosition(80, 98)
    texteCredits8 = textsprite.create("Ethan (ZFR_Tane)", 0, 15)
    texteCredits8.setPosition(80, 110)
}
function lancerJeu () {
    jeuLance = true
    boutonJouer.destroy()
    boutonContinuer.destroy()
    boutonCredits.destroy()
    fleche.destroy()
    titre.destroy()
    titre2.destroy()
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
    info.setLife(3)
    directionHero = 1
    Hero = sprites.create(assets.image`Hero epée haute drotie`, SpriteKind.Player)
    Hero.setPosition(130, 70)
    garde_1 = sprites.create(assets.image`img_garde_1`, SpriteKind.Enemy)
    garde_1.setPosition(110, 150)
    vie_garde_1 = 5
    Hero.sayText("Mais où suis-je ??", 2000, false)
    scene.cameraFollowSprite(Hero)
    controller.moveSprite(Hero)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (jeuLance && peutToucher) {
        peutToucher = false
        if (attaqueEnCours) {
            vie_garde_1 += -1
            garde_1.sayText("-1", 300, false)
        } else if (!(controller.B.isPressed())) {
            info.changeLifeBy(-1)
            Hero.x += -5 * directionHero
        }
        pause(500)
        peutToucher = true
    }
})
let projectile_garde_1: Sprite = null
let vitesse = 0
let distance = 0
let dy = 0
let dx = 0
let VX_garde_1 = 0
let VY_garde_1 = 0
let attaqueEnCours = false
let titre2: TextSprite = null
let titre: TextSprite = null
let boutonCredits: Sprite = null
let boutonContinuer: Sprite = null
let boutonJouer: Sprite = null
let texteCredits8: TextSprite = null
let texteCredits7: TextSprite = null
let texteCredits6: TextSprite = null
let texteCredits5: TextSprite = null
let texteCredits4: TextSprite = null
let texteCredits3: TextSprite = null
let texteCredits2: TextSprite = null
let texteCredits: TextSprite = null
let pageCredits = false
let fleche: Sprite = null
let choixMenu = 0
let Hero: Sprite = null
let jeuLance = false
let peutToucher = false
let vie_garde_1 = 0
let directionHero = 0
let garde_1: Sprite = null
directionHero = 1
vie_garde_1 = 5
peutToucher = true
afficherMenu()
game.onUpdate(function () {
    if (jeuLance && vie_garde_1 <= 0 && garde_1) {
        sprites.destroy(garde_1)
        garde_1 = null
    }
})
game.onUpdate(function () {
    if (jeuLance && Hero) {
        if (Hero.vx > 0) {
            directionHero = 1
        } else if (Hero.vx < 0) {
            directionHero = -1
        }
        if (controller.B.isPressed()) {
            if (directionHero == 1) {
                Hero.setImage(assets.image`Hero bouclier droite`)
            } else {
                Hero.setImage(assets.image`Hero bouclier gauche`)
            }
        } else if (!(attaqueEnCours)) {
            if (directionHero == 1) {
                Hero.setImage(assets.image`Hero epée haute drotie`)
            } else {
                Hero.setImage(assets.image`hero épée haute gauche`)
            }
        }
    }
})
game.onUpdateInterval(4000, function () {
    if (jeuLance && garde_1) {
        VY_garde_1 = randint(-3, 3)
        VX_garde_1 = randint(-3, 3)
    }
})
game.onUpdateInterval(500, function () {
    if (jeuLance && garde_1) {
        garde_1.setVelocity(VX_garde_1, VY_garde_1)
    }
})
game.onUpdateInterval(1200, function () {
    if (jeuLance && vie_garde_1 > 0 && garde_1) {
        dx = Hero.x - garde_1.x
        dy = Hero.y - garde_1.y
        distance = Math.sqrt(dx * dx + dy * dy)
        if (distance <= 60) {
            vitesse = 50
            projectile_garde_1 = sprites.createProjectileFromSprite(assets.image`projectile_garde_1`, garde_1, dx / distance * vitesse, dy / distance * vitesse)
        }
    }
})

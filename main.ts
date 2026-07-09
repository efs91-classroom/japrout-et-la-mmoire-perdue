namespace SpriteKind {
    export const lave = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (jeuLance) {
        if (directionHero == 1) {
            Hero.setImage(assets.image`Hero epée haute drotie`)
        } else {
            Hero.setImage(assets.image`hero épée haute gauche`)
        }
    }
})
function placer_gardes() {
    garde_1 = sprites.create(assets.image`img_garde_1`, SpriteKind.Enemy)
    garde_1.setPosition(110, 150)
    vie_garde_1 = 5
    garde_2 = sprites.create(assets.image`garde_2`, SpriteKind.Enemy)
    garde_2.setPosition(128, 736)
    vie_garde_2 = 5
    garde_3 = sprites.create(assets.image`garde_3`, SpriteKind.Enemy)
    garde_3.setPosition(880, 240)
    vie_garde_3 = 5
    derkill = sprites.create(assets.image`Moob_1`, SpriteKind.Enemy)
    derkill.setPosition(416, 848)
    vie_derkill = 10
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (jeuLance) {
        sprites.destroy(sprite)
        if (!(controller.B.isPressed())) {
            info.changeLifeBy(-1)
            scene.cameraShake(4, 500)
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
        if (!(controller.B.isPressed())) {
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
function afficherMenu() {
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.setLife(max_vie)
    sprites.destroy(otherSprite)
})
function afficherCredits() {
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
function lancerJeu() {
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
    placer_gardes()
    Hero.sayText("Mais où suis-je ??", 2000, false)
    scene.cameraFollowSprite(Hero)
    controller.moveSprite(Hero)
    lave_haut_hohoho = sprites.create(assets.image`lave haut hohoho`, SpriteKind.lave)
    lave_bas_bah = sprites.create(assets.image`lave bas bah`, SpriteKind.lave)
    lave_haut_hohoho.setPosition(504, 176)
    lave_bas_bah.setPosition(504, 328)
    pomme_1 = sprites.create(assets.image`myImage6`, SpriteKind.Food)
    pomme_2 = sprites.create(assets.image`myImage6`, SpriteKind.Food)
    pomme_3 = sprites.create(assets.image`myImage6`, SpriteKind.Food)
    pomme_4 = sprites.create(assets.image`myImage6`, SpriteKind.Food)
    pomme_5 = sprites.create(assets.image`myImage6`, SpriteKind.Food)
    pomme_1.setPosition(64, 144)
    pomme_2.setPosition(32, 240)
    pomme_3.setPosition(112, 672)
    pomme_4.setPosition(800, 224)
    pomme_5.setPosition(400, 816)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (jeuLance && peutToucher) {
        peutToucher = false
        if (attaqueEnCours) {
            if (otherSprite == garde_1) {
                vie_garde_1 += -1
                garde_1.sayText("" + vie_garde_1 + "/5", 800, false)
            } else if (otherSprite == garde_2) {
                vie_garde_2 += -1
                garde_2.sayText("" + vie_garde_2 + "/5", 800, false)
            } else if (otherSprite == garde_3) {
                vie_garde_3 += -1
                garde_3.sayText("" + vie_garde_3 + "/5", 800, false)
            } else if (otherSprite == derkill) {
                vie_derkill += -1
                derkill.sayText("" + vie_derkill + "/10", 800, false)
            }
        } else {
            Hero.x += -5 * directionHero
        }
        pause(500)
        peutToucher = true
    }
})
let VY_garde_3 = 0
let VX_garde_3 = 0
let VY_garde_2 = 0
let VX_garde_2 = 0
let VY_garde_1 = 0
let VX_garde_1 = 0
let projectile_derkill: Sprite = null
let projectile_garde_3: Sprite = null
let projectile_garde_2: Sprite = null
let projectile_garde_1: Sprite = null
let vitesse = 0
let distance = 0
let dy = 0
let dx = 0
let dansLave = false
let pomme_5: Sprite = null
let pomme_4: Sprite = null
let pomme_3: Sprite = null
let pomme_2: Sprite = null
let pomme_1: Sprite = null
let lave_bas_bah: Sprite = null
let lave_haut_hohoho: Sprite = null
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
let vie_derkill = 0
let Hero: Sprite = null
let jeuLance = false
let peutToucher = false
let max_vie = 3
let vie_garde_3 = 0
let vie_garde_2 = 0
let vie_garde_1 = 0
let directionHero = 0
let garde_1: Sprite = null
let garde_2: Sprite = null
let garde_3: Sprite = null
let derkill: Sprite = null
directionHero = 1
vie_garde_1 = 5
vie_garde_2 = 5
vie_garde_3 = 5
peutToucher = true
afficherMenu()
game.onUpdate(function () {
    if (jeuLance && vie_garde_1 <= 0 && garde_1) {
        sprites.destroy(garde_1)
        garde_1 = null
        max_vie = 4
        info.setLife(4)
        game.showLongText("Un souvenir me revient...", DialogLayout.Center)
        game.showLongText("J'ai fait la guerre.", DialogLayout.Center)
        game.showLongText("J'ai perdu.", DialogLayout.Center)
    }
    if (jeuLance && vie_garde_2 <= 0 && garde_2) {
        sprites.destroy(garde_2)
        garde_2 = null
        max_vie = 5
        info.setLife(5)
        game.showLongText("Un autre fragment...", DialogLayout.Center)
        game.showLongText("C'était dans le pays de Tar.", DialogLayout.Center)
        game.showLongText("Contre les Tarrés.", DialogLayout.Center)
    }
    if (jeuLance && vie_garde_3 <= 0 && garde_3) {
        sprites.destroy(garde_3)
        garde_3 = null
        max_vie = 6
        info.setLife(6)
        game.showLongText("La vérité m'apparaît enfin...", DialogLayout.Center)
        game.showLongText("C'est Derkill qui m'a volé ma mémoire !", DialogLayout.Center)
        game.showLongText("Je dois le retrouver.", DialogLayout.Center)
        game.showLongText("Le vaincre.", DialogLayout.Center)
        game.showLongText("Pour sauver le monde de ce monstre.", DialogLayout.Center)
    }
    if (jeuLance && vie_derkill <= 0 && derkill) {
        sprites.destroy(derkill)
        derkill = null
        max_vie = 7
        info.setLife(7)
        game.showLongText("Je me souviens de tout, maintenant.", DialogLayout.Center)
        game.showLongText("Mon nom...", DialogLayout.Center)
        game.showLongText("...c'est Japrout.", DialogLayout.Center)
        game.showLongText("Et toi, Derkill...", DialogLayout.Center)
        game.showLongText("Tu ne feras plus jamais de mal.", DialogLayout.Center)
        game.showLongText("Victoire !", DialogLayout.Center)
        game.showLongText("Le monde est sauvé. Fin du jeu.", DialogLayout.Center)
        max_vie = 3
        sprites.destroy(Hero)
        Hero = null
        afficherMenu()
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
game.onUpdate(function () {
    if (jeuLance && Hero) {
        dansLave = Math.abs(Hero.x - lave_haut_hohoho.x) <= lave_haut_hohoho.width / 2 + Hero.width / 2 && Math.abs(Hero.y - lave_haut_hohoho.y) <= lave_haut_hohoho.height / 2 + Hero.height / 2 || Math.abs(Hero.x - lave_bas_bah.x) <= lave_bas_bah.width / 2 + Hero.width / 2 && Math.abs(Hero.y - lave_bas_bah.y) <= lave_bas_bah.height / 2 + Hero.height / 2
    }
})
game.onUpdateInterval(2500, function () {
    if (jeuLance && Hero) {
        if (vie_garde_1 > 0 && garde_1) {
            dx = Hero.x - garde_1.x
            dy = Hero.y - garde_1.y
            distance = Math.sqrt(dx * dx + dy * dy)
            if (distance <= 60) {
                vitesse = 50
                projectile_garde_1 = sprites.createProjectileFromSprite(assets.image`projectile_garde_1`, garde_1, dx / distance * vitesse, dy / distance * vitesse)
            }
        }
        if (vie_garde_2 > 0 && garde_2) {
            dx = Hero.x - garde_2.x
            dy = Hero.y - garde_2.y
            distance = Math.sqrt(dx * dx + dy * dy)
            if (distance <= 60) {
                vitesse = 50
                projectile_garde_2 = sprites.createProjectileFromSprite(assets.image`projectile_garde_1`, garde_2, dx / distance * vitesse, dy / distance * vitesse)
            }
        }
        if (vie_garde_3 > 0 && garde_3) {
            dx = Hero.x - garde_3.x
            dy = Hero.y - garde_3.y
            distance = Math.sqrt(dx * dx + dy * dy)
            if (distance <= 60) {
                vitesse = 50
                projectile_garde_3 = sprites.createProjectileFromSprite(assets.image`projectile_garde_1`, garde_3, dx / distance * vitesse, dy / distance * vitesse)
            }
        }
        if (vie_derkill > 0 && derkill) {
            dx = Hero.x - derkill.x
            dy = Hero.y - derkill.y
            distance = Math.sqrt(dx * dx + dy * dy)
            if (distance <= 80) {
                vitesse = 60
                derkill.setImage(assets.image`moob_1_tire`)
                projectile_derkill = sprites.createProjectileFromSprite(assets.image`projectil_derkill`, derkill, dx / distance * vitesse, dy / distance * vitesse)
                control.runInParallel(function () {
                    pause(400)
                    if (derkill) {
                        derkill.setImage(assets.image`Moob_1`)
                    }
                })
            }
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (jeuLance && Hero && dansLave) {
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
    }
})
game.onUpdateInterval(500, function () {
    if (jeuLance && Hero) {
        if (garde_1) {
            distance = Math.sqrt((Hero.x - garde_1.x) * (Hero.x - garde_1.x) + (Hero.y - garde_1.y) * (Hero.y - garde_1.y))
            if (distance <= 100) {
                garde_1.setVelocity(VX_garde_1, VY_garde_1)
                if (distance > 0 && distance < 20) {
                    Hero.x += (Hero.x - garde_1.x) / distance * 20
                    Hero.y += (Hero.y - garde_1.y) / distance * 20
                }
            } else {
                garde_1.setVelocity(0, 0)
            }
        }
        if (garde_2) {
            distance = Math.sqrt((Hero.x - garde_2.x) * (Hero.x - garde_2.x) + (Hero.y - garde_2.y) * (Hero.y - garde_2.y))
            if (distance <= 100) {
                garde_2.setVelocity(VX_garde_2, VY_garde_2)
                if (distance > 0 && distance < 20) {
                    Hero.x += (Hero.x - garde_2.x) / distance * 20
                    Hero.y += (Hero.y - garde_2.y) / distance * 20
                }
            } else {
                garde_2.setVelocity(0, 0)
            }
        }
        if (garde_3) {
            distance = Math.sqrt((Hero.x - garde_3.x) * (Hero.x - garde_3.x) + (Hero.y - garde_3.y) * (Hero.y - garde_3.y))
            if (distance <= 100) {
                garde_3.setVelocity(VX_garde_3, VY_garde_3)
                if (distance > 0 && distance < 20) {
                    Hero.x += (Hero.x - garde_3.x) / distance * 20
                    Hero.y += (Hero.y - garde_3.y) / distance * 20
                }
            } else {
                garde_3.setVelocity(0, 0)
            }
        }
    }
})
game.onUpdateInterval(3999, function () {
    if (jeuLance) {
        VX_garde_1 = randint(-15, 15)
        VY_garde_1 = randint(-15, 15)
        VX_garde_2 = randint(-15, 15)
        VY_garde_2 = randint(-15, 15)
        VX_garde_3 = randint(-15, 15)
        VY_garde_3 = randint(-15, 15)
    }
})

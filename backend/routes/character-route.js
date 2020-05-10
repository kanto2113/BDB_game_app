const router = require('express').Router()
let Character = require('../models/character-model') 

// display character

router.route('/').get((req, res) => {
    Character.find()
        .then(character => res.json(character))
        .catch(err => res.status(400).json('Error: '+ err))
})

// create new character

router.route('/create').post((req, res)=> {
    const displayName = req.body.displayName
    const characterName = req.body.characterName
    const avatarURL = req.body.avatarURL
    const level = Number(req.body.level)
    const class1 = req.body.class1
    const class2 = req.body.class2

    const newCharacter = new Character({
        displayName,
        characterName,
        avatarURL,
        level,
        class1,
        class2
    })

    newCharacter.save()
    .then(() => res.json('Character added!'))
    .catch(err => res.status(400).json('Error: '+ err))
})

// display character

router.route('/:id').get((req, res)=>{
    Character.findById(req.params.id)
        .then(character => res.json(character))
        .catch(err => res.status(400).json('Error: '+ err))
})

// delete character

router.route('/delete/:id').delete((req, res)=>{
    Character.findByIdAndDelete(req.params.id)
        .then(() => res.json('Character Deleted!'))
        .catch(err => res.status(400).json('Error: '+ err))
})

// update character

router.route('/update/:id').post((req, res) => {
    Character.findById(req.params.id)
    .then(character => {
        character.displayName = req.body.displayName
        character.characterName = req.body.characterName
        character.avatarURL = req.body.avatarURL
        character.level = Number(req.body.level)
        character.class1 = req.body.class1
        character.class2 = req.body.class2

        character.save()
            .then(() => res.json('Character Updated!'))
            .catch(err => res.status(400).json('Error: '+ err))
    })
    .catch(err => res.status(400).json('Error: '+ err))
})

module.exports = router
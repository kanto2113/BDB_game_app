const mongoose = require('mongoose')

const Schema = mongoose.Schema

const characterSchema = new Schema ({
    username: { type: String, required: true },
    characterName: { type: String, required: true, unique: true, trim: true },
    avatarUrl: { type: String, required: true },
    level: { type: Number, required: true },
    class1: { type: String, required: true },
    class2: String,
},{
    timestamps: true
})

const Character = mongoose.model('Character', characterSchema)

module.exports = Character
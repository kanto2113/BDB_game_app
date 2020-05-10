import React, { useState, useContext } from 'react'
import { CharacterListContext } from './pages/Home'

const NewCharacterContainer = (props) => {

    const [ characterList, setCharacterList ] = useContext(CharacterListContext)
   
    const [ newCharacter, setNewCharacter ] = useState({
        displayName: '',
        characterName: '',
        initiative: 0, 
        avatarURL: '', 
        level: 0,
        class1: '',
        class2: '',
        activeTurn: false,
    })

// input handlers for new character

    const characterNameInputHandler = (e) => {
        let cloneCharacter = {...newCharacter, characterName: e.target.value}
        setNewCharacter(cloneCharacter)
    }

    const characterAvatarURLInputHandler = (e) => {
        let cloneCharacter = {...newCharacter, avatarURL: e.target.value}
        setNewCharacter(cloneCharacter)
    }

    const characterClass1InputHandler = (e) => {
        let cloneCharacter = {...newCharacter, class1: e.target.value}
        setNewCharacter(cloneCharacter)
    }

    const characterClass2InputHandler = (e) => {
        let cloneCharacter = {...newCharacter, class2: e.target.value}
        setNewCharacter(cloneCharacter)
    }

// create new character

    const createNewCharacterButton = () => {
        let cloneCharacterList = [...props.characterList]
        cloneCharacterList.push(newCharacter)
        props.setCharacterList(cloneCharacterList)
        setNewCharacter({
            displayName: '',
            characterName: '',
            initiative: 0, 
            avatarURL: '', 
            level: 0,
            class1: '',
            class2: '',
            activeTurn: false,
        })
    }

    return (
        <div>
            <div>
                Create New Character
            </div>
            <input 
                value = {newCharacter.characterName}
                onChange = {(e) => {characterNameInputHandler(e)}}
                placeholder="Character Name"
            />
            <div></div>
            <input 
                value={newCharacter.avatarURL}
                onChange={(e) => {characterAvatarURLInputHandler(e)}}
                placeholder="Avatar URL"
            />
            <div></div>
            <input 
                value = {newCharacter.class1}
                onChange = {(e) => {characterClass1InputHandler(e)}}
                placeholder="Primary Class"
            />
            <div></div>
            <input 
                value = {newCharacter.class2}
                onChange = {(e) => {characterClass2InputHandler(e)}}
                placeholder="Secondary Class"
            />                        
            <br></br>
            <button 
                className="button"
                onClick = {createNewCharacterButton}
            > 
                Create Character
            </button>
        </div>
    )
}

export default NewCharacterContainer
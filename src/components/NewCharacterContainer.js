import React, { useState, useContext } from 'react'
import { CharacterListContext } from '../App'

const NewCharacterContainer = (props) => {

    const [ characterList, setCharacterList ] = useContext(CharacterListContext)
   
    const [ newCharacter, setNewCharacter ] = useState({
        username: '',
        characterName: '',
        initiative: 0, 
        avatarURL: '', 
        level: 0,
        class1: '',
        class2: '',
        activeTurn: false,
    })
   
    const characterNameInputHandler = (e) => {
        
        let cloneCharacter = {...newCharacter, characterName: e.target.value}
        setNewCharacter(cloneCharacter)
    }

    const createNewCharacterButton = () => {

        let cloneCharacterList = [...props.characterList]
        cloneCharacterList.push(newCharacter)
        props.setCharacterList(cloneCharacterList)
        setNewCharacter({
            username: '',
            characterName: '',
            initiative: 0, 
            avatarURL: '', 
            level: 0,
            class1: '',
            class2: '',
            activeTurn: false,
        })
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
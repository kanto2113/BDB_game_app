import React, { useEffect, useContext } from 'react'
import TurnSelector from './TurnSelector'
import { CharacterListContext } from './pages/Home'

const CharacterCardContainer = (props) => {
    
    const [ characterList, setCharacterList ] = useContext(CharacterListContext)

    useEffect(() => {
        if(props.character.activeTurn){
            let cardEl = document.getElementById(`card for ${props.character.characterName}`)
            cardEl.style.transform = "scale(1.2) translate(0, -6%)"
        }else{
            let cardEl = document.getElementById(`card for ${props.character.characterName}`)
            cardEl.style.transform = "scale(1) translate(0, 0)"
        }
    }, [props.character.activeTurn])

    const showInitiativeFieldHandler = () => {
        let inputElement = document.getElementById(`input for ${props.character.characterName}`)
        inputElement.style.visibility = "visible"
    }

    const initiativeValueHandler = (e) => {
        let cloneCharacterList = [...characterList]
        cloneCharacterList.forEach((character) => {
            if(character.characterName == props.character.characterName){
                character.initiative = e.target.value
            }character.activeTurn = false
        })
        cloneCharacterList.sort((characterA, characterB) =>  characterB.initiative - characterA.initiative)
        cloneCharacterList[0].activeTurn = true
        setCharacterList(cloneCharacterList)
    }

    const deleteCharacterHandler = () => {
        let cloneCharacterList = characterList.filter((character)=>{
            return character.characterName != props.character.characterName
        })
        setCharacterList(cloneCharacterList)
    }

    let backgroundImage = `linear-gradient(to bottom right, rgba(0, 0, 0, .2) 0%, rgba(0, 0, 0, .4) 35%, rgba(0, 0, 0, .7) 100%), url(${props.character.avatarURL})`

    let containerStyleObj =  props.character.activeTurn ? {backgroundImage: backgroundImage, border: "3px solid gold", margin: "45px 0px 20px 30px", boxShadow: "10px 10px 30px #10570A, 5px 5px 20px #10570A, -10px -10px 30px rgba(255, 255, 255, 0.25), -5px -5px 20px #FFFFFF"} : {backgroundImage: backgroundImage}

    return (
        <div style={containerStyleObj} id={`card for ${props.character.characterName}`} className="character-card-container">
            <div className="character-card-name">
                {props.character.characterName}
            </div>
            <div className="character-card-right-row">
                <button
                    className="delete-character-button button"
                    onClick={deleteCharacterHandler}
                >
                    X
                </button>
                {props.character.activeTurn && <TurnSelector />}
            </div>
            <div className="character-card-bottom-row" >
                <div className="initiative-value">
                    {props.character.initiative}
                </div>
                <button
                    onClick={showInitiativeFieldHandler}
                >
                    Init
                </button>
                <input
                    className="initiative-input-field"
                    id={`input for ${props.character.characterName}`} 
                    placeholder="initiative value"
                    onChange={(e) => {initiativeValueHandler(e)}}
                    value={props.character.intiative}
                />
            </div>
        </div>
    )
}

export default CharacterCardContainer
import React, { useContext } from 'react'
import { CharacterListContext } from './pages/Home'

const TurnSelector = () => {

    const [characterList, setCharacterList] = useContext(CharacterListContext)
    
    let continueFunction = true

    const endTurnHandler = () => {

        characterList.forEach((character, index) =>{
            
            if(character.activeTurn === true && continueFunction === true){
                character.activeTurn = false
                characterList[index+1] ? characterList[index + 1].activeTurn = true : characterList[0].activeTurn = true
                let cloneCharacterList = [...characterList]
                continueFunction = false
                setCharacterList(cloneCharacterList)
            }
        })
    }

    return(
        <div className="end-turn-button-container">
            <div 
                className="end-turn-button"
                onClick={endTurnHandler}
            >
                End Turn
            </div>
        </div>
    )
}

export default TurnSelector
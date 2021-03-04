import React, { useContext } from 'react'
import CharacterCardContainer from './CharacterCardContainer'
import { CharacterListContext } from './pages/Home'

const CharacterListContainer = () => {

    const [ characterList ] = useContext(CharacterListContext)

    return (
        <div className="character-list-container">
            {characterList.map((character) => {
                return(
                   <CharacterCardContainer key={character.characterName} character={character} />
                )
            })}
        </div>
    )
}


export default CharacterListContainer
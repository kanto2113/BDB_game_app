import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { CharacterListContext } from  "../App"

const XPTracker = () => {

    const [ characterList, setCharacterList ] = useContext(CharacterListContext)

    const [ currentXP, setCurrentXP ] = useState(54347)

    const [ gainedXP, setGainedXP ] = useState()

    const [ currentXPLevel, setCurrentXPLevel ] = useState(1)

    // useEffect(()=>{
    //     axios.get('http://localhost:5000/character/:id')
    //         .then(response => {
    //             if (response.data.length > 0) {
    //                 setCurrentXPLevel([...response.data.character.level])
    //             }
    //         })
    //   },[])

    const xpInputHandler = (e) => {
        setGainedXP(e.target.value)
    }

    const xpMathHandler = () => {
        setCurrentXP(parseInt(currentXP) + parseInt(gainedXP))
        setGainedXP()
    }

    const xpCapArray = [300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]

    let xpToNextLevel = xpCapArray[currentXPLevel - 1] - currentXP

    if (xpToNextLevel < 1) {
        setCurrentXPLevel(currentXPLevel + 1)
        
        // const character = 
        // axios.post('http://localhost:5000/character', currentXPLevel)
        // .then(res => console.log(res.data))

    }
    
    return (
        <div>
            Party Level {currentXPLevel}
            <br></br>
            <input 
                type="number"
                placeholder='XP Gained'
                onChange={(e)=>{xpInputHandler(e)}}
                value={gainedXP}
            />
            <button 
                className="button"
                onClick={xpMathHandler}
            >
                Add XP
            </button>
            <div>
                {currentXP.toLocaleString()}/{xpCapArray[currentXPLevel - 1].toLocaleString()}
                <br></br>
                {xpToNextLevel.toLocaleString()} xp to level {currentXPLevel + 1}
            </div>
        </div>
    )
}

export default XPTracker
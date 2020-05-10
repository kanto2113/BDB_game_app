import React, { useState } from 'react'

const XPTracker = () => {


    const [ currentXP, setCurrentXP ] = useState(54347)

    const [ gainedXP, setGainedXP ] = useState()

    const [ currentXPLevel, setCurrentXPLevel ] = useState(1)

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
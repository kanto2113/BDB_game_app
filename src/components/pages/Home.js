import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios"

import CharacterListContainer from '../CharacterListContainer'
import NewCharacterContainer from '../NewCharacterContainer'
import XPTracker from '../XPTracker'

export const CharacterListContext = React.createContext()


const Home = () => {

    const [ characterList, setCharacterList ] = useState([])
    
    useEffect(()=>{
      axios.get('http://localhost:5000/character/')
          .then(response => {
              if (response.data.length > 0) {
                  setCharacterList([...response.data])
              }
          })
    },[])

    return (
      <Router>
        <div>
          <CharacterListContext.Provider value={[characterList, setCharacterList]}>
            <div className="app-container">
              <div className='app-header'>
                <div>
                  <NewCharacterContainer characterList={characterList} setCharacterList={setCharacterList}/>
                  {/* <Route path="/home/create" render={ (props) =>
                    <CharacterListContext.Provider value={[characterList, setCharacterList]}> 
                      <NewCharacterContainer characterList={characterList} setCharacterList={setCharacterList}/>
                    </CharacterListContext.Provider>}
                  /> */}
                </div>
                <div
                  style={{margin:"0 20px"}}>
                  <XPTracker />
                </div>
              </div>
              <CharacterListContainer></CharacterListContainer>
            </div>
          </CharacterListContext.Provider>
        </div>
      </Router>
    )

}

export default Home
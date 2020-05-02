import React, { useEffect, useState } from 'react';
import CharacterListContainer from './components/CharacterListContainer'
import NewCharacterContainer from './components/NewCharacterContainer'
import XPTracker from './components/XPTracker'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios"
import './App.css';

export const CharacterListContext = React.createContext()

const App = () => {
  
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
      <NavBar></NavBar>
      <CharacterListContext.Provider value={[characterList, setCharacterList]}>
          <div className="app-container">
            <div className='app-header'>
              <div>
                <Route path="/create" render={ (props) => 
                  <CharacterListContext.Provider value={[characterList, setCharacterList]}> 
                    <NewCharacterContainer characterList={characterList} setCharacterList={setCharacterList}/>
                  </CharacterListContext.Provider> 
                }/>
              </div>
              <div
                style={{margin:"0 20px"}}>
                <XPTracker />
              </div>
            </div>
            <CharacterListContainer></CharacterListContainer>
          </div>
      </CharacterListContext.Provider>
    </Router>
  )

}

export default App;
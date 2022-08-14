import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import './App.css';
import CharacterContainer from "./CharacterContainer";
import NavBar from "./NavBar";
import EpisodesContainer from "./EpisodesContainer";
import LocationsContainer from "./LocationsContainer";
import Header from "./Header";

function App() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);


  useEffect(()=> {
      fetch("http://localhost:3000/characters/")
        .then((resp)=> resp.json())
        .then((characters) => setCharacters(characters))
      },[])

      useEffect(()=> {
      fetch("http://localhost:3000/locations/")
          .then(resp => resp.json())
          .then(locations => setLocations(locations))
      },[])

      function handleAddNewCharacter(character){
        setCharacters({character, ...characters})
      }

  return (
    <div className="App">
        <Header />
        <NavBar />
        <Route exact path="/Characters">
          <CharacterContainer handleAddNewCharacter={handleAddNewCharacter} characters={characters} />
        </Route>
        <Route exact path="/Locations">
          <LocationsContainer locations={locations} />
        </Route>
        <Route exact path="/Episodes">
          <EpisodesContainer />
        </Route>
    </div>
  );
}

export default App;

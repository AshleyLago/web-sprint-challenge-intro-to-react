import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

// ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

// ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗

function App() {
  // ❗ Create state to hold the data from the API 
  const [peopleData, setPeopleData] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    function getPeopleData() {
      axios.get(urlPeople)
        .then(res => {
          setPeopleData(res.data);
        })
        .catch(err => {
          console.log(err.message);
        })
    }
    getPeopleData();
    function getPlanetsData() {
      axios.get(urlPlanets)
        .then(res => {
          setPlanetsData(res.data);
        })
        .catch(err => {
          console.log(err.message);
        })
    }
    getPlanetsData();
  }, []);

  // %% Replacing people homeworld with the name rather than the id
  peopleData.forEach(prsn => {
    let hmwrdNum = prsn.homeworld;
    planetsData.forEach(pln => {
      if (pln.id === hmwrdNum) {
        prsn.homeworld = pln.name;
      }
    });
  });
  console.log(peopleData);

  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      { peopleData.map(ppl => 
        <Character
        key={ppl.id}
        starChara={ppl.name}
        hmewrd={ppl.homeworld}
        />
      )
      /* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App







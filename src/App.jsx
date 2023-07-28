import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'
function App() {
  console.log(puppyList);
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  function handleClick(puppyId){
    setFeatPupId(puppyId);
  }

  function handleAddPuppy() {
    // Generate a new random puppy object
    const newPuppy = {
      id: Math.random().toString(), // Just a simple way to generate a unique ID
      name: `New Puppy ${puppies.length + 1}`,
      age: 1,
      breed: 'Unknown',
      email: 'newpuppy@example.com',
    };

    // Update the state to include the new puppy
    setPuppies((prevPuppies) => [...prevPuppies, newPuppy]);
  }
 return (
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <li onClick={() => handleClick(puppy.id)} key={puppy.id}>
              {puppy.name}
            </li>
          );
        })}
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age:{featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
              <li>Name: {puppies.find((puppy) => puppy.id === featPupId)?.name}</li>
              <li>Breed: {puppies.find((puppy) => puppy.id === featPupId)?.breed}</li>
            {/* You can add more details here */}
            </ul>
          </div>
        )}
        <button onClick={handleAddPuppy}>Add Puppy</button>
      </div>
    );
  }
  
  export default App;
import React, { useState } from 'react';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const [newPuppyName, setNewPuppyName] = useState('');
  const [newPuppyAge, setNewPuppyAge] = useState('');
  const [newPuppyEmail, setNewPuppyEmail] = useState('');
  const [searchText, setSearchText] = useState('');

  
  const handleClick = (puppyId) => {
    setFeatPupId(puppyId);
  };

  
  const handleCloseDetails = () => {
    setFeatPupId(null);
  };

  
  const handleCreatePuppy = (event) => {
    event.preventDefault();
    const newPuppy = {
      id: puppies.length + 1,
      name: newPuppyName,
      age: newPuppyAge,
      email: newPuppyEmail,
      createdByUser: true, 
    };
    setPuppies([...puppies, newPuppy]);
    setNewPuppyName('');
    setNewPuppyAge('');
    setNewPuppyEmail('');
  };

  
  const handleDeletePuppy = (puppyId) => {
    
    const puppyToDelete = puppies.find((puppy) => puppy.id === puppyId);
    if (puppyToDelete && puppyToDelete.createdByUser) {
      setPuppies(puppies.filter((puppy) => puppy.id !== puppyId));
    } else {
      alert("You can only delete puppies added through the website.");
    }
  };

  
  const filteredPuppies = puppies.filter((puppy) =>
    puppy.name.toLowerCase().includes(searchText.toLowerCase())
  );

  
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search for a puppy..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>

      
      <form onSubmit={handleCreatePuppy}>
        <input
          type="text"
          placeholder="Puppy Name"
          value={newPuppyName}
          onChange={(e) => setNewPuppyName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Puppy Age"
          value={newPuppyAge}
          onChange={(e) => setNewPuppyAge(e.target.value)}
        />
        <input
          type="email"
          placeholder="Puppy Email"
          value={newPuppyEmail}
          onChange={(e) => setNewPuppyEmail(e.target.value)}
        />
        <button type="submit">Add Puppy</button>
      </form>

      
      {filteredPuppies.map((puppy) => (
        <div key={puppy.id}>
          <p onClick={() => handleClick(puppy.id)}>{puppy.name}</p>
          <button onClick={() => handleDeletePuppy(puppy.id)}>Delete</button>
        </div>
      ))}

      
      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
          <button onClick={handleCloseDetails}>Close Details</button>
        </div>
      )}
    </div>
  );
}

export default App;
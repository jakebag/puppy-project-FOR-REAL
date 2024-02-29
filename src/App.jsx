import { useState } from 'react';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // Function to handle click event
  const handleClick = (puppyId) => {
    setFeatPupId(puppyId);
  };

  // Find the featured puppy based on featPupId
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}

      {/* Conditionally render the selected puppy's details */}
      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

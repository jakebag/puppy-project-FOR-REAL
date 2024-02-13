import { useState } from 'react'
import {puppyList} from './data.js'
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  {()=>{console.log("puppy id: ", puppy.id)}}
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  console.log(featuredPup);
  function handleClick() {
    // some logic here
  }

  // return (
    
  //   <div className="App">
  //     {puppies.map((puppy) => {
  //       return (
  //         <p onClick={handleClick} key={puppy.id}>
  //           {puppy.name}
  //         </p>
  //       );
  //       { featuPupID && <p>{ featPupId }</p> } 
  //     })}
  //   </div>
    
    
    
  // );
  {featPupId && (
    <div>
      <h2>{featuredPup.name}</h2>
      <ul>
        <li>Age: {featuredPup.age}</li>
        <li>Email: {featuredPup.email}</li>
      </ul>
    </div>
  )}
}

export default App

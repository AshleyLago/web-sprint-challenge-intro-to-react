import React, {useState} from 'react'

function Character({starChara, hmewrd}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [isHomeworldRendering, setIsHomeworldRendering] = useState(false);
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setIsHomeworldRendering(!isHomeworldRendering);
  }
  return (
    <div onClick={toggleHomeworld} className="character-card">
      <h3 className="character-name">{starChara}</h3>
      {isHomeworldRendering 
        ? <p>Planet: <span className="character-planet">{hmewrd}</span></p> 
        : console.log("no homeworld is showing")
      }
      {/* Use the same markup with the same attributes as in the mock */}
    </div> 
  )
}

export default Character

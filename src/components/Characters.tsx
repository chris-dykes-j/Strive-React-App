import React, {useEffect, useState} from "react";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch("localhost:7006/api/characters/")
        .then(r => r.json())
        .catch(e => console.log(e));
      setCharacters(response);
    };
    getCharacters().then(c => console.log(c));
  }, []);
  
  return (
    <>
      <h1>Choose your character</h1>
    </>
  );
};

export default Characters;
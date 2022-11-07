import React, {useEffect, useState} from "react";

const Characters = () => {
  const [characters, setCharacters] = useState<object[]>([]);
  useEffect(() => {
    const getCharacters = async () => {
      const response: any = await fetch("https://localhost:7006/api/characters/")
        .then(r => r.json())
        .then(r => console.log(r))
        .catch(e => console.log(e));
      const data = response.result.map((character: { id: number, characterName: string }) => character.id);
      setCharacters(data);
    };
    getCharacters();
  }, []);
  
  return (
    <>
      <h1>Choose your character</h1>
    </>
  );
};

export default Characters;
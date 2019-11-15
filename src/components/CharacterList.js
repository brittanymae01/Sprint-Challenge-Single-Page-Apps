import React from "react";
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const Container = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
`



export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  // useEffect(() => {
  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);

  return (
    <Container className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {props.character.map(character => (
        <CharacterCard
          key={character.id}
          src={character.image}
          name={character.name}
          species={character.species}
          status={character.status}
          origin={character.origin}
        />
      ))}
    </Container>
  );
}

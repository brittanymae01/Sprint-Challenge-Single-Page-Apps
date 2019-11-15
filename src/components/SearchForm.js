import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const Container = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Form = styled.form`
margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`



export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const results = props.character.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results)
  }, [searchTerm, props.character])

  //Kevin: why did react make me add the props.character to the dependency array??
  // also what exactly connects the Search and results?

  const handleChange = e => {
    setSearchTerm(e.target.value)
  };

  return (
    <section className="search-form">
      {/* // Add a search form here */}
      <Form>
        <label htmlFor='name'>Search:</label>
        <input
          id="name"
          type='text'
          name='textfield'
          placeholder='Search by Name'
          onChange={handleChange}
          value={searchTerm}
        />
      </Form>
      <Container>
        {searchResults.map(character => (
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
    </section>
  );
}

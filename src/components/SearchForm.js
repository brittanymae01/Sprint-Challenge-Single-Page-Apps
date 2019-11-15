import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard'

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const results = props.character.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results)
  }, [searchTerm])

  const handleChange = e => {
    setSearchTerm(e.target.value)
  };

  return (
    <section className="search-form">
      {/* // Add a search form here */}
      <form>
        <label htmlFor='name'>Search:</label>
        <input
          id="name"
          type='text'
          name='textfield'
          placeholder='Search by Name'
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      <div>
        {searchResults.map(character => (
          <CharacterCard
            key={character.id}
            src={character.image}
            name={character.name}
            species={character.species}
            status={character.status}
            origin={character.origin.name}
          />
        ))}
      </div>
    </section>
  );
}

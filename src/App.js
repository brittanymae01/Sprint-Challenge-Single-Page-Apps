import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';
import WelcomePage from "./components/WelcomePage.js";
import styled from 'styled-components';

const Links = styled.div`
text-align: center;
margin-top: 30px;
`

export default function App() {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/').then(response => {
      // console.log(response)
      setCharacter(response.data.results)
    })
      .catch(error => {
        console.log('Data was not returned', error);
      });
  }, [])

  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Links>
        <Link className='links' to='/'>Home</Link>
        <Link className='links' to='/character-list'>Characters</Link>
        <Link className='links' to='/search-form'>Search</Link>
      </Links>
      <Route path='/character-list' render={props => <CharacterList {...props} character={character} />} />
      <Route path='/search-form' render={props => <SearchForm {...props} character={character} />} />
    </main>
  );
}

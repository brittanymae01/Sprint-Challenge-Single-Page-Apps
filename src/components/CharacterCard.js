import React from "react";
import styled from 'styled-components'

const Characters = styled.div`
border: 1px solid black;
width: 300px;
margin: 20px;
padding: 10px;
background-color: #80b1b3;
`

export default function CharacterCard(props) {
  return (
    <Characters>
      <img src={props.src} alt="character" />
      <h2>{props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      <p>Origin: {props.origin.name}</p>
    </Characters>
  )
}

import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.src} alt="character" />
      <h2>{props.name}</h2>
      <p>Species: {props.species}</p>
      <p>Status: {props.status}</p>
      <p>Origin: {props.origin.name}</p>
    </div>
  )
}

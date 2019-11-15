import React from "react";

export default function LocationCard({ name, type, dimension }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{type}</p>
      <p>{dimension}</p>
      <p>Hello</p>
    </div>
  )
}

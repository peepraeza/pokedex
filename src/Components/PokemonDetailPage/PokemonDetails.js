import React from 'react';
import {useLocation} from "react-router-dom";

export default function PokemonDetails() {
  const location = useLocation();
  const name = location.state.name;

  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

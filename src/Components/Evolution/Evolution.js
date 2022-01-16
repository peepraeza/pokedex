import React from 'react'
import './style.css'

export default function Evolution({name, image}) {
  console.log(name)
  return (
    <div className={'pokemon-evo'}>
      <img src={image} alt={name}/>
      <p>{name}</p>
    </div>
  )
}

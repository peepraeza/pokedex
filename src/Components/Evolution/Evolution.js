import React from 'react'
import './style.css'

export default function Evolution({evolution}) {
  return (
    <div className={'evolution-container'}>
      <h3>Evolution</h3>
      <div className={'evolution-wrapper'}>
        {evolution.map((e, idx) => {
          return <EvolutionCard key={idx} name={e.name} image={e.image}/>
        })}
      </div>
    </div>
  )
}

function EvolutionCard({name, image}) {
  return (
    <div>
      <div className={'pokemon-evo'}>
        <img src={image} alt={name}/>
        <h5>{name}</h5>
      </div>
    </div>
  )
}

import React from 'react'
import './style.css'
import Evolution from "../Evolution/Evolution";

export default function CardDetail({name, image, types, height, abilities, evolution, weight, stats}) {
  console.log('from detail', evolution)
  return (
    <div className={'card-container'}>
      <div className={'detail-info-wrapper'}>
        <div className={'detail-img'}>
          <img src={image} alt={name}/>
        </div>
        <div className={'detail-info'}>
          <div className={'detail-name'}>
            <h3>Name: {name}</h3>
          </div>
          <div className={'pokemon-name'}>
            <h3>Height: {height} M</h3>
          </div>
          <div className={'pokemon-name'}>
            <h3>Weight: {weight}</h3>
          </div>
          <div className={'ability-container'}>
          </div>
        </div>

      </div>

      <div className={'evolution-wrapper'}>
        {evolution.map((e, idx) => {
          return <Evolution
            key={idx}
            name={e.name}
            image={e.image}
          />
        })}
      </div>
    </div>
  )
}

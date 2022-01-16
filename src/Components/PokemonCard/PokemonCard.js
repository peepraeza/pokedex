import React from 'react'
import './style.css'
import './color.css'
import {useHistory} from "react-router-dom";

export default function PokemonCard({id, name, image, types}) {
  const style = types[0].type.name + " thumb-container";
  const idStr = '' + id
  let history = useHistory();

  const onClickPokemonCard = () => {
    history.push(`/pokemon/${name}`, {name: name});
  }

  return (
    <div className={style} onClick={onClickPokemonCard}>
      <div className='number'>
        <small>#{idStr.padStart(3, '0')}</small>
      </div>
      <div className={'img-container'}>
        <img id='bg' src={'./images/pokeball_logo.png'} alt={'pokeball'}/>
        <img id={'pokemon-img'} src={image} alt={name}/>
      </div>
      <div className='detail-wrapper'>
        <h4>{name}</h4>
        <div className='type-wrapper'>
          {types.map((type, idx) => {
            const styleColor = type.type.name + '2'
            return <p key={idx} className={styleColor}>{type.type.name}</p>
          })}
        </div>
      </div>
    </div>
  )
}

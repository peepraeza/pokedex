import React from 'react'
import './style.css'
import Evolution from "../Evolution/Evolution";
import {useHistory} from "react-router-dom";
import '../PokemonCard/color.css'
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart} from "recharts";

export default function CardDetail({name, image, types, height, abilities, evolution, weight, stats}) {
  const history = useHistory()
  const typeColor = types[0].type.name;
  const data = createStatData(stats);
  return (
    <>
      <div className={`card-container ${typeColor}2`}>
        <DetailInfo image={image}
                    name={name}
                    types={types}
                    abilities={abilities}
                    weight={weight}
                    height={height}
                    data={data}
        />

        <Evolution evolution={evolution}/>
      </div>
      <div className='pagination-btn-container'>
        <button onClick={history.goBack}>Back</button>
      </div>
    </>
  )
}

function DetailInfo({image, weight, height, name, abilities, types, data}) {
  return (
    <div className={'detail-info-wrapper'}>
      <div className={'detail-img'}>
        <img src={image} alt={name}/>
      </div>
      <div className={'detail-info'}>
        <div className={'detail-name'}>
          <h4>Name: {name}</h4>
        </div>
        <div className={'pokemon-height'}>
          <h4>Height: {convertHeightToMeter(height)} M.</h4>
        </div>
        <div className={'pokemon-weight'}>
          <h4>Weight: {convertWeightToKilo(weight)} Kg.</h4>
        </div>
        <div className={'ability-container'}>
          <h4>Ability: </h4>
          {abilities.map((ability, idx) => {
            const count = abilities.length;
            const lastText = idx === count - 1 ? '' : ','
            return <h4 key={idx}>{'\xA0' + ability.ability.name + lastText}</h4>
          })}
        </div>
        <div className={'type-container'}>
          <h4>Type: </h4>
          {types.map((type, idx) => {
            const count = types.length;
            const lastText = idx === count - 1 ? '' : ','
            return <h4 key={idx}>{'\xA0' + type.type.name + lastText}</h4>
          })}
        </div>
      </div>
      <div className={'chart-container'}>
        <ChartStat data={data}/>
      </div>
    </div>
  )
}

function ChartStat({data}) {
  return (
    <RadarChart
      cx={160}
      cy={150}
      outerRadius={100}
      width={300}
      height={300}
      data={data}
    >
      <PolarGrid stroke="#000000"/>
      <PolarAngleAxis dataKey="key"/>
      <PolarRadiusAxis stroke="#000000"/>
      <Radar
        name="Pokemon"
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}

const convertWeightToKilo = (weight) => {
  return weight / 10;
}

const convertHeightToMeter = (height) => {
  return height * 10 / 100;
}

const createStatData = (stats) => {
  const dataStats = []
  const statMapping = {
    'attack': 'Atk.',
    'special-attack': 'Sp. Atk',
    'special-defense': 'Sp. Def',
    'defense': 'Def.',
    'speed': 'Spd.',
    'hp': 'HP'
  }
  stats.forEach(stat => {
    const data = {}
    data['key'] = statMapping[stat.stat.name] ? statMapping[stat.stat.name] : stat.stat.name
    data['value'] = stat['base_stat'];
    dataStats.push(data)
  })
  return dataStats;
}

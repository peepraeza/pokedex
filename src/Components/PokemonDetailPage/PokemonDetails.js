import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './style.css'
import CardDetail from "../CardDetail/CardDetail";
import {getEvolution, loadPokemonDetail} from "../../services/pokemon.service";
import {Spinner} from "react-bootstrap";

export default function PokemonDetails() {
  const params = useParams();
  const name = params.name;
  const [loading, setLoading] = useState(true)
  const [types, setTypes] = useState([])
  const [stats, setStats] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [image, setImage] = useState('')
  const [abilities, setAbilities] = useState([])
  const [evolution, setEvolution] = useState([])

  useEffect(async () => {
    setLoading(true)
    const data = await loadPokemonDetail(name)
    setStats(data.stats)
    setTypes(data.types)
    setWeight(data.weight)
    setImage(data['sprites']['other']['official-artwork']['front_default'])
    setHeight(data.height)
    setAbilities(data.abilities);
    const evolutionList = await getEvolution(data.species.url)
    setEvolution(evolutionList)
    setLoading(false)
  }, [])

  return (
    <div className={'all-container'}>
      {loading ? <Spinner animation="grow"/> : (
        <CardDetail
          name={name}
          image={image}
          height={height}
          weight={weight}
          abilities={abilities}
          evolution={evolution}
          types={types}
          stats={stats}
        />
      )
      }
    </div>
  )
}

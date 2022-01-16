import {useState, useEffect} from "react";
import {loadPokemonLanding} from "../../services/pokemon.service";
import Pagination from "../Pagination/Pagination";
import PokemonCard from "../PokemonCard/PokemonCard";
import './style.css'
import {Button, Col, Row, Spinner} from "react-bootstrap";

function LandingPage() {
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=100"
  );
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    setLoading(true)
    const pokemonResp = await loadPokemonLanding(currentPageUrl);
    setNextPageUrl(pokemonResp.next);
    setPrevPageUrl(pokemonResp.previous);
    const pokemonArray = [];
    for (const pokemon of pokemonResp.results) {
      const data = await loadPokemonLanding(pokemon.url);
      pokemonArray.push(data)
    }
    setAllPokemon(pokemonArray);
    setLoading(false)
  }, [currentPageUrl]);

  function gotoPrevPageUrl() {
    setCurrentPageUrl(prevPageUrl);
  }

  function gotoNextPageUrl() {
    setCurrentPageUrl(nextPageUrl);
  }

  return (
      <div className='all-container'>
        <Pagination
          gotoPrevPageUrl={gotoPrevPageUrl}
          gotoNextPageUrl={gotoNextPageUrl}
        />
        <div className="pokemon-container">
          {loading ? <Spinner animation="grow"/> : allPokemon.map((pokemonStats, index) =>
            <PokemonCard
              key={index}
              id={pokemonStats.id}
              image={pokemonStats['sprites']['other']['official-artwork']['front_default']}
              name={pokemonStats.name}
              types={pokemonStats.types}
            />)}
        </div>

        <Pagination
          gotoPrevPageUrl={gotoPrevPageUrl}
          gotoNextPageUrl={gotoNextPageUrl}
        />
      </div>
  );
}

export default LandingPage;

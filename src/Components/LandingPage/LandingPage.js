import {useState, useEffect} from "react";
import {loadPokemonLanding} from "../../services/pokemon.service";
import Pagination from "../Pagination/Pagination";
import PokemonCard from "../PokemonCard/PokemonCard";
import './style.css'
import {Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

export default function LandingPage() {
  const currentPath = useSelector(state => state.CurrentUrlPath);
  const [currentPageUrl, setCurrentPageUrl] = useState(currentPath);
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();


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

    dispatch({
      type: "UPDATE_PAGE",
      payload: prevPageUrl
    })
    setCurrentPageUrl(prevPageUrl);
  }

  function gotoNextPageUrl() {
    dispatch({
      type: "UPDATE_PAGE",
      payload: nextPageUrl
    })
    setCurrentPageUrl(nextPageUrl);
  }

  return (
    <div className='all-container'>
      <div>
        {
          loading ? <Spinner className={'spinner'} animation="grow"/> :
            <ContainerLanding allPokemon={allPokemon}
                              gotoNextPageUrl={gotoNextPageUrl}
                              gotoPrevPageUrl={gotoPrevPageUrl}
            />
        }
      </div>
    </div>
  );
}

function ContainerLanding({allPokemon, gotoPrevPageUrl, gotoNextPageUrl}) {
  return (
    <div className="pokemon-container">
      {allPokemon.map((pokemonStats, index) => {
        return <PokemonCard
          key={index}
          id={pokemonStats.id}
          image={pokemonStats['sprites']['other']['official-artwork']['front_default']}
          name={pokemonStats.name}
          types={pokemonStats.types}
        />
      })}
      <Pagination
        gotoPrevPageUrl={gotoPrevPageUrl}
        gotoNextPageUrl={gotoNextPageUrl}
      />
    </div>
  )
}

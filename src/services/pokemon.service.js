import axios from 'axios';

const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/pokemon`
});

export async function loadPokemonLanding(url) {
  const resp = await api.get(url);
  return resp.data;
}

export async function loadPokemonDetail(name) {
  const resp = await api.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return resp.data;
}

export async function getEvolution(speciesUrl) {
  const respSpecies = await api.get(speciesUrl);
  const species = respSpecies.data
  const respEvoChain = await api.get(species.evolution_chain.url);
  const evoChain = respEvoChain.data;
  const lev1 = evoChain.chain.evolves_to;
  const name1 = evoChain.chain.species.name
  const pokemonListEvo = [];
  const image1 = await getImageUrlFromName(name1);
  pokemonListEvo.push({name: name1, image: image1})
  if (lev1.length > 0) {
    const lev2 = evoChain.chain.evolves_to[0];
    const name2 = lev2.species.name;
    const image2 = await getImageUrlFromName(name2);
    pokemonListEvo.push({name: name2, image: image2});
    if (lev2['evolves_to'].length > 0) {
      const lev3 = lev2.evolves_to[0];
      const name3 = lev3.species.name;
      const image3 = await getImageUrlFromName(name3);
      pokemonListEvo.push({name: name3, image: image3});
      const lev4 = lev3['evolves_to'] ? lev3['evolves_to'] : null;
      if (lev4.length > 0) {
        const name4 = lev4.species.name;
        const image4 = await getImageUrlFromName(name4);
        pokemonListEvo.push({name: name4, image: image4});
      }
    }
  }
  return pokemonListEvo;
}

export async function getImageUrlFromName(name) {
  const resp = await api.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return resp.data['sprites']['other']['official-artwork']['front_default'];
}


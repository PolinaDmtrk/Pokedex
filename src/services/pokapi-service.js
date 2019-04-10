export default class PokapiService {

  api_url = `https://pokeapi.co/api/v2/pokemon`;

  async getData() {
  	const pokemons = [];
  	for (let i=1; i<101; i++) {
      const res = await fetch(`${this.api_url}/${i}`);
      if (!res.ok) {
        throw new Error(`Could not fetch ${this.api_url}/${i}, received ${res.status}`);
      }
      const pokemon = await res.json();
      pokemons.push(pokemon);
  	}
    return await pokemons;
  }
}
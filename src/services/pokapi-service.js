export default class PokapiService {

  api_url = `https://pokeapi.co/api/v2/pokemon`;

  async getData() {
  	const pokemons = [], urls = [];
  	for (let i=1; i<30; i++) {
  		urls.push(`${this.api_url}/${i}`);
  	}
  	return Promise.all(urls.map(async (url)=>{
	  		const res = await fetch(url)
	  		const pokemon = await res.json();
	  		pokemons.push(pokemon); 		
  	})).then(
  			result => {return pokemons;})
  }
}
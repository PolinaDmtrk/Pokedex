import React, { Component } from 'react';
import Pokemons from '../pokemons/pokemons';
import PokapiService from '../../services/pokapi-service';
import './app.css';

export default class App extends Component {
  pokapi = new PokapiService();

  constructor() {
    super();

    this.state = {
      pokemons: [],
      currentPage: 1,
      pokemonsPerPage: 5
    };

    this.handleClick = this.handleClick.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);

    this.pokapi.getData().then((data) => {
      data.sort((a ,b) => a.id - b.id)
      this.setState({
        pokemons: data
      });
    });
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  previousPage() {
    let currentPage=this.state.currentPage;
    if (currentPage != 1) {currentPage--}
    this.setState({
      currentPage: currentPage
    });
  }
  nextPage() {
    let currentPage=this.state.currentPage;
    if (currentPage != Math.ceil(this.state.pokemons.length/this.state.pokemonsPerPage)) {currentPage++};
    this.setState({
      currentPage: currentPage
    });
  }

  render() {
    const {pokemons, currentPage, pokemonsPerPage} = this.state;

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const allPageNumbers = [];
    let pageNumbers = [];
    for (let i=1; i <= Math.ceil(pokemons.length/pokemonsPerPage); i++){
      allPageNumbers.push(i);
    }
    if (currentPage<5) {
      pageNumbers = allPageNumbers.splice(0, 10);
    }
    else {
      pageNumbers = allPageNumbers.splice(currentPage-5, 10);
    } 
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number}  className="pages" id={number} onClick={this.handleClick}>{number}</li>
      );
    });

    return (
      <div className="pokemons">
        <div>
          <button onClick={this.previousPage}>prev</button>
          <Pokemons pokemons={currentPokemons}/>
          <button onClick={this.nextPage}>next</button>
        </div>
        <div>
          <ul>
           {renderPageNumbers}
          </ul>
        </div>
      </div>
    );
  }
}
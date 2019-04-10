import React, { Component } from 'react';
import Pokemon_item from '../pokemon-item/pokemon-item';
import './pokemons.css';

export default class Pokemons extends Component {
	constructor() {
		super();
	}
	
	render() {
		const pokemons = this.props.pokemons.map((pokemon) => {
			return (
				<Pokemon_item key={pokemon.id} pokemon={pokemon}/>
			);
		});

		return (
			<ul>
				{pokemons}
			</ul>
		);
	}
}
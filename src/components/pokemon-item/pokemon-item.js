import React, { Component } from 'react';

export default class Pokemon_item extends Component {
  render() {
    const {id, name, base_experience, weight, height, abilities, sprites} = this.props.pokemon;
    return (
      <li className="pokemon">
        <div>
          <img src={sprites.front_default} alt="PokemonImage"/>
        </div>
        <div>
          <h4>#{id} {name}</h4>
          <p>base_experience: {base_experience}</p>
          <p>weight: {weight}</p>
          <p>height: {height}</p>
          <p>ability: {abilities[0].ability.name}</p>
        </div>
		  </li>
    );
  }
}
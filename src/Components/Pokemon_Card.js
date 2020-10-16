import React from 'react';
import { PokemonList } from '../Helpers/PokemonList';

function GetColorLabel(typePoke) {
	let objectData = PokemonList.filter(({ type }) => type.toLowerCase() === typePoke);
	if (objectData[0].color === undefined) {
		return 'secondary';
	}
	return objectData[0].color;
}

export const Pokemon_Card = ({ name, imagen, typesPokemon, id }) => {
	return (
		<div className="Pokemon_Card_Container shadow animate__zoomIn">
			<h3>{name}</h3>
			<img src={imagen} alt={name} className="Pokemon_Card_Container_img" />
			<span className="font-weight-bold">{`N°- ${id}`}</span>
			<div className="Pokemon_Card_Container_tags">
				{typesPokemon.map((typeslabel) => (
					<span
						key={typeslabel}
						className={`badge badge-${GetColorLabel(typeslabel)} mx-1`}
					>
						{typeslabel}
					</span>
				))}
			</div>
		</div>
	);
};

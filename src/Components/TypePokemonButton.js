import React from 'react';
import { FindTypes } from '../Helpers/FindTypes';

export const TypePokemonButton = ({ typePokemon, setsearch }) => {
	return (
		<button
			className="btn btn-primary w-auto my-1 mx-1 btn-sm"
			onClick={async () => {
				/* AQUI LLAMAR DEVOLVER LIST OF POKEMON*/
				const pokemon = await FindTypes(typePokemon);
				console.log(pokemon);
				setsearch(pokemon);
			}}
		>
			{typePokemon.toUpperCase()}
		</button>
	);
};

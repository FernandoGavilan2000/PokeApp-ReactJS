import React from 'react';
import { TypePokemonButton } from './TypePokemonButton';
import { PokemonList } from '../Helpers/PokemonList';

export const SuggestionChart = React.memo(({ setsearch }) => {
	return (
		<div className="w-100 animate__fadeInDown">
			<p className="my-1 text-md font-weight-bold">Pokemones Relacionados:</p>
			<div className="d-flex justify-content-center flex-wrap  ">
				{PokemonList.map(({ type }) => (
					<TypePokemonButton typePokemon={type} key={type} setsearch={setsearch} />
				))}
			</div>
		</div>
	);
});

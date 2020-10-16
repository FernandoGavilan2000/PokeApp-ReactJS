async function fetcher(pokemon) {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
	);
	const { id, name, sprites, types } = await response.json();

	let { front_default } = sprites;
	let typesPokemon = types.map(({ type }) => type.name);

	let data = {
		id,
		name,
		imagen: front_default,
		typesPokemon,
	};

	return data;
}

export const FetchPokeApi = async (pokemon_list) => {
	let PokeData = [];

	for (const pokemon of pokemon_list) {
		const info_pokemon = await fetcher(pokemon);
		PokeData.push(info_pokemon);
	}

	return PokeData;
};

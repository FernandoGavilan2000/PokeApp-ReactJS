export const FindTypes = async (type) => {
	const response = await fetch(`https://pokeapi.co/api/v2/type/${type.toLowerCase()}`);
	const { pokemon } = await response.json();

	let Poke_Array = pokemon.map(({ pokemon }) => pokemon.name);

	return Poke_Array;
};

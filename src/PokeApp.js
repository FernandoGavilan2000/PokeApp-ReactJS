import React, { useCallback, useState } from 'react';
import './Styles.css';
import { FormPokemon } from './Components/FormPokemon';
import { SuggestionChart } from './Components/SuggestionChart';
import { Pokemon_Card } from './Components/Pokemon_Card';
import { useEffect } from 'react';
import { FetchPokeApi } from './Helpers/FetchPokeApi';

export const PokeApp = () => {
	const [search, setsearch] = useState([
		'lugia',
		'darkrai',
		'charizard',
		'rayquaza',
		'pikachu',
	]);
	const [data, setdata] = useState([]);
	const [status, setstatus] = useState(false);

	const handleSearch = useCallback((input_name) => {
		setsearch([input_name]);
	}, []);

	useEffect(() => {
		setstatus(false);
		FetchPokeApi(search.length > 1 ? search.filter((item, index) => index < 20) : search)
			.then((data) => {
				console.log('Aqui', data);
				setdata(data);
				setstatus(true);
			})
			.catch((error) => {
				setdata((e) => e);
				setstatus(true);
				alert('ID OR NAME INCORRET TRY AGAIN');
			});
	}, [search]);

	return (
		<div className="container bg-light shadow h-auto">
			<h1 className="text-center text-dark">POKE_APP REACT JS</h1>
			<FormPokemon topic={'nombres o id'} handleSearch={handleSearch} />
			<SuggestionChart setsearch={setsearch} />
			<div className="Grid_Results">
				{status ? (
					data.map((pokecard) => <Pokemon_Card {...pokecard} key={pokecard.id} />)
				) : (
					<h3 className="my-2">Fetching Data...</h3>
				)}
			</div>
		</div>
	);
};

import React, { useCallback, useState } from 'react';

export const FormPokemon = React.memo(({ topic, handleSearch }) => {
	const [form, setform] = useState('');

	const handleForm = useCallback((e) => {
		setform(e.target.value);
	}, []);

	return (
		<form action="">
			<div className="row">
				<div className="col-8 px-1">
					<input
						type="text"
						className="form-control"
						placeholder={`Buscar por ${topic}`}
						onChange={handleForm}
						value={form}
					/>
				</div>
				<div className="col-4 d-flex justify-content-center px-0">
					<button
						className="btn btn-dark w-100 mx-3 font-weight-bold"
						onClick={(e) => {
							e.preventDefault();
							if (form !== '' && 0 < form < 884) {
								handleSearch(form);
							} else {
								console.warn('Introducir un id o name correcto');
							}
						}}
					>
						SEARCH
						<span role="img" aria-label="search">
							🔎
						</span>
					</button>
				</div>
			</div>
		</form>
	);
});

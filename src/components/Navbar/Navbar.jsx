import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../Reduce/reduce"; // Importa l'azione per impostare i libri
import { selectBooks } from "../Reduce/reduce"; // Importa il selettore per ottenere i libri

const Navbar = () => {
	const dispatch = useDispatch();
	const books = useSelector(selectBooks); // Ottieni i libri dallo stato Redux
	const [searchTerm, setSearchTerm] = useState(""); // Stato per memorizzare il termine di ricerca

	const handleSearch = () => {
		// Filtra i libri in base al termine di ricerca
		const filteredBooks = books.filter((book) =>
			book.title.toLowerCase().includes(searchTerm.toLowerCase())
		);

		// Aggiorna lo stato dei libri nel Redux con i libri filtrati
		dispatch(setBooks(filteredBooks));
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="#">
					Il Tuo Logo
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Servizi
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contattaci
							</a>
						</li>
					</ul>
				</div>
				<div className="ml-auto">
					<input
						type="text"
						placeholder="Cerca libri..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button onClick={handleSearch}>Cerca</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks, selectBooks } from "../Reduce/reduce"; // Importa le azioni e il selettore
import SingleBook from "../SingleBook/SingleBook"; // Importa il componente SingleBook
import CommentArea from "../CommentArea/CommentArea";

const LatestRelease = () => {
	const dispatch = useDispatch();
	const books = useSelector(selectBooks);

	useEffect(() => {
		// Esegui la richiesta API quando il componente si monta
		fetch("https://epibooks.onrender.com")
			.then((response) => response.json())
			.then((data) => {
				// Invia l'azione per impostare i dati dei libri nel tuo store Redux
				dispatch(setBooks(data));
				console.log(data);
			})
			.catch((error) => {
				console.error("Errore nella richiesta API:", error);
			});
	}, [dispatch]); // Assicurati di includere dispatch nell'array delle dipendenze

	return (
		<div>
			<h2>Ultimo Rilascio</h2>
			<div>
				{books.map((book, index) => (
					<div key={`${book.asin}-${index}`}>
						<SingleBook book={book} />
					</div>
				))}
			</div>
		</div>
	);
};

export default LatestRelease;

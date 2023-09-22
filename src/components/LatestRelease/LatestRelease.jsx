// Questo componente rappresenta la pagina degli ultimi rilasci dei libri.
// Utilizza Redux per gestire lo stato dei libri e delle azioni.

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks, selectBooks } from "../Reduce/reduce";
import BookPage from "../Bookpage/Bookpage";

// Importa i file JSON dei vari generi di libri
import fantasyBooks from "../Data/fantasy.json";
import historyBooks from "../Data/history.json";
import horrorBooks from "../Data/horror.json";
import romanceBooks from "../Data/romance.json";
import scifiBooks from "../Data/scifi.json";

const LatestRelease = () => {
	const dispatch = useDispatch(); // Inizializza la funzione di dispatch di Redux
	const books = useSelector(selectBooks); // Ottieni lo stato dei libri utilizzando il selettore di Redux

	useEffect(() => {
		// In questa fase, puoi inviare i dati dai file JSON al tuo store Redux utilizzando l'azione 'setBooks'.

		// Ad esempio, per i libri di genere fantasy:
		dispatch(setBooks(fantasyBooks));

		// Puoi fare lo stesso per gli altri generi di libri.
		dispatch(setBooks(historyBooks));
		dispatch(setBooks(horrorBooks));
		dispatch(setBooks(romanceBooks));
		dispatch(setBooks(scifiBooks));

		// Nota che stai inviando i dati dei libri al tuo store Redux, quindi ora dovresti avere accesso a questi dati
		// utilizzando il selettore `selectBooks` in altri componenti.
	}, [dispatch]);

	return (
		<div>
			<h2>Ultimo Rilascio</h2>
			<div>
				{books.map((book, index) => (
					<div key={`${book.asin}-${index}`}>
						<BookPage book={book} />
					</div>
				))}
			</div>
		</div>
	);
};

export default LatestRelease; // Esporta il componente LatestRelease

//Il componente LatestRelease è una funzione React che rappresenta la pagina degli ultimi rilasci dei libri,
// Utilizza hook di Redux come useDispatch e useSelector per accedere allo stato Redux e alle azioni.
//Nell'effetto useEffect, quando il componente si monta, viene eseguita una richiesta API a "https://epibooks.onrender.com" per ottenere dati sui libri più recenti.
//I dati ottenuti dalla richiesta API vengono convertiti in formato JSON e memorizzati nello stato Redux utilizzando l'azione setBooks e la funzione di dispatch dispatch.
//I dati ottenuti vengono anche stampati nella console per scopi di debug.
//Nella parte di rendering, viene visualizzata una lista di libri mappando l'array books e creando un componente BookPage per ciascun libro.

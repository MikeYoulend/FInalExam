import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
	const [bookDetails, setBookDetails] = useState(null);
	const { BookId } = useParams();

	const getBookById = async () => {
		try {
			const response = await fetch(`https://epibooks.onrender.com/${BookId}`);
			if (!response.ok) {
				throw new Error("Errore nella richiesta al server");
			}
			const data = await response.json();
			setBookDetails(data);
		} catch (error) {
			console.error(
				"Errore durante il recupero dei dettagli del libro:",
				error
			);
		}
	};

	useEffect(() => {
		getBookById();
	}, [BookId]);

	if (!bookDetails) {
		return <div>Caricamento in corso...</div>;
	}

	return (
		<div>
			<h2>Dettagli del Libro</h2>
			<img src={bookDetails[0].img} width={300} />
			<p>Titolo: {bookDetails[0].title}</p>
			<p>ASIN: {bookDetails[0].asin}</p>
			<p>Categoria: {bookDetails[0].category}</p>
			<p>Prezzo: ${bookDetails[0].price}</p>
		</div>
	);
};

export default BookDetails;

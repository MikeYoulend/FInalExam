import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	setReviews,
	selectReviews,
	toggleShowComments,
	selectShowComments,
} from "../Reduce/reduce"; // Assicurati di utilizzare il percorso corretto per l'import
import AddComment from "../AddComment/AddComment";
import CommentList from "../CommentList/CommentList";

const CommentArea = ({ book }) => {
	const dispatch = useDispatch();

	const reviews = useSelector(selectReviews); // Utilizza il selettore per ottenere le recensioni dallo stato Redux
	const showComments = useSelector(selectShowComments); // Utilizza il selettore per ottenere lo stato showComments dallo stato Redux
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ZWU0MGRmZmI4YjAwMTQ0MTNjZmQiLCJpYXQiOjE2OTUxMzE2NjMsImV4cCI6MTY5NjM0MTI2M30.tw2a1itvxaGRzv9bBHf9tmOCYDTBVD4sUyBLeh4MCNI"; // Sostituisci 'IlTuoToken' con il tuo token reale

	useEffect(() => {
		// Configura l'intestazione della richiesta con il token
		const headers = {
			Authorization: `Bearer ${token}`,
		};

		// Esegui la richiesta API con l'intestazione dell'autorizzazione
		fetch(
			`https://striveschool-api.herokuapp.com/api/comments/?elementId=${book.asin}`,
			{ headers }
		)
			.then((response) => response.json())
			.then((data) => {
				console.log("Dati ottenuti dalla richiesta API:", data);
				// Aggiorna lo stato delle recensioni nel Redux con i dati dall'API
				dispatch(setReviews(data));
			})
			.catch((error) => {
				console.error("Errore nella richiesta API:", error);
			});
	}, [book.asin, dispatch, token]);

	const handleToggleComments = () => {
		// Cambia lo stato showComments nel Redux quando si fa clic sul titolo del libro
		dispatch(
			toggleShowComments({ asin: book.asin, show: !showComments[book.asin] })
		);
	};

	return (
		<div>
			<h3 onClick={handleToggleComments}>{book.title}</h3>
			{showComments[book.asin] && (
				<div>
					<CommentList reviews={reviews} />
					<AddComment bookAsin={book.asin} />
				</div>
			)}
		</div>
	);
};

export default CommentArea;

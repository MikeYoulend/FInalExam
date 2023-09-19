import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setReviews } from "../Reduce/reduce"; // Assicurati di utilizzare il percorso corretto per l'import

const AddComment = ({ bookAsin }) => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState("");
	const [rate, setRate] = useState(1);

	const handleAddComment = () => {
		// Crea un nuovo oggetto recensione con i dati del commento
		const newReview = {
			comment: comment,
			rate: rate,
			elementId: bookAsin,
		};

		// Esegui una richiesta POST per inviare la nuova recensione all'API
		fetch("https://striveschool-api.herokuapp.com/api/comments/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ZWU0MGRmZmI4YjAwMTQ0MTNjZmQiLCJpYXQiOjE2OTUxMzE2NjMsImV4cCI6MTY5NjM0MTI2M30.tw2a1itvxaGRzv9bBHf9tmOCYDTBVD4sUyBLeh4MCNI", // Sostituisci con il tuo token reale
			},
			body: JSON.stringify(newReview),
		})
			.then((response) => response.json())
			.then((data) => {
				// Aggiorna lo stato delle recensioni nel Redux con i dati dell'API
				dispatch(setReviews(data));
			})
			.catch((error) => {
				console.error("Errore nell'invio della recensione:", error);
			});

		// Pulisci il modulo dopo l'invio
		setComment("");
		setRate(1);
	};

	return (
		<div>
			<h4>Aggiungi una recensione per ASIN: {bookAsin}</h4>
			<textarea
				placeholder="Inserisci il tuo commento..."
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
			<label>
				Rate:
				<select value={rate} onChange={(e) => setRate(e.target.value)}>
					{Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
						<option key={value} value={value}>
							{value}
						</option>
					))}
				</select>
			</label>
			<button onClick={handleAddComment}>Invia</button>
		</div>
	);
};

export default AddComment;

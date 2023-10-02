import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setReviews } from "../Reduce/reduce";
import Modal from "react-modal";
import "./addComment.css";

const AddComment = ({ bookAsin }) => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState("");
	const [rate, setRate] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [error, setError] = useState(null); // Stato per gestire l'errore

	const handleAddComment = () => {
		const newReview = {
			comment: comment,
			rate: rate,
			elementId: bookAsin,
		};

		fetch("https://striveschool-api.herokuapp.com/api/comments/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0ZWU0MGRmZmI4YjAwMTQ0MTNjZmQiLCJpYXQiOjE2OTUxMzE2NjMsImV4cCI6MTY5NjM0MTI2M30.tw2a1itvxaGRzv9bBHf9tmOCYDTBVD4sUyBLeh4MCNI",
			},
			body: JSON.stringify(newReview),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Errore nell'invio della recensione");
				}
			})
			.then((data) => {
				dispatch(setReviews(data));
				setIsModalOpen(false);
				setError(null);
			})
			.catch((error) => {
				console.error("Errore nell'invio della recensione:", error);
				setError("Errore nell'invio della recensione. Riprova più tardi.");
			})
			.finally(() => {
				// Pulisci il modulo dopo l'invio o in caso di errore
				setComment("");
				setRate(1);
			});
	};

	const handleCloseModal = () => {
		if (error) {
			// Ricarica la pagina se c'è un errore e l'utente clicca su "Chiudi"
			window.location.reload();
		}
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
			{/* Modale per mostrare il messaggio di successo o errore */}
			<Modal
				isOpen={isModalOpen || error}
				onRequestClose={handleCloseModal}
				contentLabel="Messaggio"
				className="react-modal"
				overlayClassName="react-modal-overlay"
			>
				<div className="react-modal-content">
					<h2>{error ? "Errore" : "Recensione inviata con successo!"}</h2>
					{error && <p>{error}</p>}
					<button onClick={handleCloseModal}>Chiudi</button>
				</div>
			</Modal>
		</div>
	);
};

export default AddComment;

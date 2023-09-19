import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	toggleShowComments,
	setSelectedBookAsin,
	selectShowComments,
} from "../Reduce/reduce";
import Card from "react-bootstrap/Card";
import CommentArea from "../CommentArea/CommentArea";
import "./singleBook.css"; // Importa il file CSS

const SingleBook = ({ book }) => {
	const dispatch = useDispatch();
	const showComments = useSelector(selectShowComments);

	const toggleComments = () => {
		dispatch(
			toggleShowComments({ asin: book.asin, show: !showComments[book.asin] })
		);
	};

	const handleBookClick = () => {
		dispatch(setSelectedBookAsin(book.asin));
	};

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={book.img} alt={book.title} />
			<Card.Body>
				<Card.Title>{book.title}</Card.Title>
				<Card.Text>Category: {book.category}</Card.Text>
				<Card.Text>ASIN: {book.asin}</Card.Text>
				<Card.Text>Price: ${book.price}</Card.Text>
				<button onClick={toggleComments}>
					{showComments[book.asin] && showComments[book.asin].length > 0
						? "Hide Comments"
						: "Show Comments"}
				</button>
				{showComments[book.asin] && <CommentArea book={book} />}
			</Card.Body>
			<div onClick={handleBookClick} className="overlay"></div>
		</Card>
	);
};

export default SingleBook;

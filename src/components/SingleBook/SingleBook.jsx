import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	toggleShowComments,
	setSelectedBookAsin,
	selectShowComments,
} from "../Reduce/reduce";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"; // Importa il componente Link
import "./singleBook.css"; // Importa il file CSS

const SingleBook = ({ book }) => {
	const dispatch = useDispatch();
	const showComments = useSelector(selectShowComments);

	const [commentsVisible, setCommentsVisible] = useState(false);

	const toggleComments = () => {
		setCommentsVisible(!commentsVisible);
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
				<Link to={`/book-details/${book.asin}`}>
					<Card.Title>{book.title}</Card.Title>
				</Link>
				<Card.Text>Category: {book.category}</Card.Text>
				<Card.Text>ASIN: {book.asin}</Card.Text>
				<Card.Text>Price: ${book.price}</Card.Text>
				<button onClick={toggleComments}>
					{showComments[book.asin] && showComments[book.asin].length > 0
						? "Hide Comments"
						: "Show Comments"}
				</button>
			</Card.Body>
			<div onClick={handleBookClick} className="overlay"></div>
		</Card>
	);
};

export default SingleBook;

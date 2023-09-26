import React from "react";
import SingleBook from "../SingleBook/SingleBook";
import CommentArea from "../CommentArea/CommentArea";
import "./Bookpage.css";

const BookPage = ({ book }) => {
	return (
		<div className="book-page">
			<div className="book-column">
				<SingleBook book={book} />
			</div>
			<div className="comment-column">
				<h3>Comments</h3>
				<CommentArea book={book} />
			</div>
		</div>
	);
};

export default BookPage;

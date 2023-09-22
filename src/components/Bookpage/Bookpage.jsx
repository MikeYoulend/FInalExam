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
				<CommentArea book={book} />
			</div>
		</div>
	);
};

export default BookPage;

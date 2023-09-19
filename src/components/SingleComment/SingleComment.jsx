const SingleComment = ({ review }) => {
	return (
		<div>
			<p>Autore: {review.author}</p>
			<p>Commento: {review.comment}</p>
			<p>Rate: {review.rate}</p>
			<p>Data di creazione: {review.createdAt}</p>
		</div>
	);
};

export default SingleComment;

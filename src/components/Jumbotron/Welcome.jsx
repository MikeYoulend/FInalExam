const Welcome = () => {
	return (
		<div className="jumbotron">
			<div className="container">
				<h1 className="display-4">Benvenuti!</h1>
				<p className="lead">
					Questo è un esempio di un jumbotron Bootstrap. Puoi personalizzarlo
					come preferisci.
				</p>
				<hr className="my-4" />
				<p>Altre informazioni sulla tua applicazione o sito web.</p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Scopri di più
				</a>
			</div>
		</div>
	);
};

export default Welcome;

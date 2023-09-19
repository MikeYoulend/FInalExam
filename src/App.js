import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Jumbotron/Welcome";
import Footer from "./components/Footer/Footer";
import LatestRelease from "./components/LatestRelease/LatestRelease";
import CommentArea from "./components/CommentArea/CommentArea";

const App = () => {
	return (
		<div>
			<Navbar />
			<Welcome />
			<div className="container">
				<div className="row">
					<div className="col-6"></div>
					<div className="col-6">
						<LatestRelease />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default App;

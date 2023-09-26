import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Jumbotron/Welcome";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import BookDetails from "./components/Pages/BookDetails";
import ErrorPage from "./components/Pages/ErrorPage";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Welcome />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/book-details/:BookId" element={<BookDetails />} />

				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;

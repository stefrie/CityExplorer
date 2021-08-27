import axios from 'axios';
const server = process.env.REACT_APP_BACKEND_URL;

const getWeather = async (searchQuery) => {
	const cityWeather = `${server}/weather?searchQuery=${searchQuery}`;
	
	try {
	const weatherResponse = await axios.get(cityWeather);
	// this.setState({forecastArray: weatherResponse.data});
	return weatherResponse.data;
	} catch (error) {
		this.setState({ error })
	}
}

const getMovies = async (searchQuery) => {
	const cityFilms = `${server}/movies?searchQuery=${searchQuery}`;
	try {
	const moviesResponse = await axios.get(cityFilms);
	// this.setState({moviesArray: moviesResponse.data});
	return moviesResponse.data;
	} catch (error) {
		this.setState({ error })
	}
}

const functions = {getWeather, getMovies}
export default functions;

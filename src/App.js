import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityCard from './CityCard';

// const server = `http://localhost:3003`;
// const server = process.env.REACT_APP_BACKEND_URL;
const server = `https://code301-cityexplorer.herokuapp.com`;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: '',
			location: {},
			error: null,
			forecastArray: [],
			moviesArray: [],
		};
	}

	getLocation = async () => {
		const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
		
		try {
		const response = await axios.get(API);
		// await => makes sure axios runs before you set state
		console.log(response.data[0]);
		this.setState({location: response.data[0]});
		this.getWeather(this.state.searchQuery);
		this.getMovies(this.state.searchQuery);
		this.setState({error: null})
		} catch (error) {
			this.setState({ error })
		}
	}

	getWeather = async (searchQuery) => {
		const cityWeather = `${server}/weather?searchQuery=${searchQuery}`;
		
		try {
		const weatherResponse = await axios.get(cityWeather);
		this.setState({forecastArray: weatherResponse.data});
		// return weatherResponse.data;
		} catch (error) {
			this.setState({ error })
		}
	}
	
	getMovies = async (searchQuery) => {
		const cityFilms = `${server}/movies?searchQuery=${searchQuery}`;
		try {
		const moviesResponse = await axios.get(cityFilms);
		this.setState({moviesArray: moviesResponse.data});
		// return moviesResponse.data;
		} catch (error) {
			this.setState({ error })
		}
	}

	render() {
		return (
			<>
				<h1 style={{
					color: '#718196',
					fontFamily: 'Brush Script MT, Brush Script Std, cursive',
					fontWeight: 'bolder',
					textAlign: 'center',
					padding: '20px',
					fontSize: '72px',
					alignText: 'bottom'
				}}>City Explorer</h1>
				<hr style={{
					border: '10px solid #718196',
					borderRadius: '100%',
					width: '90%',
					margin: 'auto auto 30px auto',
				}}></hr>
				<container style={{display: 'flex', justifyContent: 'center' }}>
					<input 
						onChange={(e) => this.setState({ searchQuery: e.target.value })} 
						value={this.state.searchQuery} 
						style={{ 
							fontFamily: 'Trebuchet MS, sans-serif', 
							margin: '20px', 
							backgroundColor: '#fff3de',
							color: '#968565',
							borderRadius: '5px',
							textAlign: 'center'
						}}
						placeholder="Search for a city">
					</input>
					<button 
						style={{ 
							fontFamily: 'Trebuchet MS, sans-serif', 
							backgroundColor: '#fff3de', 
							color: '#968565',
							margin: '20px',
							padding: '0px 20px',
							borderRadius: '15px'					
						}}
						onClick={this.getLocation}>
						Explore!
					</button>
				</container>
				{this.state.location.place_id && 
					<>
					<CityCard 
						name={this.state.location.display_name} 
						lat={this.state.location.lat}
						lon={this.state.location.lon}
						mapImage={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`}
						getWeather={this.state.forecastArray}
						searchQuery={this.state.searchQuery}
						getMovies={this.state.moviesArray}
					/>
					</>
				}
				{this.state.error && <p style={{textAlign: 'center', color: '#D61D00'}}>Something went wrong! Error message: "{this.state.error.message}"</p>}
			</>
		)
	}
}

export default App;

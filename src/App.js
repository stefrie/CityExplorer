import './App.css';
import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityCard from './CityCard';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: '',
			location: {},
			error: null,
		};
	}

	getLocation = async () => {
		const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
		
		try {
		const response = await axios.get(API);
		console.log(response.data[0]);
		this.setState({location: response.data[0]});
		} catch (error) {
			this.setState({ error })
		}
		// try {
		// 	return <h1>Erorr! Errorr!</h1>
		// } catch (error) {
		// 	alert('danger will robinson')
			// 
		// }	
	}

	render() {
		return (
			<>
				<input 
					onChange={(e) => this.setState({ searchQuery: e.target.value })} 
					value={this.state.searchQuery} 
					style={{ 
						fontFamily: 'Trebuchet MS, sans-serif', 
						margin: '20px', 
						backgroundColor: '#fff3de'
					}}
					placeholder="Search for a city">
				</input>
				<button 
					style={{ 
						fontFamily: 'Trebuchet MS, sans-serif', 
						backgroundColor: '#fff3de', 
						color: '#968565' 
					}}
					onClick={this.getLocation}>
					Explore!
				</button>
				{this.state.location.place_id && 
					<>
					<CityCard 
						name={this.state.location.display_name} 
						lat={this.state.location.lat}
						lon={this.state.location.lon}
						mapImage={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`}
					/>
					</>
				}
				{this.state.error && <p>Something went wrong! See error message: "{this.state.error.message}"</p>}
			</>
		)
	}
}

export default App;

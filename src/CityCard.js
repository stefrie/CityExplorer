import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Weather from './Weather';
import Movies from './Movies';

class CityCard extends React.Component {
	render() {
        return (
			<Container style={{display:'flex', justifyContent: 'center'}}>
            <Card style={{ 
				backgroundColor: '#718196', 
				color: '#fff3de', 
				margin: '30px', 
				width: '50rem', 
				fontFamily: 'Trebuchet MS, sans-serif',
				borderRadius: '20px',
				textAlign: 'center',
			}}>
                <Card.Body>
                    <Card.Title style={{fontSize: '24px'}}>
						{this.props.name}
					</Card.Title>
					<hr></hr>
                    <Card.Text>
						<p style={{fontSize: '16px'}}>Latitude: {this.props.lat} &nbsp; &nbsp; &nbsp; &nbsp; Longitude: {this.props.lon}</p>
					</Card.Text>
					<Card.Text>
						{this.props.getWeather.length > 0 &&
						<Weather getWeather={this.props.getWeather} searchQuery={this.props.searchQuery} />}
					</Card.Text>
					<Card.Img style={{borderRadius: '50%', paddingBottom: '30px'}} src={this.props.mapImage} />
					<p style={{fontWeight: 'bolder'}}>Top 20 Films about this City</p>
                </Card.Body>
				<Card.Footer>
						{this.props.getMovies.length > 0 &&
						<Movies getMovies={this.props.getMovies} searchQuery={this.props.searchQuery} />}
				</Card.Footer>
            </Card>
			</Container>
        );
    }
};

export default CityCard;

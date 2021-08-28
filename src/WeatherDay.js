import React from 'react';
import { Card } from 'react-bootstrap';

class WeatherDay extends React.Component {
	render() {
		return (
			<Card>
				<Card.Header>Weather forecast for {this.props.date}</Card.Header>
				<Card.Body>
					<p>High of {this.props.high}° C</p>
					<p>Low of {this.props.low}° C</p>
					<p>Skies: {this.props.desc}</p>
				</Card.Body>
			</Card>
		)
	}
}

export default WeatherDay;

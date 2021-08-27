import React from 'react';
import { Card } from 'react-bootstrap';

class Weather extends React.Component {
	render() {
		return (
			<div>
				{this.props.getWeather.map((value, idx) => (
					<Card key={idx} style={{color: '#718196'}}>
					<Card.Text>
						Weather forecast for {value.date}: High of {value.high}C, low of {value.low}C with {value.desc}
					</Card.Text>
					</Card>
				))}
			</div>
		)		
	};
}

export default Weather;

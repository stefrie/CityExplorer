import React from 'react';
import { Card } from 'react-bootstrap';

class Weather extends React.Component {
	render() {
		return (
			<div>
				{this.props.getWeather.map((value, idx) => (
					<Card key={idx}>
					<Card.Text>
						Weather forecast: {value.date} 
						{/* has a low of ${day.app_map_temp.low_temp}C and a high of ${day.high_temp}C with  */}
						{value.desc}
					</Card.Text>
					</Card>
				))}
			</div>
		)		
	};
}

export default Weather;

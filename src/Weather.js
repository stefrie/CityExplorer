import React from 'react';
import { Card } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
	render() {
		return (
			<div>
				{this.props.getWeather.map((value, idx) => (
					<Card key={idx} style={{color: '#718196'}}>	
						<Card.Text>
							<WeatherDay
								date={value.date}
								desc={value.desc}
								low={value.low}
								high={value.high}>
							</WeatherDay>
						</Card.Text>
					</Card>
				))}
			</div>
		)		
	};
}

/// for (let propert in ) {
// 		console.log(property, person[property])
// }

export default Weather;

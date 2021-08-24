import './App.css';
import React from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class CityCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			latitude: this.props.latitude,
			longitude: this.props.longitude,
		}
	}

	render() {
        return (
            <Card style={{ width: '14rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>Latitude: {this.props.latitude}</Card.Text>
                    <Card.Text>Longitude: {this.props.longitude}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
};



export default CityCard;

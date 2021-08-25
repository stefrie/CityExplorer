import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';

class CityCard extends React.Component {
	render() {
        return (
            <Card style={{ 
				backgroundColor: '#718196', 
				color: '#fff3de', 
				margin: '30px', 
				width: '22rem', 
				fontFamily: 'Trebuchet MS, sans-serif' 
			}}>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>Latitude: {this.props.lat}</Card.Text>
                    <Card.Text>Longitude: {this.props.lon}</Card.Text>
					<Card.Img variant="bottom" src={this.props.mapImage} />
                </Card.Body>
            </Card>
        );
    }
};

export default CityCard;

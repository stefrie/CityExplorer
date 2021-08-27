import React from 'react';
import { Card } from 'react-bootstrap';

class Movies extends React.Component {
	render() {
		return (
			<div>
				{this.props.getMovies.map((value, idx) => (
					<Card key={idx}>
					<Card.Text style={{color: '#718196'}}>
						<p>{value.title}</p>
						<p>{value.releaseDate}</p>
						<p>{value.averagevotes}</p>
						<p>{value.synopsis}</p>
					</Card.Text>
					</Card>
				))}
			</div>
		)		
	};
}

export default Movies;

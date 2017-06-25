import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Text = styled.p`
	font-family: 'LatoBold';
	font-size: 6em;
`;

export class Greeting extends PureComponent {
	getGreeting() {
		console.log(this.props);
		const { partOfTheDay, greetings } = this.props;
		return greetings[partOfTheDay];
	}

	render() {
    	return (
			<Text>{this.getGreeting()}</Text>
    	);
  	}
}

export default connect(
	(state) => {
		console.log(state.entities.greetings);
		return {
			partOfTheDay: state.ui.partOfTheDay,
			greetings: state.entities.greetings,
		}
	},
)(Greeting)


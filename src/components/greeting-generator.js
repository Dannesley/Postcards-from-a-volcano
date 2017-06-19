import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Text = styled.p`
	font-family: 'LatoBold';
	font-size: 6em;
`;

export class GreetingGenerator extends PureComponent {
	generateGreetingText() {
		const { partOfTheDay, greetings } = this.props;
		return greetings[partOfTheDay];
	}

	render() {
    	return (
			<Text>{this.generateGreetingText()}</Text>
    	);
  	}
}

export default connect(
	(state) => {
		return {
			partOfTheDay: state.ui.partOfTheDay,
			greetings: state.entities.greetings,
		}
	},
)(GreetingGenerator)


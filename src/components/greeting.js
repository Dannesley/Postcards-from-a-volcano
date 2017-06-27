import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { lightAwareText } from './utils/styles';

const Text = styled(lightAwareText)`
	font-family: 'LatoBold';
	font-size: 6.5em;
`;

export class Greeting extends PureComponent {
	getGreeting() {
		const { partOfTheDay, greetings } = this.props;
		return greetings[partOfTheDay];
	}

	render() {
    	return (
			<Text isLight={this.props.isLight}>
				{this.getGreeting()}
			</Text>
    	);
  	}
}

export default connect(
	(state) => {
		return {
			partOfTheDay: state.partOfTheDay,
			greetings: state.greetings,
			isLight: state.isLight,
		}
	},
)(Greeting)


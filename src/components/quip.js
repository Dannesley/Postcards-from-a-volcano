import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Text = styled.p`
	font-family: 'LatoBold';
	font-size: 2em;
`;

export class Quip extends PureComponent {
	getQuip() {
		const { partOfTheDay, quips } = this.props;
		return quips[partOfTheDay];
	}

	render() {
    	return (
			<Text>{this.getQuip()}</Text>
    	);
  	}
}

export default connect(
	(state) => {
		return {
			partOfTheDay: state.ui.partOfTheDay,
			quips: state.entities.quips,
		}
	},
)(Quip)

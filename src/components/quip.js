import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { lightAwareText } from './utils/styles';

const Text = styled(lightAwareText)`
	font-family: 'LatoBold';
	font-size: 2.5em;
`;

export class Quip extends PureComponent {
	getQuip() {
		const { partOfTheDay, quips } = this.props;
		return quips[partOfTheDay];
	}

	render() {
    	return (
			<Text isLight={this.props.isLight}>
				{this.getQuip()}
			</Text>
    	);
  	}
}

export default connect(
	(state) => {
		return {
			partOfTheDay: state.partOfTheDay,
			quips: state.quips,
			isLight: state.isLight,
		}
	},
)(Quip)

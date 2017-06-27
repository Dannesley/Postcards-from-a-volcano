import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import sakurajimaLight from '../assets/images/sakurajima_light.jpg';
import sakurajimaDark from '../assets/images/sakurajima_dark.jpg';
import { setStateFromStorage, setPartOfTheDay } from '../state/actions';
import Centre from './centre';
import Fact from './fact';

const FullSizeBackground = styled.div`
	background-color: rgba(0,0,0,0.1);
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: ${
		props => props.isLight
			? `url(${ sakurajimaLight }) no-repeat center center fixed`
			: `url(${ sakurajimaDark }) no-repeat center center fixed`
	} ;
	background-size: cover;
`;

export class Background extends PureComponent {
	render() {
    	return (
      		<FullSizeBackground isLight={this.props.isLight} />
    	);
  	}
}

export default connect(
	(state) => {
		return {
			partOfTheDay: state.partOfTheDay,
			isLight: state.isLight,
		}
	},
)(Background)

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import sakurajimaNight from '../assets/images/sakurajima_night.jpg';
import { setStateFromStorage, setPartOfTheDay } from '../state/actions';
import getStateFromStorage from './utils/get-state-from-storage';
import getPartOfTheDay from './utils/get-part-of-the-day';
import Centre from './centre';
import RandomFacts from './random-facts';

const FullSizeBackground = styled.div`
	background-color: rgba(0,0,0,0.1);
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: black;

	background: url(${ sakurajimaNight }) no-repeat center center fixed;
	background-size: cover;
`;

const FullSizeContainer = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: rgba(0,0,0,0.1);
`;

export class App extends PureComponent {
	constructor() {
		super();
		chrome.storage.sync.get(['lastUpdated', 'factOfTheDay', 'greetings'], (storage) => {
			const state = getStateFromStorage(storage);
			this.props.setStateFromStorage(state);
			this.props.setPartOfTheDay(getPartOfTheDay());
		});
	}

	render() {
    	return (
      		<FullSizeBackground>
				<FullSizeContainer>
					<Centre />
					<RandomFacts/>
				</FullSizeContainer>
      		</FullSizeBackground>
    	);
  	}
}

export default connect(
	null,
	{ setStateFromStorage, setPartOfTheDay }
)(App)

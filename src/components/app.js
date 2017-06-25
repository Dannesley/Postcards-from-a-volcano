import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setStateFromStorage, setPartOfTheDay } from '../state/actions';
import getStateFromStorage from './utils/get-state-from-storage';
import getPartOfTheDay from './utils/get-part-of-the-day';
import Background from './background';
import Centre from './centre';
import Fact from './fact';

const FullSizeContainer = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: rgba(0,0,0,0.1);
`;

const STORAGE_KEYS = [
	'lastUpdated',
	'factOfTheDay',
	'greetings',
	'quips',
]

export class App extends PureComponent {
	constructor(props) {
		super(props);
		props.setPartOfTheDay(
			getPartOfTheDay(new Date().getHours())
		);
		chrome.storage.sync.get(STORAGE_KEYS, (storage) => {
			const state = getStateFromStorage(storage);
			props.setStateFromStorage(state);
		});
	}

	render() {
    	return (
			<div>
				<Background />
				<FullSizeContainer>
					<Centre />
					<Fact/>
				</FullSizeContainer>
			</div>
    	);
  	}
}

export default connect(
	null,
	{ setStateFromStorage, setPartOfTheDay }
)(App)

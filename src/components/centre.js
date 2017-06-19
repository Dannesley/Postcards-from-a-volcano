import React from 'react';
import styled from 'styled-components';
import sakurajimaNight from '../assets/images/sakurajima_night.jpg';
import GreetingGenerator from './greeting-generator';
import GreetingQuipGenerator from './greeting-quip-generator';
import ThoughtInput from './thought-input';

const Centred = styled.div`
	position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;
	transform: translate(-50%,-50%);
	transform-origin: 50% 50%;
`;

const GreetingWrapper = styled.div`
`;

export default class Centre extends React.Component {

	render() {
    	return (
			<Centred>
				<GreetingWrapper>
					<GreetingGenerator />
					<GreetingQuipGenerator />
				</GreetingWrapper>
				<ThoughtInput />
			</Centred>
    	);
  	}
}

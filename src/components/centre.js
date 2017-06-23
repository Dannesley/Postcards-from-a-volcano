import React, { PureComponent } from 'react';
import styled from 'styled-components';
import sakurajimaNight from '../assets/images/sakurajima_night.jpg';
import Greeting from './greeting';
import Quip from './quip';
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

export default class Centre extends PureComponent {
	render() {
    	return (
			<Centred>
				<div>
					<Greeting />
					<Quip />
				</div>
				<ThoughtInput />
			</Centred>
    	);
  	}
}

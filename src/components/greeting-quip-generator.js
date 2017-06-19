import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
	font-family: 'LatoBold';
	font-size: 2em;
`;

export default class GreetingQuipGenerator extends React.Component {

	generateQuip() {
		return 'Enjoy yourself, lavaley';
	}

	render() {
    	return (
			<Text>{this.generateQuip()}</Text>
    	);
  	}
}

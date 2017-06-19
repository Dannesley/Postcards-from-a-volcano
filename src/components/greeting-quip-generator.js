import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Text = styled.p`
	font-family: 'LatoBold';
	font-size: 2em;
`;

export default class GreetingQuipGenerator extends PureComponent {

	generateQuip() {
		return 'Enjoy yourself, lavaley';
	}

	render() {
    	return (
			<Text>{this.generateQuip()}</Text>
    	);
  	}
}

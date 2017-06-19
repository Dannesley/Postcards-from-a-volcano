import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setThought } from '../state/actions';

const INPUT_WIDTH = 300;
const INPUT_BORDER_SIZE = 3;
const VOLCANO_ORANGE = '#FF830F';
const VOLCANO_RED =  '#CF1020'

const ThoughtWrapper = styled.div`
	margin-top: 80px;
`;

const Prompt = styled.p`
	margin-bottom: 20px;
`;

const InputWrapper = styled.div`
	display: inline-block;
`;

const Input = styled.input`
	font-family: OpenSans;
	border: none;
	border-bottom: ${INPUT_BORDER_SIZE}px solid #FFF;
	background: none;
	outline: none;
	width: ${INPUT_WIDTH}px;
	padding: 3px 0;
	height: 20px;

	caret-color: ${props => props.isAThought ? VOLCANO_RED : VOLCANO_ORANGE};
	color: #FFF;

	&:focus + .thought_input_border {
		transform: scaleX(1);
	}

	${props => props.isAThought &&
		`+ .thought_input_border {
			transform: scaleX(1);
			transition: all 500ms ease-in;
			background-color: ${VOLCANO_RED};
		}`
	}
`;

const InputBorder = styled.div`
	margin-top: -${INPUT_BORDER_SIZE}px;
	height: ${INPUT_BORDER_SIZE}px;
	width: ${INPUT_WIDTH}px;
	top: 100%;
	background-color: ${VOLCANO_ORANGE};  
	transform: scaleX(0);  
	transform-origin: 0% 50%;
	transition: transform 250ms ease-in-out;
`;

export class ThoughtInput extends React.Component {

	onKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.input.blur()
		}
	}

	setThought = () => {
		return this.props.setThought(this.input.value)
	}

	render() {
		const { thought, setThought } = this.props;

    	return (
			<ThoughtWrapper>
				<Prompt>Give your thoughts to the volcano:</Prompt>
				<InputWrapper>
					<Input
						innerRef={input => this.input = input}
						onBlur={this.setThought}
						onKeyPress={this.onKeyPress}
						isAThought={thought.length > 0}
					/>
					<InputBorder className='thought_input_border'/>
				</InputWrapper>
			</ThoughtWrapper>
    	);
  	}
}

export default connect(
	(state) => {
		return {
			thought: state.entities.thought,
		}
	},
	{ setThought }
)(ThoughtInput)

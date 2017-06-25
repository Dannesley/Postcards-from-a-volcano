import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { setThought, clearThought, setIsThoughtSimmering } from '../state/actions';

const INPUT_WIDTH = 300;
const INPUT_BORDER_SIZE = 3;
const VOLCANO_ORANGE = '#FF830F';
const VOLCANO_RED =  '#CF1020'
const SIMMER_TIME = 4000;

const fadeOut = keyframes`
	from { opacity: 1; }
	to { opacity: 0; }
`

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

	caret-color: ${props => props.isThoughtSimmering ? VOLCANO_RED : VOLCANO_ORANGE};
	color: #FFF;
	
	&:focus + .thought_input_border {
		transform: scaleX(1);
	}

	${props => props.isThoughtSimmering && `
		animation: ${fadeOut} ${SIMMER_TIME}ms linear;
		animation-fill-mode: forwards;

		+ .thought_input_border {
			transform: scaleX(1);
			transition: all 500ms ease-in;
			background-color: ${VOLCANO_RED};
		}
	`}
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

export class ThoughtInput extends PureComponent {
	onKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.input.blur()
		}
	}

	componentDidUpdate() {
		const { isThoughtSimmering, clearThought } = this.props;
		if (isThoughtSimmering) {
			setTimeout(() => clearThought(), SIMMER_TIME);
		}
	}

	simmerThought = () => {
		const { thought, setIsThoughtSimmering } = this.props;
		if (thought.length > 0) {
			setIsThoughtSimmering();
		}
	}

	setThought = (event) => this.props.setThought(event.target.value);

	render() {
		const { thought, isThoughtSimmering, setThought } = this.props;

    	return (
			<ThoughtWrapper>
				<Prompt>Give your thoughts to the volcano:</Prompt>
				<InputWrapper>
					<Input
						value={thought}
						innerRef={input => this.input = input}
						onBlur={this.simmerThought}
						onKeyPress={this.onKeyPress}
						onChange={this.setThought}
						disabled={isThoughtSimmering}
						isThoughtSimmering={isThoughtSimmering}
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
			thought: state.thought,
			isThoughtSimmering: state.isThoughtSimmering,
		}
	},
	{ setThought, clearThought, setIsThoughtSimmering }
)(ThoughtInput)

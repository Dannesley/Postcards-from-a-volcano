import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setFactExpand } from '../state/actions';

const FactsWrapper = styled.div`
	position: absolute;
	width: 250px
	min-height: 150px;
	top: 50px;
	right: 25px;
    text-align: center;
	user-select: none;	
`;

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled.p`
	font-family: 'LatoBold';
	margin-bottom: 5px;
	cursor: pointer;
`;

const Chevron = styled.div`
	width: 7px;
	height: 7px;
	margin-left: 5px;
	margin-top: ${props=> props.isFactExpanded ? '10' : '1'}px;
	background: transparent;
	border-top: 2px solid #fff;
	border-right: 2px solid #fff;
	box-shadow: 0 0 0 lightgray;
	transform: ${
		props=> props.isFactExpanded ? 'translate3d(0,-50%,0) rotate(315deg)' : 'translate3d(0,-50%,0) rotate(135deg)'
	};
	cursor: pointer;
`;

export class RandomFacts extends React.Component {
	setExpandState = () => {
		this.props.setFactExpand(!this.props.isFactExpanded)
	}

	renderFact = () => {
		const { isFactExpanded, factOfTheDay } = this.props;
		return (
			isFactExpanded
				? <p>{factOfTheDay}</p>
				: null
		);
	}

	render() {
    	return (
			<FactsWrapper>
				<TitleWrapper>
					<Title onClick={this.setExpandState}>
						Did you know
					</Title>
					<Chevron 
						onClick={this.setExpandState}
						isFactExpanded={this.props.isFactExpanded}
					/>
				</TitleWrapper>
				{ this.renderFact() }
			</FactsWrapper>
    	);
  	}
}

export default connect(
	(state) => {
		return {
			isFactExpanded: state.ui.isFactExpanded,
			factOfTheDay: state.entities.factOfTheDay,
		}
	},
	{ setFactExpand }
)(RandomFacts)
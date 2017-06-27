import styled from 'styled-components';

export const lightAwareText = styled.p`
	text-shadow: ${props => props.isLight && 'black 1px 1px'};
`;
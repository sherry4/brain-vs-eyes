import * as React from 'react';
import styled from 'styled-components';

import variables from '../variables/variables';
import { ThemeContext } from '../theme/Themes';

const { font_sizes, font_weights } = variables;

const Container = styled.div`
    padding: 1rem 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ItemText = styled.span`
    color: ${props => props.color};
    font-size: ${font_sizes.item};
    font-weight: ${font_weights.bold};
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

const BoardItem = (props) => {
    const { color, value } = props;
    const { language } = React.useContext(ThemeContext);
    return (
        <Container>
            <ItemText color={color}>{language[value]}</ItemText>
        </Container>
    )
}

export default BoardItem;
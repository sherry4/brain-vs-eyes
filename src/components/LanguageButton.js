import * as React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../theme/Themes';
import variables from '../variables/variables';

const { border_radius, font_weights } = variables;

const Container = styled.button`
    background-color: transparent;
    width: 40px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${props => props.theme.toolbar_button};
    border-radius: ${border_radius.toolbar_button};
    cursor: pointer;
    user-select: none;
    margin-right: 16px;
    font-family: inherit;
`;

const Text = styled.span`
    font-family: inherit;
    color: ${props => props.theme.toolbar_button};
    text-transform: uppercase;
    font-weight: ${font_weights.bold};
`;

const Toolbar = (props) => {
    const { change_language } = props;
    const { language, theme } = React.useContext(ThemeContext);

    return (
        <Container theme={theme} onClick={change_language}>
            <Text theme={theme}>{language.name}</Text>
        </Container>
    )
}

export default Toolbar;